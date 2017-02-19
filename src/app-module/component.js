import { component } from '../helper';

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