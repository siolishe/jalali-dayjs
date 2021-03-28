# Day.js Jalali
> Jalali calendar plugin for day.js

## Installation

``` npm i jalali-dayjs ```

or 

``` yarn add jalali-dayjs ```

## How to use

``` javascript
import jalali from 'jalali-dayjs'

dayjs.extend(jalali)

dayjs().locale('fa').format() // 1397-04-01T16:30:00+04:30

dayjs('1397-04-01T16:30:00+04:30', { jalali: true }).format() //  2017-06-22T16:30:00+04:30

dayjs('1397-04-01T16:30:00+04:30', { jalali: true }).locale('fa').format() //  1397-04-01T16:30:00+04:30
```
