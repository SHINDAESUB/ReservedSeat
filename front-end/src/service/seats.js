import axios from 'axios'

export default {

    async getSeats(){
        try{
            const result = await axios.get('/getSeats')
            return result.data
        }catch(error){
            return error.message
        }
    },

    async seatsModify(param){
        try{
            const result = await axios.post('/seatsModify',{ params: param })
            return result
        }catch(error){
            return error.message
        }
    }

}