import {Hello} from './components/hello';
import {App} from './app';
export function configureRouter(router: vuejs.Router<App>) {
    router.map({
        '/': {
            component: Hello,
            name: 'hello'
        }
    });

}