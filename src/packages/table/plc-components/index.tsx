import index from './plc-index'
import toggle from './plc-toggle'
import input from './plc-input'
import number from './plc-number'
import date from './plc-date'


import {installPlugin} from "@/util/install";

export default installPlugin([
    index,
    toggle,
    input,
    number,
    date,
]);