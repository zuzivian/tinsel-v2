import Link from "next/link";
import { useDispatchCart } from "../../lib/cart"

export default function ItemCard ({ tea, id, name, price }) {
    const dispatch = useDispatchCart()

    const handleAdd = (tea => {
        dispatch({ type: "ADD_TO_CART", tea })
    })
    return(
        <div className="flex flex-col border-box drop-shadow-2xl hover:drop-shadow-md">
                <Link href={`/teas/${id}`}>
                <button className="relative flex items-center justify-center overflow-hidden shadow-xl rounded-2xl">
                    <img 
                        className="transition-all duration-500 ease-in-out transform hover:scale-105"
                        src={`/items/square/${id}.png`}
                    />
                </button>
                </Link>
                <div className="flex flex-row mt-2 ml-1 mr-1">
                    <div className="w-5/6">
                        <p className="text-sm font-black">{name}</p>
                        <p className="text-sm font-light font-serif">${price}</p>
                    </div>
                    <div className="w-1/6 border-box ml-1 flex flex-col align-middle">
                        <button 
                            onClick={() => handleAdd(tea)}
                            className="border-box p-1 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md">
                            +
                        </button>
                    </div>
                </div>

            </div>
    )
}

// catalogue page inspiration: https://cdn.dribbble.com/users/1508879/screenshots/6744918/furniture_e-commerce_dashboard_4x.jpg?compress=1&resize=400x300 
// tailwind animation guide source: https://daily-dev-tips.com/posts/tailwind-zooming-background-images/ 