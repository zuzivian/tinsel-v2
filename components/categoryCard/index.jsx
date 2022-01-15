
export default function CategoryCard () {
    return(
        <div>
            <div className="md: container max-w-5xl mt-8">
                <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-10">
                    <div className='flex flex-col hover:scale-105 duration-1000'>
                        <img src="/dl/dl1.png" />
                        <div className='relative -mt-20 ml-18 h-32 -z-10 bg-gradient-to-r from-lime-500/50 to-green-300/50 rounded-xl'>
                            <p className="absolute inset-x-10 bottom-0 pb-2 text-2xl font-serif font-semibold text-slate-700">Green Teas</p>
                        </div>
                    </div>
                    <div className='flex flex-col hover:scale-105 duration-1000'>
                        <img src="/dl/dl2.png" />
                        <div className='relative -mt-20 ml-18 -z-10 p-16 bg-gradient-to-r from-green-400/50 to-emerald-400/50 rounded-xl'>
                            <p className="absolute inset-x-10 bottom-0 pb-2 text-2xl font-serif font-semibold text-slate-700">White Teas</p>
                        </div>
                    </div>
                    <div className='flex flex-col hover:scale-105 duration-1000'>
                        <img src="/dl/dl4.png" />
                        <div className='relative -mt-20 ml-18 -z-10 p-16 bg-gradient-to-r from-emerald-400/50 to-teal-500/50 rounded-xl'>
                            <p className="absolute inset-x-10 bottom-0 pb-2 text-2xl font-serif font-semibold text-slate-700">Floral Teas</p>
                        </div>
                    </div>
                    <div className='flex flex-col hover:scale-105 duration-1000'>
                        <img src="/dl/dl3.png" />
                        <div className='relative -mt-20 ml-18 -z-10 p-16 bg-gradient-to-r from-teal-500/50 to-emerald-600/50 rounded-xl'>
                            <p className="absolute inset-x-10 bottom-0 pb-2 text-2xl font-serif font-semibold text-slate-700">Black Teas</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}