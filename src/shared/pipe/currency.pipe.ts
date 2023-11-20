import { Pipe, PipeTransform } from '@angular/core';

const PADDING = '000000';

@Pipe({ name: 'indianCurrency' })
export class IndianCurrencyPipe implements PipeTransform {

    private DECIMAL_SEPARATOR: string;
    private THOUSANDS_SEPARATOR: string;

    constructor() {
        // TODO comes from configuration settings
        this.DECIMAL_SEPARATOR = '.';
        this.THOUSANDS_SEPARATOR = ',';
    }

    // This function will add commas to number and keep fraction part as it is...
    // This is done so that currency directive can also call this method... So keep as it is...
    addCommas(integer:any) {
        let [inte, decimal = ''] = (integer || '').toString().split(this.DECIMAL_SEPARATOR);

        inte = inte.replace(/^0(0+)?/g, '0');
        inte = inte.replace(/\D/g, '');

        return inte.replace(/(\d)(?=(\d\d)+\d$)/g, '$1' + this.THOUSANDS_SEPARATOR) + (integer.indexOf(this.DECIMAL_SEPARATOR) != -1 ? this.DECIMAL_SEPARATOR + decimal : '');
    }

    transform(value: number | string, fractionSize: number = 0, negativeAllowed: boolean = false): string {
        let [integer, fraction = ''] = (value || '').toString().split(this.DECIMAL_SEPARATOR);

        let negativeExists = false;
        if (negativeAllowed) {
            if (integer.indexOf("-") == 0) negativeExists = true;
        }

        integer = this.addCommas(integer);

        fraction = fraction.replace(/\D/g, '');
        fraction = fractionSize > 0 ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize) : '';

        let final = integer ? integer + fraction : integer;

            final = final + ' INR'
        return negativeExists ? "-" + final : final;
    }

    parse(value: string, fractionSize: number = 0): string {
        let [integer, fraction = ''] = (value || '').split(this.DECIMAL_SEPARATOR);

        integer = integer.replace(new RegExp(this.THOUSANDS_SEPARATOR, 'g'), '');

        fraction = parseInt(fraction, 10) > 0 && fractionSize > 0
            ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize)
            : '';

        return integer ? integer + fraction : integer;
    }
}

