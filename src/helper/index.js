import { Component, NgModule } from '@angular/core';
import { extend } from 'lodash';

export const component = (prop, targetClass) => {
    targetClass.annotations = [
        new Component(extend({}, prop))
    ];

    return targetClass;
};

export const module = (prop, targetClass) => {
    targetClass.annotations = [
        new NgModule(extend({}, prop))
    ];

    return targetClass;
};
