import axios from "@/plugins/axios.js";
import {defineStore} from "pinia";
import { useToast } from "vue-toastification";

const toast = useToast()

const useAuthStore = defineStore('authStore',{
    state : () =>({
        user : undefined,
        token : undefined,
        refreshToken : undefined,
        accessToken:undefined,
        showModal : null,
        modalType : 'login' | 'register'
    }),
    actions:{
        async getUser(options){
            try{
                const user = await axios.get('/auth/register',{...options})
                this.user = user
                return user
            }
            catch (err){
                toast.error("Ro'yxatdan o'tishda xatolik yuz berdi")
            }
        }
    }
})