import stocks from '../../data/stocks'


const state = {
    stocks: []
},

const mutations = {
    'SET_STOCKS' (state, stocks) {
        state.stocks = stocks
    },
    'RND_STOCK' (){

    }
},

const actions = {
    buyStocks: ({commit}, order) =>{

    },
    initStock: ({commit}) =>{
        commit('SET_STOCKS', stocks)
    },
    radomiseStock: ({commit}) =>{

    }
}

const getters = {
    stocks: state =>{
        return state.stock
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}