export default {
    seatsList (state , data){
        // state.projectList.push(data)
        state.seats = data
        // console.log("data :",data)
    },

    updateList (state , data){
        state.seats = Object.assign({}, data)
    },

    modifySeats(state , payload){
        // console.log("넘어온 데이터 :",payload)
        for(let i in state.seats[payload.seat]){
            // console.log("u :",state.seats[payload.seat][i].id)
            if(state.seats[payload.seat][i].id === payload.seatId){
                state.seats[payload.seat][i].seat_active = payload.seat_active
                state.seats[payload.seat][i].name = payload.name
                state.seats[payload.seat][i].pw = payload.pw

            }

        }
    }    
}