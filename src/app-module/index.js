import { module } from '../helper';

import { BrowserModule } from '@angular/platform-browser';

import  appComponent  from './component';

const moduleProp = {
    imports: [ BrowserModule ],
    declarations: [ appComponent ],
    bootstrap: [ appComponent ]
};

export default module(moduleProp, 
    class mainModule {
        constructor() {

        }
    }
);