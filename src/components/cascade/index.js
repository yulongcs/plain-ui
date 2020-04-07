import cascade from './pl-cascade.vue'
import panel from './pl-cascade-panel.tsx'
import {plugin} from "../../utils";
import service from './service/index.ts'

export default plugin([cascade, panel], [service])