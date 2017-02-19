import { component } from 'ng2es6helper';

const componentProp = { 
    selector: 'child-route', 
    template: require('./template.html'),
    route: 'hello/hi'
};

export default component(
    componentProp,
    class appComponent {
        constructor() {

        }
    }
);