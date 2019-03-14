import axios from 'axios';
import baseUrl from '@/api'

const api = {
    requestDetailData:(id)=> {
        return new Promise((resolve, reject) => {
            axios.get(baseUrl + '/api/user/videoDetails/' + id)
                .then(data => {
                    //console.log(data.data);
                    resolve(data.data);
                })
                .catch(err => reject(err))
        })
    }
}

export default api