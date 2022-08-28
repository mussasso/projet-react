import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers:{
        Accept:"application/json"
    },

    params: {
        api_key:'08812c29c51a7b96eef11eec84bf4f21'
    }
})