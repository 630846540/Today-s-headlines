import axios from 'axios';
import baseUrl from '@/api'

const api = {
    requestData(phone, password) {
        return new Promise((resolve, reject) => {
            axios.post(baseUrl + '/api/user/register', {
                phone,
                password
            }).then(data => resolve(data.data))
                .catch(err => reject(err))
        })
    }
}

export default api