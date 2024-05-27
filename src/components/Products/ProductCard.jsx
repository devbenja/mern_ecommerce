import './ProductCard.css'

export const ProductCard = ({title, brand, imageUrl, price, discountedPrice, discountPersent}) => {
    return (
        <div className="product-card w-[15rem] m-3 transition-all cursor-pointer border rounded-lg">
            <div className="h-[16rem]">
                <img className="h-full w-full object-cover object-left-top" src={imageUrl} alt="women_top" />
            </div>

            <div className="card-text bg-white p-3">
                <div className="mb-2">
                    <p className="font-bold opacity-80">{brand}</p>
                    <p className="font-semibold text-gray-600">{title}</p>
                </div>
                <div className="flex justify-between space-x-2">
                    <div className='flex space-x-1'>
                        <p className="font-semibold text-green-700">${discountedPrice}</p>
                        <p className="line-through opacity-55">${price}</p>
                    </div>
                    <p className="font-semibold text-red-600">{discountPersent}% off</p>
                </div>
            </div>
        </div>
    )
}
