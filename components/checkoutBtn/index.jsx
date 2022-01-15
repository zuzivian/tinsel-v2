import { useRouter } from "next/router"
import { useCart } from "../../lib/cart"


export default function CheckoutButton () {
    const teas = useCart()


    const router = useRouter()

    async function sessionUrl() {
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