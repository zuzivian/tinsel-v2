import { useReducer, useContext, createContext } from "react";

const CartStateContext = createContext()
const CartDispatchContext = createContext()

const reducer = (state, action) => {
    switch(action.type) {
        case "ADD": 
            const items = [...state, action.item]
            // localStorage.setItem('laughs', JSON.stringify(items))
            return [...state, action.item];
        case "REMOVE":
            const newArr = [...state];
            newArr.splice(action.index, 1);
            return newArr;
        default: 
            throw new Error(`unknown action ${action.type}`)
    }
}

// CartProvider will wrap whole app to provide access to state/ dispatch
export const CartProvider = ({ children }) => {
    // let items = []
    // // console.log(window)
    // if (typeof window !== 'undefined') {
    //     items = JSON.parse(localStorage.getItem('laughs'))
    // }

    const [state, dispatch] = useReducer(reducer, [])
    return(
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
}

export const useCart = () => useContext(CartStateContext)
export const useDispatchCart = () => useContext(CartDispatchContext)

