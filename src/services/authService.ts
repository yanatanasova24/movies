import React from 'react';
import {apiService} from "./apiService";
const authService = {
    async login():Promise<void>{
        const {data} = await apiService.post<{access:string}>('auth/login');
        this.setToken(data.access)
    },
    setToken(token:string):void{
        localStorage.setItem('token', token)
    },

    getToken():string{
        return localStorage.getItem('token')
    }
}