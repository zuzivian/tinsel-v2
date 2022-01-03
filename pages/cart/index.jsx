import Navbar from "../../components/Navbar"
import { useCart, useDispatchCart } from "../../lib/cart"


const CartItem = ({product, index, handleRemove}) => {

    return(
        <div className="m-8 space-y-4">
            <p>{product.name}</p>
            <button onClick={() => handleRemove(index)}>Remove from cart</button>
        </div>
    )
}

// async function redirectToCheckout() {
//     const { data: {id}, } = await fetch
// }

export default function Cart () {
    const teas = useCart()
    const dispatch = useDispatchCart()
    const totalPrice = teas.reduce((total, b) => total + Number(b.price), 0)
    
    const handleRemove = (index) => {
        dispatch({ type: "REMOVE_FROM_CART", index });
    }

    const handleClearCart = () => {
        dispatch({ type: "CLEAR_CART"})
    }

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
            <button
                onClick={() => handleClearCart()}
                className="font-mono font-black mt-4 bg-slate-500 p-1 rounded-lg"
            >
                Clear Cart
            </button>
        </div>
    )
}