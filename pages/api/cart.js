import { useReducer, useContext, createContext, useEffect } from "react";

const CartStateContext = createContext()
const CartDispatchContext = createContext()

// CartProvider will wrap whole app to provide access to state/ dispatch
export const CartProvider = ({ children }) => {

    const reducer = (cart, action) => {
        switch (action.type) {
            case "ADD":
                return [...cart, action.tea]
            case "REMOVE":
                const removeArr = [...cart]
                removeArr.splice(action.index, 1);
                return removeArr;
            // case "CLEAR_CART":
            //     const clearArr = [...cart]
            //     clearArr.splice(0, action.index.length)
            //     return clearArr
            default:
                throw new Error(`unknown action ${action.type}`)
        }
    }

    
    const [cart, dispatch] = useReducer(reducer, [], () => {
        if (typeof window !== 'undefined') {
            return JSON.parse(localStorage.getItem('cart'))
        } else {
            return []
        }
    })

    // source: https://www.youtube.com/watch?v=SOnMln3W0U8 
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return(
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={cart}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
}

export const useCart = () => useContext(CartStateContext)
export const useDispatchCart = () => useContext(CartDispatchContext)