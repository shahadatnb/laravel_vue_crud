import { ref, reactive } from 'vue'
import router from '../router/router'
const authStore = reactive({
    serverUrl: 'http://localhost:8000',
    isAuthenticated: localStorage.getItem('auth') == 1,
    user: JSON.parse(localStorage.getItem('user')),
    userProfile: JSON.parse(localStorage.getItem('userProfile')),
    errorMessage: {},
    authenticate(email, password) {
        authStore.errorMessage = {}
        fetch( `${this.serverUrl}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        }).then(res => res.json())
            .then(res => {
                if (res.error == 0) {
                    authStore.isAuthenticated = true
                    authStore.user = res
                    authStore.userProfile = res.user
                    localStorage.setItem('auth', 1)
                    localStorage.setItem('user', JSON.stringify(res))
                    localStorage.setItem('userProfile', JSON.stringify(res.user))
                    router.push('/dashboard')
                }else{
                    authStore.errorMessage = res
                }
            })
    },
    logout() {
        authStore.isAuthenticated = false
        authStore.user = {}
        localStorage.setItem('auth', 0)
        localStorage.setItem('user', '{}')
        router.push('/login')
    },
    getUserToken(){
        return authStore.user.token
    },
    async register(name, email, password, password_confirmation){
        const register = fetch(`${this.serverUrl}/api/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password, password_confirmation })
        })
        try{
            const res = await register
            const data = await res.json()
            if(data.error == 0){
                authStore.errorMessage = {}
                authStore.authenticate(email, password)
            }else{
                authStore.errorMessage = data.data
            }
        }
        catch(err){
            console.log(err)
        }
        
    }
})

export { authStore }