import { useReducer, useContext, createContext, useEffect, useState } from "react";

const CartStateContext = createContext()
const CartDispatchContext = createContext()

// CartProvider will wrap whole app to provide access to state/ dispatch
export const CartProvider = ({ children }) => {


    const reducer = (cart, action) => {
        switch (action.type) {
            case "ADD_TO_CART":
                const inCart = [...cart, action.tea]

                const inCartGrouped = inCart.reduce((map => (r, a) => {
                    if (!map.has(a.name)) {
                        map.set(a.name, { name: a.name, price: a.price, quantity: 0})
                        r.push(map.get(a.name));
                    }
                    map.get(a.name).quantity++
                    return r
                })(new Map), []);
                console.log(inCartGrouped)

                return inCartGrouped

            case "REMOVE_FROM_CART":
                const removeArr = [...cart]
                removeArr.splice(action.index, 1);
                return removeArr;
            case "CLEAR_CART": // source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice#remove_all_elements_starting_from_index_2 
                const clearArr = [...cart]
                clearArr.splice(0)
                return clearArr
            default:
                throw new Error(`unknown action ${action.type}`)
        }
    }

    // useReducer third arg: calculating initial state outside reducer/ allows for 
    // resetting state later in resp to an action  
    const [cart, dispatch] = useReducer(reducer, [], () => {
        if (typeof window !== 'undefined') {
            return JSON.parse(localStorage.getItem('cart'))
        } else {
            return []
        }
    })

    // Persist cart contents in local storage on refresh/ changing page
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