import { createStore } from "redux";

const initialState = {
    1:{
        id:1,
        rasmi: 'https://www.ikea.com/us/en/images/products/lauters-table-lamp-with-led-bulb-ash-white__0879402_pe714879_s5.jpg',
        nomi: 'Modern lamp',
        narxi: '24$'
    },
    2:{
        id:2,
        rasmi: 'https://www.ikea.com/us/en/images/products/lauters-table-lamp-with-led-bulb-ash-white__0879402_pe714879_s5.jpg',
        nomi: 'Modern lamp',
        narxi: '24$'
    },
    3:{
        id:3,
        rasmi: 'https://www.ikea.com/us/en/images/products/lauters-table-lamp-with-led-bulb-ash-white__0879402_pe714879_s5.jpg',
        nomi: 'Modern lamp',
        narxi: '24$'
    },
    4:{
        id:4,
        rasmi: 'https://www.ikea.com/us/en/images/products/lauters-table-lamp-with-led-bulb-ash-white__0879402_pe714879_s5.jpg',
        nomi: 'Modern lamp',
        narxi: '24$',
        change: false,
    },
};

const Reducer = (state = initialState, action) => {
  console.log(action);
    switch (action.type) {
    case "ADD_ITEM":{
        state = {...state, [action.payload.id]:{...action.payload}}
        return state
    }

    case "DELETE_ITEM": {
        const t = Object.values(state);
        state = t.filter((item) => item.id !== action.payload.id)
        return state;
    }
    default:
      return state;
  }
};

const store = createStore(Reducer);

export default store