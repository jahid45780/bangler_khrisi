import { useEffect, useState } from "react";
import UserAddProductCard from "./UserAddProductCard";


const ProductSec = () => {
    const [userProduct, setUserProduct] = useState([])

    useEffect(()=> {
         fetch('http://localhost:5000/addProduct')
         .then(res=> res.json())
         .then(data => data(setUserProduct(data)))
    },[])
       

    return (
        <div>
            <img src="https://i.ibb.co/rMn9twn/farm-worker-driving-tractor-spraying-green-meadow-generated-by-ai.jpg" alt="" />


            <h1 className=" text-3xl font-bold text-center mt-3" > ভোক্তাদের যোগ করা পণ্য দেখুন 🍏  </h1>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ml-4 gap-2 mt-10" >
                {
                  userProduct.map( addProduct=> <UserAddProductCard key={addProduct._id}  userAddProduct={addProduct}  ></UserAddProductCard> )
                }
            </div>

        </div>
    );
};

export default ProductSec;