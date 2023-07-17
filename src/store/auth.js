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
                this.isRegister = true
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
        async resendCode(option){
            try {
             const response =  await axios.post('auth/code/resend',option)
                console.log(response)
            }
            catch (err){
                console.log(err)
            }
        },
        checkUserRegister(){
            let isRegister = false
            const token = localStorage.getItem('token') || false
            console.log(token,"auth token")
            if(token){
                isRegister = true
                this.user = JSON.parse(localStorage.getItem('user'))
            }
            else{
                isRegister = false
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