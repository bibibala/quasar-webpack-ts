import { boot } from 'quasar/wrappers';
import { Key } from 'src/utils/useStatic';
import { haveToken } from 'src/utils/useStorage';

export default boot(({ router }) => {
    router.beforeEach((to, from, next) => {
        if (to.meta.auth) {
            if (haveToken()) {
                next();
            } else {
                next({ name: Key.ROUTER_NAME });
            }
        } else {
            next();
        }
        if (to.meta.title) {
            document.title = `${to.meta.title as string}`;
        } else {
            document.title = to.matched[0].meta.title as string;
        }
    });
});
