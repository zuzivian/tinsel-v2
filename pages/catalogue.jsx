import Navbar from "../components/navbar-normal"
import CategoryCard from "../components/categoryCard";
import ItemCard from "../components/itemCard";

export default function Catalogue({teas}) {

    return (
        <div>
            <Navbar />
            <div className="mt-32 text-center font-serif font-semibold text-4xl text-slate-700">
                Tea Categories
            </div>   
            <CategoryCard />
            <div className="mt-24 text-center font-serif font-semibold text-4xl text-slate-700">
                Tea Collection
            </div>   
            <div className="md: container px-32 max-w-7xl mt-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
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
            <div className="h-24"></div>
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