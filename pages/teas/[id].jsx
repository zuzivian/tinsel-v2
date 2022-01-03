import Navbar from '../../components/Navbar'
import { useDispatchCart } from '../../lib/cart'

export default function ItemPage ({tea}) {

    const dispatch = useDispatchCart()

    const handleAdd = (tea => {
        dispatch({type: "ADD_TO_CART", tea})
    })
    return(
        <div className="m-12">
            <div className="flex flex-col justify-center">
                <h1 className="font-serif font-semibold text-4xl text-slate-500 text-center">
                    {tea.name}
                </h1>
                <Navbar />
                <p className='text-center'>{tea.description}</p>
                <button className='m-12' onClick={() => {handleAdd(tea)}}>Add to Cart</button>
            </div>
        </div>
    )
}

export async function getStaticProps(content) {
    const res = await fetch(`http://localhost:8000/teas/${content.params.id}`)
    const tea = await res.json()
    return {
        props:{
            tea
        }
    }
}

export async function getStaticPaths(){
    const res = await fetch(`http://localhost:8000/teas`)
    const data = await res.json()

    const paths = data.map(tea => {
        return {
            params: { id: tea.id.toString()}
        }
    })

    return{
        paths, 
        fallback: false
    }
}