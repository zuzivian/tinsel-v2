import Navbar from "../components/Navbar"

export default function Cart () {
    return(
        <div className="m-12">
            <div className="flex justify-center">
                <h1 className="font-serif font-semibold text-4xl text-slate-800">
                    Cart
                </h1>
            </div>
            <Navbar />
        </div>
    )
}