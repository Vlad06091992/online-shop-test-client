import axios from 'axios'
export const instance = axios.create({
    baseURL: 'https://online-shop-test-server-dcrd-d149oteic-vlad06091992.vercel.app/',
    withCredentials:true,
})

// Добавляем интерсептор для обработки предварительных запросов
instance.interceptors.request.use(config => {
    // Устанавливаем заголовки, необходимые для предварительных запросов
    config.headers['Access-Control-Request-Method'] = 'GET'; // Укажите метод, который ваш сервер поддерживает
    config.headers['Access-Control-Request-Headers'] = 'Content-Type, Authorization'; // Укажите необходимые заголовки

    return config;
});