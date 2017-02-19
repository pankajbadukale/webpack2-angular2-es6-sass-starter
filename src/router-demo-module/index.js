import { module } from 'ng2es6helper';

import  appComponent  from './component';

import childComponent from './shared/child-route-component';

import { RouterModule, PreloadAllModules } from '@angular/router';

const moduleProp = {
    imports: [RouterModule],
    declarations: [ appComponent, childComponent ]
};

export default module(moduleProp, 
    class mainModule {
        constructor() {

        }
    }
);