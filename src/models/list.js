import { HTTP } from'../utils/http'
import config from '../utils/config'

class ListModel extends HTTP {
    getListDatas (cityId,field) {
       return new Promise ((resolve,reject) =>{
        this.axiosPost({
            url: config.API.GET_LIST_DETAS,
            data: {
                cityId,
                field,
            },
           success(data){
            resolve({
                data,
                status: 0
            })
           },
           error (error) {
            reject({
                status: -1
            })
           }
        })
       })
    }
}

export { ListModel }