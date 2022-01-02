import { useCart } from "../../pages/api/cart"

export default function Navbar () {
    return(
        <div className="flex justify-center m-4 space-x-4">
            <a href="/">Home</a>
            <a href="/catalogue">Catalogue</a>
            <a href="/cart">Cart ({useCart().length})</a>
            <a href="/login">Login</a>
        </div>
    )
}