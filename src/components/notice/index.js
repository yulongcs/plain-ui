import {plugin} from "../../utils";
import Container from './pl-notice-container'

const NoticeService = {
    install(Vue) {
        const $plain = Vue.prototype.$plain
        let container;

        const notice = async (...args) => {
            if (!container) {
                container = await $plain.newInstance(Container)
            }
            return container.newService(...args)
        }

        Object.keys($plain.STATUS).forEach(status => {
            notice[status] = (message, option) => {
                return notice(message, {status, ...(option || {})})
            }
        })

        Vue.prototype.$notice = notice
    },
}

export default plugin([], [NoticeService])