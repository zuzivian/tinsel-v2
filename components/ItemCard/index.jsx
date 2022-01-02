import Link from "next/link";
import { useDispatchCart } from "../../pages/api/cart";

export default function ItemCard ({ tea, id, name, price }) {
    const dispatch = useDispatchCart()

    const handleAdd = (tea => {
        dispatch({ type: "ADD", tea })
    })
    return(
            <div className="flex flex-col justify-center border-box bg-slate-200 p-2 drop-shadow-lg hover:drop-shadow-sm">
                <Link href={`/teas/${id}`}>
                <div className="border-box border border-zinc-400 bg-zinc-400 p-6 text-center text-sm">
                image placeholder
                </div>
                </Link>
                <div className="flex flex-row mt-2">
                    <div className="w-1/2">
                        <p className="text-sm font-black">{name}</p>
                        <p className="text-sm font-light font-serif">${price}/100g</p>
                    </div>
                    <div className="w-1/2 flex flex-col items-end text-center align-middle">
                        <button 
                            onClick={() => handleAdd(tea)}
                            className="bg-slate-400 hover:bg-slate-600 text-white p-2 rounded-md">
                            +
                        </button>
                    </div>
                </div>

            </div>
    )
}