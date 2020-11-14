import {App} from "vue"
import {ComponentPlugin} from "./shims";
import {installPlugin} from "./utils/installPlugin";

import Root from './packages/root'
import Button from "./packages/button";
import ButtonGroup from './packages/button-group'
import Input from "./packages/input";
import Icon from './packages/icon';
import Loading from './packages/loading'
import LoadingMask from './packages/loading-mask'
import Checkbox from './packages/checkbox'
import CheckboxGroup from './packages/checkbox-group'
import MessageService from './packages/message'
import List from './packages/list'
import Item from './packages/item'
import Grid from './packages/grid'
import Radio from './packages/radio'
import RadioGroup from './packages/radio-group'
import Dialog from './packages/dialog'
import DialogService from './packages/dialog-service'
import Scroll from './packages/scroll'
import NoticeService from './packages/notice-service'
import LoadingService from './packages/loading-service'
import Number from './packages/number'

function install(app: App) {
    installPlugin(app, plugins)
}

const plugins: ComponentPlugin[] = [
    Root,

    Button, ButtonGroup, Icon, Loading, LoadingMask,
    List, Item, Grid, Dialog, Scroll,

    Input, Checkbox, CheckboxGroup, Radio, RadioGroup, Number,

    MessageService, DialogService, NoticeService, LoadingService,
]

export {
    install,

    Root,

    Button, ButtonGroup, Icon, Loading, LoadingMask,
    List, Item, Grid, Dialog, Scroll,

    Input, Checkbox, CheckboxGroup, Radio, RadioGroup, Number,

    MessageService, DialogService, NoticeService, LoadingService,
}

export default {
    install,
}