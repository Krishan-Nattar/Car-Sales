import { BUY_ITEM } from '../actions/actions';
import {REMOVE_ITEM} from '../actions/actions';

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    store: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case BUY_ITEM:
        let match = false;
        state.car.features.forEach(item=>{
            if(item.id.toString()===action.payload.id.toString()){
                match = true;
            }
        })
        if(match==true){
            return state;
        }
      return {
        ...state,
        car: {
            ...state.car,
            features: [...state.car.features, action.payload]
        },
        additionalPrice: state.additionalPrice += action.payload.price
      };
    case REMOVE_ITEM:
      let newList = state.car.features.filter(item=>item.id != action.payload.id)
      console.log(newList);
      return {
        ...state,
        car: {
            ...state.car,
            features: newList
        },
        additionalPrice: state.additionalPrice -= action.payload.price
      };
    default:
      return state;
  }
}

export default reducer;
