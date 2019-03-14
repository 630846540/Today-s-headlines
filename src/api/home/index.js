import axios from 'axios';
import baseUrl from '@/api'

const api = {
    requestData:(page,keywords)=> {
        return new Promise((resolve, reject) => {
            axios.get(baseUrl + '/api/user/phone', {
                params: {
                    page,
                    keywords
                }
            })
                .then(data => {
                    //console.log(data.data);
                    resolve(data.data);
                })
                .catch(err => reject(err))
        })
    },
    requestVideoData:(page, keywords) =>{
        return new Promise((resolve, reject) => {
            axios.get(baseUrl + '/api/user/video', {
                params: {
                    page,
                    keywords
                }
            })
                .then(data => resolve(data.data))
                .then(err => reject(err))
        })
    }
}

export default api