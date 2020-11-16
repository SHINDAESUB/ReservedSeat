export default {
    seatsList (state , payload){
        // state.projectList.push(data)
        state.seats = payload

        let activeSeats = 0 //선택가능 좌석
        let selectedSeats = 0 //선택한 좌석

        for(let i in payload){
            for(let j in payload[i]){
                //선택가능한 좌석 1 , 선택된 좌석 5 , 교역자, 유오디아
                if(payload[i][j].seat_active === 1){  
                    activeSeats = ++activeSeats  
                }else if(payload[i][j].seat_active === 5){
                    activeSeats = ++activeSeats  
                    selectedSeats = ++selectedSeats
                }else if(payload[i][j].seat_active === 4 && payload[i][j].name === "교역자"){
                    activeSeats = ++activeSeats  
                    selectedSeats = ++selectedSeats
                }else if(payload[i][j].seat_active === 4 ){
                    activeSeats = ++activeSeats  
                    
                }  
            }
        }
        
        state.activeSeats = activeSeats //선택가능 좌석
        state.selectedSeats = selectedSeats //선택한 좌석

    },

    updateList (state , payload){

        state.seats = []
        state.seats = payload

        let activeSeats = 0 //선택가능 좌석
        let selectedSeats = 0 //선택한 좌석

        for(let i in payload){
            for(let j in payload[i]){
                //선택가능한 좌석 1 , 선택된 좌석 5 , 교역자, 유오디아
                if(payload[i][j].seat_active === 1){  
                    activeSeats = ++activeSeats  
                }else if(payload[i][j].seat_active === 5){
                    activeSeats = ++activeSeats  
                    selectedSeats = ++selectedSeats
                }else if(payload[i][j].seat_active === 4 && payload[i][j].name === "교역자"){
                    activeSeats = ++activeSeats  
                    selectedSeats = ++selectedSeats
                }else if(payload[i][j].seat_active === 4 ){
                    activeSeats = ++activeSeats  
                }  
            }
        }
        
        state.activeSeats = activeSeats //선택가능 좌석
        state.selectedSeats = selectedSeats //선택한 좌석

    },

    modifySeats(state , payload){
        for(let i in state.seats[payload.seat]){
            if(state.seats[payload.seat][i].id === payload.seatId){
                state.seats[payload.seat][i].seat_active = payload.seat_active
                state.seats[payload.seat][i].name = payload.name
                state.seats[payload.seat][i].pw = payload.pw
                if(payload.seat_active === 1){
                    state.selectedSeats = --state.selectedSeats
                }else if(payload.seat_active === 5){  
                    state.selectedSeats = ++state.selectedSeats
                }else if(payload.seat_active === 4 ){
                    state.selectedSeats = --state.selectedSeats
                }

            }
        }
    }    
}