import axios from 'axios';
import baseUrl from '@/api'

const api = {
    requestData(phone, password) {
        return new Promise((resolve, reject) => {
            axios.post( baseUrl + '/api/user/login', {
                  phone,
                    password
            }).then(data => resolve(data.data))
        })
    }
}

export default api