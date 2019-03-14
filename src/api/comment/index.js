import axios from 'axios';
import baseUrl from '@/api'

const api = {
    requestCommentData: (new_id, comments) => {
        return new Promise((resolve, reject) => {
            axios.get(baseUrl + '/api/user/addComments', {
                params: {
                    new_id,
                    index_video: 1,
                    comments,
                }
            }).then(data => resolve(data.data))
        })
    },
    requestDetailData: (id) => {
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