import {TreeMark} from "../tree/tree";

export class CascadeData {

    key: string
    label: string
    children: CascadeData[]

    constructor(public data: any, public context: any, public level: number, public parent?: CascadeData | null) {
        const {keyField, labelField} = context
        this.key = !!keyField ? data[keyField] : undefined
        this.label = !!labelField ? data[labelField] : undefined
    }

    /*当前节点的子节点的数据*/
    get childrenData() {
        return this.data[this.context.childrenField]
    }

    /*是否为叶子节点*/
    get isLeaf(): boolean {
        const {isLeaf} = this.context
        if (!!isLeaf) {
            return isLeaf(this)
        } else {
            return !this.children || this.children.length === 0
        }
    }

    get expandKeys(): string[] {
        let expandKeys = [this.key]
        let parent = this.parent
        while (!!parent && !!parent.key) {
            expandKeys.unshift(parent.key)
            parent = parent.parent
        }
        return expandKeys
    }

    get isExpand() {
        let expandKeys = this.context.expandKeys
        let selfExpandKeys = this.expandKeys
        return expandKeys.toString() === selfExpandKeys.toString()
    }

    get isLoading(): boolean {
        return this.context.getMark(this.key, TreeMark.loading)
    }

    get nodeDisabled(): boolean {
        return !!this.context.nodeDisabled && this.context.nodeDisabled(this)
    }

    get filterData(): CascadeData[] {
        let filterData: CascadeData[] = [this]
        let parent = this.parent
        while (!!parent && !!parent.key) {
            filterData.unshift(parent)
            parent = parent.parent
        }
        return filterData
    }

    /**
     * 是否被筛选
     * @author  韦胜健
     * @date    2020/4/8 9:29
     */
    get isPassFilter(): boolean {
        if (!this.context.filterText) return false
        let filterData = this.filterData
        if (!!this.context.filterMethod) {
            return this.context.filterMethod(filterData, this.context.filterText)
        }
        return filterData.some(item => item.label.indexOf(this.context.filterText) > -1)
    }

    setChildren(children: CascadeData[]) {
        this.context.$set(this.data, this.context.childrenField, children)
    }
}

export class CascadeMark {
    node: CascadeData
    formatCount: number
    loading: boolean
    loaded: boolean

    constructor(public key: string) {
    }

    static node = 'node'
    static formatCount = 'formatCount'
    static loading = 'loading'
    static loaded = 'loaded'
}