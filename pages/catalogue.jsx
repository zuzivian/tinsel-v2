import Navbar from "../components/Navbar"
import ItemCard from "../components/ItemCard";

export default function Catalogue({teas}) {

    return (
        <div className="m-12">   
            <div className="flex justify-center">
                <h1 className="font-serif font-semibold text-4xl text-slate-800">
                    Catalogue
                </h1>
            </div>
            <Navbar />
            <div className="md: container md:mx-auto px-16 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {
                        teas.map(tea => {
                            return (
                                        <ItemCard
                                            key={tea.id}
                                            tea={tea}
                                            id = {tea.id}
                                            name={tea.name}
                                            description={tea.description}
                                            price={tea.price}
                                        />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export const getStaticProps = async () => {
    const res = await fetch('http://localhost:8000/teas')
    const data = await res.json()

    return{
        props: { teas: data }
    }
}