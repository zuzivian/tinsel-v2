import Navbar from '../../components/navbar-normal'
import { useDispatchCart } from '../../lib/cart'

export default function ItemPage ({tea}) {

    const dispatch = useDispatchCart()

    const handleAdd = (tea => {
        dispatch({type: "ADD_TO_CART", tea})
    })
    return(
        <div className='bg-emerald-900 h-screen relative'>
            <Navbar />
            <div className="absolute inset-y-56 inset-x-12 md: container max-w-6xl">
                <div className='grid grid-cols-2'>
                    <div className='z-10 drop-shadow-lg'>
                        <img src={`/items/circle/${tea.id}.png`} />
                    </div>
                    <div className='relative bg-white h-full w-full -ml-24 rounded-xl'>
                        <div className="absolute inset-y-32 right-0 w-2/3 text-left pt-8 pb-8 pr-4 pl-4 bg-emerald-200 h-1/2 rounded-l-xl">
                            <div className='absolute inset-y-20'>
                                <h1 className="font-serif font-semibold text-4xl text-slate-500">
                                    {tea.name}
                                </h1>
                                <p className='mt-2 italic font-serif'>{tea.description}</p>
                                <button className='mt-8 px-4 py-2 bg-emerald-900 hover:bg-emerald-400 hover:text-black rounded text-white' onClick={() => { handleAdd(tea) }}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
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

// product detail page inspiration: https://onaircode.com/wp-content/uploads/2019/08/apple-product-cart.png 