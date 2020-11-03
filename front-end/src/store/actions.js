import seatsService from '@/service/seats'

export const getSeatsList = ({commit}) => {
    seatsService.getSeats()
        .then(data => {
            commit('seatsList',data)
        })
}

export const updateList = ({commit}, info) => {
    commit('updateList', info)
}

export const modifySeats = ({commit}, info) => {
    commit('modifySeats', info)
}

