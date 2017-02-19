import { component } from 'ng2es6helper';

const componentProp = { 
    selector: 'home', 
    template: require('./template.html'),
    route: ''
};

export default component(
    componentProp,
    class appComponent {
        constructor() {

        }
    }
);