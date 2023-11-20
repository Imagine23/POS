import { NgModule } from '@angular/core';

import { IndianCurrencyPipe } from './pipe/currency.pipe';

@NgModule({
    imports: [
    ],
    declarations: [
        IndianCurrencyPipe,
       
    ],
    exports: [
        IndianCurrencyPipe,
       
    ],
    providers: [
        IndianCurrencyPipe,
    ],

})

export class SharedModule {

}
