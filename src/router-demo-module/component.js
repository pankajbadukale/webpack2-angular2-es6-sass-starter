import { component } from 'ng2es6helper';

const componentProp = { 
    selector: 'another-route', 
    template: require('./template.html'),
    route: 'hello'
};

export default component(
    componentProp,
    class appComponent {
        constructor() {

        }
    }
);