export default defineNuxtRouteMiddleware((to, from) => {
    
    // check local storage for token
    const token = localStorage.getItem('token')
    // if no token, redirect to login page
    if (!token) {
        return navigateTo('/')
    }

})
