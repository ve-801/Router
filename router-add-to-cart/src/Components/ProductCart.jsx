import React from 'react';
import { FaCartPlus } from "react-icons/fa6";
import { BsFillCartDashFill } from "react-icons/bs";


const ProductCart = ({ product, addToCart, removeFromCart, isInCart }) => {
    const handleClick = () => {
        if (isInCart) {
            removeFromCart(product.id);
        } else {
            addToCart(product);
        }
    };

    return (
         <div className="border-blue-500 border-2 p-4 rounded-lg bg-white flex flex-col content-evenly relative shadow-lg">
            <img src={product.image} alt={product.title} className="h-44 w-full object-contain mb-2" />
            <h2 className="text-xl mb-3 w-4/5 m-auto ">{product.title}</h2>
           
            <div className="flex justify-between flex-col items-center text-center mt-auto pb-0">
                <p className="text-green-500 font-bold mb-2 text-2xl">${product.price}</p>
                <button 
                    onClick={handleClick} 
                    className={`text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 flex items-center gap-2 ${isInCart ? 'text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br  focus:ring-red-300 dark:focus:ring-red-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' : ''}`}>
                    {isInCart ? <>Remove from Cart <BsFillCartDashFill />
                      </> :  <> Add to Cart <FaCartPlus /></>}
                </button>
                

            </div>
        </div> 



       
        

            


    );
};

export default ProductCart;
