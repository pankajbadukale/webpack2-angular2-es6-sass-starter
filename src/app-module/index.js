import { module, routeConfig, routerConfig } from 'ng2es6helper';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, PreloadAllModules } from '@angular/router';

import helloRouteModule from '../router-demo-module';

import  appComponent  from './component';
import homeComponent from './shared/home';

const moduleProp = {
    imports: [ 
        BrowserModule,
        routerConfig(routeConfig),
        helloRouteModule
    ],
    declarations: [ appComponent, homeComponent ],
    bootstrap: [ appComponent ],
};

export default module(moduleProp, 
    class mainModule {
        constructor() {

        }
    }
);