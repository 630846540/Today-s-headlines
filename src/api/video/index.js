import axios from 'axios';
import baseUrl from '@/api'

const api = {
    requestVideoData(page, keywords) {
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
