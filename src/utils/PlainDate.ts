import fecha from 'fecha'

export interface DecodeDate {
    dateObject: Date,
    year: number,
    month: number,
    date: number,
    hour: number,
    minute: number,
    second: number,
    day: number,
    time: number,
}

const zeroize = (value, length = 2) => {
    if (value == null) {
        value = '';
    }
    value = String(value);
    const zeroLen = length - value.length;
    if (zeroLen <= 0)
        return value;
    return new Array(zeroLen).fill('0').join('') + value;
};

enum CompareMode {
    time = 'time',
    date = 'date',
    datetime = 'datetime',
}

export class PlainDate {

    displayFormat: string = null                                        // 显示值格式字符串
    valueFormat: string = null                                          // 实际值格式字符串
    dateObject: Date = null                                             // 日期对象

    constructor(value, displayFormat, valueFormat) {
        this.displayFormat = displayFormat
        this.valueFormat = valueFormat

        if (!!value) {
            this.setValue(value)
        }
    }

    get year() {
        if (!this.isNull) return this.dateObject.getFullYear()
        else return null
    }

    get month() {
        if (!this.isNull) return this.dateObject.getMonth()
        else return null
    }

    get date() {
        if (!this.isNull) return this.dateObject.getDate()
        else return null
    }

    get hour() {
        if (!this.isNull) return this.dateObject.getHours()
        else return null
    }

    get minute() {
        if (!this.isNull) return this.dateObject.getMinutes()
        else return null
    }

    get second() {
        if (!this.isNull) return this.dateObject.getSeconds()
        else return null
    }

    get day() {
        if (!this.isNull) return this.dateObject.getDay()
        else return null
    }

    get time(): number {
        if (!this.isNull) return this.dateObject.getTime()
        return null
    }

    get displayString(): string {
        if (this.isNull) return null
        return fecha.format(this.dateObject, this.displayFormat)
    }

    get valueString(): string {
        if (this.isNull) return null
        return fecha.format(this.dateObject, this.valueFormat)
    }

    get isNull(): boolean {
        return !this.dateObject
    }

    get timeString(): string {
        if (this.isNull) return null
        return `${zeroize(this.hour)}${zeroize(this.minute)}${zeroize(this.second)}`
    }

    get dateString(): string {
        if (this.isNull) return null
        return `${zeroize(this.year)}${zeroize(this.month + 1)}${zeroize(this.date)}`
    }

    /*---------------------------------------method-------------------------------------------*/

    setValue(value: string) {
        if (!value) {
            this.dateObject = null
        } else {
            this.dateObject = PlainDate.parse(value, this.valueFormat)
        }
    }

    setDisplayValue(value: string) {
        if (!value) {
            this.dateObject = null
        } else {
            this.dateObject = PlainDate.parse(value, this.displayFormat)
        }
    }

    setYear(year: number): void {
        if (this.isNull) {
            this.dateObject = PlainDate.defaultDate()
        }
        this.dateObject.setFullYear(year)
    }

    setMonthDate(month: number, date: number): void {
        if (this.isNull) {
            this.dateObject = PlainDate.defaultDate()
        }
        this.dateObject.setMonth(month, date)
    }

    setHour(hour: number): void {
        if (this.isNull) {
            this.dateObject = PlainDate.defaultDate()
        }
        this.dateObject.setHours(hour)
    }

    setMinute(minute: number): void {
        if (this.isNull) {
            this.dateObject = PlainDate.defaultDate()
        }
        this.dateObject.setMinutes(minute)
    }

    setSecond(second: number): void {
        if (this.isNull) {
            this.dateObject = PlainDate.defaultDate()
        }
        this.dateObject.setSeconds(second)
    }

    greaterThan(plainDate: PlainDate, compareMode: CompareMode): number {
        if (this.isNull) {
            console.error('greaterThan: self is null')
            return -1
        }
        if (plainDate.isNull) {
            console.error('greaterThan: target is null')
            return -1
        }

        switch (compareMode) {
            case CompareMode.time:
                return Number(this.timeString) - Number(plainDate.timeString)
            case CompareMode.date:
                return Number(this.dateString) - Number(plainDate.dateString)
            case CompareMode.datetime:
                return this.time - plainDate.time
        }
    }

    lessThan(plainDate: PlainDate, compareMode: CompareMode): number {
        if (this.isNull) {
            console.error('lessThan: self is null')
            return -1
        }
        if (plainDate.isNull) {
            console.error('lessThan: target is null')
            return -1
        }
        return this.greaterThan(plainDate, compareMode) * -1
    }

    format(dateObject: Date): string {
        if (!dateObject) return null
        return PlainDate.format(dateObject, this.displayFormat)
    }

    parseDisplayString(displayString: string): Date {
        if (!displayString) return null
        return PlainDate.parse(displayString, this.displayFormat)
    }

    parseValueString(valueString: string): Date {
        if (!valueString) return null
        return PlainDate.parse(valueString, this.valueFormat)
    }

    static defaultDate(): Date {
        const date = new Date()
        date.setMonth(0, 1)
        date.setHours(0, 0, 0)
        return date
    }


    static format(dateObject: Date, formatString: string) {
        if (!dateObject) return null
        else {
            return fecha.format(dateObject, formatString)
        }
    }

    static parse(dateString: string, formatString: string) {
        if (!dateString) return null
        else {
            return fecha.parse(dateString, formatString)
        }
    }

    static decode(dateObject: Date): DecodeDate {
        if (!dateObject) {
            return null
        }
        return {
            dateObject,
            year: dateObject.getFullYear(),
            month: dateObject.getMonth(),
            date: dateObject.getDate(),
            hour: dateObject.getHours(),
            minute: dateObject.getMinutes(),
            second: dateObject.getSeconds(),
            day: dateObject.getDay(),
            time: dateObject.getTime(),
        }
    }

    static CompareMode = CompareMode
}