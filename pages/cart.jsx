import Navbar from "../components/Navbar"
import { useCart, useDispatchCart } from "./api/cart"


export const CartItem = ({product, index, handleRemove}) => {
    return(
        <div className="m-8 space-y-4">
            <p>{product.name}</p>
            <button onClick={() => handleRemove(index)}>Remove from cart</button>
        </div>
    )
}


export default function Cart () {
    const teas = useCart()
    const dispatch = useDispatchCart()
    const totalPrice = teas.reduce((total, b) => total + Number(b.price), 0)
    
    const handleRemove = (index) => {
        dispatch({ type: "REMOVE", index });
    }

    // const handleClearCart = (index) => {
    //     dispatch({ type: "CLEAR_CART", index})
    // }

    // console.log(teas.price)

    if (teas.length === 0) {
        return (
            <div className="m-12">
                <div className="flex justify-center">
                    <h1 className="font-serif font-semibold text-4xl text-slate-800">
                        Cart
                    </h1>
                </div>
                <Navbar />
                <p className="mt-8">Cart is empty!</p>
            </div>
        );
    }
    return(
        <div className="m-12">
            <div className="flex justify-center">
                <h1 className="font-serif font-semibold text-4xl text-slate-800">
                    Cart
                </h1>
            </div>
            <Navbar />
            {teas.map((tea, index) => (
                <CartItem 
                    handleRemove={handleRemove}
                    key={index}
                    product={tea}
                    index={index}
                />
            ))}
            <p>
                Total price:{" "}
                {totalPrice.toLocaleString("en", {
                    style: "currency",
                    currency: "USD"
                })}
            </p>
            {/* <button onClick={handleClearCart}>Clear Cart</button> */}
        </div>
    )
}