export default defineNuxtRouteMiddleware(async (to, from) => {
    const user = useSupabaseUser();

    // Aggiungi le route pubbliche che non richiedono autenticazione
    const publicRoutes = ['/login', '/register'];

    if (!user.value && !publicRoutes.includes(to.path)) {
        return navigateTo('/login');
    }

    // Reindirizza gli utenti autenticati dalla pagina di login alla home
    if (user.value && publicRoutes.includes(to.path)) {
        return navigateTo('/profile');
    }
});
