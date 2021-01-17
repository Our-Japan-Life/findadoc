export default function({ store, route, redirect }) {
    const user = store.state.admin.user;
    const blockedRoute = /\/admin\/*/g;

    if (!user && route.path.match(blockedRoute)) {
        redirect('/login');
    }
}