const path = require("path")
const fs = require("fs").promises
// @ts-ignore
const resolve = (filePath: string) => path.join(__dirname, "../", filePath)
const utils = {path, fs, resolve, join: path.join}

interface ScanOption {
    path: string,
    handleFile?: (fileRelativePath: string) => void
    handleDirectory?: (directoryRelativePath: string) => void
    excludeFileRegexp?: RegExp | RegExp[],
    excludeDirectoryRegExp?: RegExp | RegExp[],
}

const ScanUtils = (() => {

    /*获取文件状态，文件不存在则返回null*/
    const getStat = async (filePath: string) => {
        try {
            return await fs.stat(filePath)
        } catch (e) {
            return null
        }
    }

    /*将路径中的符号转成系统支持的路径分隔符*/
    const formatPath = (filePath: string) => filePath.replace(/([\/\\])/g, path.sep)

    /*扫描路径*/
    async function scan({path, handleFile, handleDirectory, excludeFileRegexp, excludeDirectoryRegExp,}: ScanOption) {
        path = utils.path.normalize(path)
        const state = await getStat(path)
        if (!!state) {
            if (state.isFile()) {
                if (!!excludeFileRegexp && (Array.isArray(excludeFileRegexp) ? excludeFileRegexp.some(i => i.test(path)) : excludeFileRegexp.test(path))) {
                    return
                }
                !!handleFile && await handleFile(path)
            } else {
                if (!!excludeDirectoryRegExp && (Array.isArray(excludeDirectoryRegExp) ? excludeDirectoryRegExp.some(i => i.test(path)) : excludeDirectoryRegExp.test(path))) {
                    return
                }
                !!handleDirectory && await handleDirectory(path)
                const files = await utils.fs.readdir(path)
                await Promise.all(files.map((file: string) => scan({
                    path: utils.join(path, file),
                    handleFile,
                    handleDirectory,
                    excludeFileRegexp,
                    excludeDirectoryRegExp,
                })))
            }
        }
    }

    return {
        scan,
    }
})();

(async () => {
    const output = resolve("theme/scan.scss.json")
    const map: Record<string, string> = {}

    /*属于依赖的scss文件，最后输出的数据中，会去除这里出现的依赖文件*/
    let dependList: string[] = []

    /*扫描scss，如果scss引入了其他的scss文件，一并输出到结果去*/
    const resolveScssCode = async (filePath: string): Promise<string> => {
        let code = (await utils.fs.readFile(filePath)).toString("utf-8").replace(/([\r\n])/g, '')
        if (code.indexOf('@import') > -1) {
            const regexp = /@import "(.*?)";?/g
            let match = regexp.exec(code)
            let dependencies: {
                input: string,
                path: string,
            }[] = []
            while (!!match) {
                let name = match[1]
                if (!name.endsWith('.scss')) {name = name + '.scss'}
                const p = utils.path.resolve(utils.path.dirname(filePath), name)
                dependencies.push({
                    input: match[0],
                    path: p,
                })
                dependList.push(p.replace(/[\\\/]/g, '/'))
                match = regexp.exec(code)
            }
            await Promise.all(dependencies.map(async ({input, path}) => {
                const subCode = await resolveScssCode(path)
                code = code.replace(input, subCode)
            }))
        }
        return code
    }

    await ScanUtils.scan({
        path: resolve("src/packages"),
        handleFile: async (path: string) => {
            const name = path.replace(/[\\\/]/g, '/')
            if (!!map[name]) return
            const basename = utils.path.basename(path)
            const extname = utils.path.extname(basename)
            if (extname !== '.scss') return;
            map[name] = await resolveScssCode(path)
        },
    })

    const compReg = /src\/packages\/(.*?)\/.*/

    const data = Object.entries(map).filter(([path]) => dependList.indexOf(path) === -1).map(([path, source]) => {
        const match = compReg.exec(path)
        return {
            source,
            component: !match ? 'no component!' : match[1],
        }
    }).reduce((prev, item) => {
        if (!prev[item.component]) prev[item.component] = []
        prev[item.component].push(item.source)
        return prev
    }, {} as Record<string, string[]>)
    await fs.writeFile(output, JSON.stringify(data, null, 2))
})();