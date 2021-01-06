import {ComponentPublicInstance, createApp} from 'vue';
import Root from '../packages/root'
import {installPlugin} from "./installPlugin";
import {addClass} from "plain-utils/dom/addClass";

const getIns = (() => {
    let ins: ComponentPublicInstance | undefined;
    return () => {
        if (!ins) {
            const container = document.createElement('div')
            addClass(container, 'service-without-context')
            document.body.appendChild(container)
            const app = createApp({render() {return <pl-root/>}})
            installPlugin(app, Root)
            ins = app.mount(container)
        }
        return ins
    }
})();

export function getServiceWithoutContext<Service>(serviceGetter: (ins: ComponentPublicInstance) => Service) {
    return serviceGetter(getIns())
}