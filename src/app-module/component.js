import { component } from 'ng2es6helper';

const componentProp = { 
    selector: 'app', 
    template: require('./template.html')
};

export default component(
    componentProp,
    class appComponent {
        constructor() {

        }
    }
);