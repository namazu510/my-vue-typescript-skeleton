import Component from 'vue-class-component';

require('./hello.scss');
@Component({
    template: require('./hello.pug')
})
export class Hello{
    data() {
        return {
            imgsrc: require('../assets/logo.png'),
            msg: 'Hello Vue!'
        }
    }
}
