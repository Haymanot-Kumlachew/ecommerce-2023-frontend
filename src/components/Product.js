import React from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";

export default function Product({ product }) {
  return (
    <div className="col-md-3 card m-3 p-2  productcard">
      <Link to={`product/${product.id}`}>
        <div className='text-center'>
          <img src={product.image} className="img-fluid" />
        </div>
        
        <h1>{product.name}</h1>
        {/* <div className="rating"> */}
        <Rating
        style={{color: 'orange'}}
          initialRating={product.rating}
          readonly={true}
          emptySymbol="far fa-star fa-1x"
          fullSymbol="fas fa-star fa-1x"
        />
        {/* </div> */}

        <h1>Price: {product.price}</h1>
      </Link>
    </div>
  );
}
