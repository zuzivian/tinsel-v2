import Link from "next/link";
import { useDispatchCart } from "../../lib/cart"

export default function ItemCard ({ tea, id, name, price }) {
    const dispatch = useDispatchCart()

    const handleAdd = (tea => {
        dispatch({ type: "ADD_TO_CART", tea })
    })
    return(
            <div className="flex flex-col border-box">
                <Link href={`/teas/${id}`}>
                <button className="border-box border border-zinc-200 bg-zinc-400 p-6 text-center text-sm drop-shadow-md hover:drop-shadow-sm">
                image placeholder
                </button>
                </Link>
                <div className="flex flex-row mt-2 ml-1 mr-1">
                    <div className="w-5/6">
                        <p className="text-sm font-black">{name}</p>
                        <p className="text-sm font-light font-serif">${price}/100g</p>
                    </div>
                    <div className="w-1/6 border-box ml-1 flex flex-col align-middle">
                        <button 
                            onClick={() => handleAdd(tea)}
                            className="border-box p-1 bg-slate-400 hover:bg-slate-600 text-white rounded-md">
                            +
                        </button>
                    </div>
                </div>

            </div>
    )
}