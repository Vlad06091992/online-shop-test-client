import axios from 'axios'
export const instance = axios.create({
    baseURL: 'https://online-shop-test-server-dcrd-d149oteic-vlad06091992.vercel.app/',
    withCredentials:true,
})