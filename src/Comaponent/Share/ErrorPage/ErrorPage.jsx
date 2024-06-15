import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
     
     <img src="https://i.ibb.co/19hJ5Fr/20602777-6325257.jpg" alt="" />

     <h1 className=" text-4xl text-center font-bold mt-12" > দুঃখিত আপনি ভুল পথ  এ আসছেন </h1>

     <div className="card-actions justify-center mt-4" >
     <button className=" text-2xl bg-red-300 p-3 btn " > <Link to='/' > পিছঁনে ফিরে যান </Link> </button>
     </div>
      
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}