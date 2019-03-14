import axios from 'axios';
import baseUrl from '@/api'

const api = {
    requestData(page, type) {
        return new Promise((resolve, reject) => {
            axios.get(baseUrl + '/api/user/infoList', {
                params: {
                    page,
                    type
                }
            }).then(data => resolve(data.data))
                .catch(err => reject(err))
        })
    }
}

export default api