import axios from "@/plugins/axios.js";
import {defineStore} from "pinia";
import { useToast } from "vue-toastification";

const toast = useToast()

export const useAuthStore = defineStore('authStore',{
    state : () =>({
        user : undefined,
        token : undefined,
        refreshToken : undefined,
        accessToken:undefined,
        showModal : null,
        modalType : 'login' | 'register',
        isRegister:false
    }),
    actions:{
        async getUser(options){
            try{
                const user = await axios.post('/auth/register', options)
                console.log(user)
                this.user = user.data
                return user
            }
            catch (err){
                console.log(err)
                toast.error("Ro'yxatdan o'tishda xatolik yuz berdi")
            }
        },
        async setAccessToken(option){
            try{
                const token = await axios.post('auth/access/token',option)
                localStorage.setItem('token',token.data.accessToken)
                localStorage.setItem('refreshToken',token.data.refreshToken)
            }
            catch (err){
                console.log(err)
                toast.error('Token olib kelishda xatolik')
            }
        },
        async userActive(option){
            try{
                await axios.post('auth/activate',option)
            }
            catch (err){
                console.log(err)
            }
        },
        checkUserRegister(){
            let isRegister = false
            if(localStorage.getItem('token')){
                this.isRegister = true
                isRegister = true
                this.user = JSON.parse(localStorage.getItem('user'))
            }
            return isRegister
        },
        logOut(){
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            localStorage.removeItem('refreshToken')
            this.isRegister = false
        }
    }
})