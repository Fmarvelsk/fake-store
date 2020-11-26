export const initialState = {
    carts: [],
    select : {},
    product : [],
    orders : []

}

export const getCarts = (carts) => 
    carts?.reduce((amount, item) => 
    item.price + amount, 0);


const reducer =(state, action) => {
    switch(action.type){
        case 'Add_to_carts':
            return {
                ...state,
                carts : [...state.carts, action.item]
            }
            
            case "Empty carts" :
                return {
                    ...state,
                    carts:[]
                }

            case 'Remove from carts':
                
            const cartsIndex = state.carts.findIndex( (items => items.id === action.id ))
            const newCarts = [...state.carts]
            if(cartsIndex >= 0){
                
                newCarts.splice(cartsIndex, 1)

            }
            else {
                console.log('Error')
            }
            return {
                ...state,
                   carts : newCarts
            }
            case 'Orders':
            return {
                ...state,
                orders : [...state.orders, action.orders]
            }

                case 'State Product' : 
        return {
            ...state,
            product : action.product
        }
        
            /* return {
                    ...state,
                    carts : state.carts.filter(item => item.id !== action
                    )
                }*/ 
            default:
                return state;
    }
}
export default reducer