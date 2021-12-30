import { useState } from "react"
import { useDispatchCart } from "../../pages/api/cart"

export default function ItemCard({ product }) {

    //add to cart   
    const dispatch = useDispatchCart()

    const handleAdd = (item => {
        console.log(item)
        dispatch({ type: "ADD", item })
    })

    //remove from cart
    // const handleRemove = (item => {
    //     console.log(item)
    //     dispatch({ type: "REMOVE", item })
    // })

    //indiv item counter
    const [count, setCount] = useState(0)



    return (
        <div className="w-1/2 py-2">
            <div className="border border-b-8 border-green-600 shadow rounded-xl p-10 m-10 text-center">
                Item name costs item price
                <div>
                    <button
                        onClick={() => handleAdd(product)}
                        className="bg-green-900 text-white rounded-lg py-2 px-4 shadow-lg mt-4"
                    >
                        buy me
                    </button>
                    <button
                        onClick={() => handleAdd(product)}
                        onClick={() => setCount((count + 1))}
                        className="border border-1 border-green-700 rounded py-1.5 px-2 ml-4 text-green-700 text-l">
                        +
                    </button>
                    <span className="m-1.5">{count}</span>
                    <button
                        onClick={() => setCount((count - 1))}
                        className="border border-1 border-green-700 rounded py-1.5 px-2 text-green-700 text-l">
                        -
                    </button>
                </div>
            </div>
        </div>
    )
}