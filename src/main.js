require('./main.scss');
// polyfills 
import './polyfills';

import { NgModule }      from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import mainModule from './app-module';

document.addEventListener('DOMContentLoaded', function() {
  platformBrowserDynamic().bootstrapModule(mainModule);
});