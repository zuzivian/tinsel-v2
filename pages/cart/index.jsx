import { useRouter } from "next/router"
import Navbar from "../../components/navbar-normal"
import { useCart, useDispatchCart } from "../../lib/cart"


const CartItem = ({product, index, handleRemove}) => {

    return(
        <div className="mt-8 ml-2 mb-8">
            <div className="max-w-lg grid grid-cols-3 border-b-2 p-2 gap-6 relative">
                <div className="">
                    <img
                        className="w-20 transition-all duration-500 ease-in-out transform hover:scale-105"
                        src={`/items/square/${product.id}.png`}
                    />
                </div>
                <div className="absolute ml-24 inset-y-4">
                    <p>Item name: {product.name}</p>
                    <p>Quantity: {product.quantity}</p>
                </div>
                <div className="absolute inset-y-4 ml-64">
                    <button
                        className="px-4 py-2 bg-emerald-900 text-white rounded-xl"
                        onClick={() => handleRemove(index)}
                    >
                        Remove from cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default function Cart () {
    const teas = useCart()
    const router = useRouter()
    const dispatch = useDispatchCart()
    const totalPrice = teas.reduce((total, b) => total + Number(b.price), 0)
    
    const handleRemove = (index) => {
        dispatch({ type: "REMOVE_FROM_CART", index });
    }

    const handleClearCart = () => {
        dispatch({ type: "CLEAR_CART"})
    }

    const handleCheckout = () => {
        async function sessionUrl () {
            const formData = new FormData()
            teas.forEach((tea) => {
                formData.append("tea_item", JSON.stringify(tea))
            })
            const data = new URLSearchParams(formData);

            const res = await fetch("/api/checkout_sessions", {
                method: 'post',
                body: data
            })
            const sessionData = await res.json()
            router.push(sessionData.sessionUrl)
        }
        sessionUrl(); 
        }

    if (teas.length === 0) {
        return (
            <div className="m-12">
                <div className="">
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
        <div className="mt-32 ml-8">
            <div className="">
                <h1 className="font-serif font-semibold text-4xl text-slate-800">
                    
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
            <div className="mt-12">
                Total price:{" "}
                {totalPrice.toLocaleString("en", {
                    style: "currency",
                    currency: "USD"
                })}
            </div>
            <button
                onClick={() => handleClearCart()}
                className="font-semibold mt-4 bg-emerald-900 text-white p-1 rounded-lg"
            >
                Clear Cart
            </button> 
            <button
                onClick={() => {handleCheckout(teas)}}
                type="submit"
                className="font-semibold mt-4 ml-2 bg-emerald-900 text-white p-1 rounded-lg"
            >
                Checkout
            </button>
        </div>
    )
}