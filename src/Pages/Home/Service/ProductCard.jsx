import { Link } from "react-router-dom";

const ProductCard = ({product}) => {

     const { _id, img, title, price} = product;

    return (
        <div>
           <div className="card w-96 h-72  bg-base-100 shadow-xl image-full">
  <figure><img src={img} alt="Product" /></figure>
  <div className="card-body">
    <h2 className="card-title">  {title}  </h2>
    <p className=" font-bold text-2xl" >   $$ {price} </p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline btn-info "> <Link to={`/detail/${_id}`} > বিস্তারিত জানুন </Link> </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductCard;