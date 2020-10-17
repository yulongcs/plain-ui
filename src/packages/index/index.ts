import {Button} from "@/packages/button/button";
import {App} from "vue"

const components = [
    Button,
]

export function installPackage(app: App) {
    components.forEach(component => {
        app.component(component.name, component)
    })
}