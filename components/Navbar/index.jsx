import { useCart } from "../../lib/cart"

export default function Navbar () {

    const teas = useCart()
    const cartLength = teas.reduce(function(accumulator, tea) {
        return accumulator + tea.quantity
    }, 0)

    return(
        <div className="flex justify-center m-4 space-x-4">
            <a href="/">Home</a>
            <a href="/catalogue">Catalogue</a>
            <a href="/cart">Cart ({cartLength})</a>
            <a href="/login">Login</a>
        </div>
    )
}