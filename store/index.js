export const state = () => ({
    cards: [
        {
            title: "Pre-fab homes",
            src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
            flex: 12
        },
        {
            title: "Favorite road trips",
            src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
            flex: 6
        },
        {
            title: "Best airlines",
            src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
            flex: 6
        }
    ]
})

export const mutations = {

}
export const actions = {

}
export const modules = {

}
export const getters = {
    getProduct(state) {
        return state.cards;
    }
}

