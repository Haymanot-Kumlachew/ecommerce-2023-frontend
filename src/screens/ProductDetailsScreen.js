import React from "react";
import { useParams } from "react-router-dom";
import products from "../products";

export default function ProductDetailsScreen() {
  const productId = useParams().id;

  const product = products.find((product) => product.id == productId);

  console.log('Array : ',Array.from({ length: product.countInStock }, (v, i) => i))
  // console.log('video array: ', [...Array(product.countInStock).keys])

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <div className="card p-3 m-2">
            <h1>{product.name}</h1>
            <div className="text-center" style={{ height: "350px" }}>
              <img className="img-fluid m-3 " src={product.image} />
            </div>

            <p>{product.description}</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="m-2">
            <h1>Price : {product.price}</h1>
            <hr />
            <h1>Select Quantity</h1>

            <select>
              {/* {const newArray = Array.from({ length: product.countInStock }, (v, i) => i); */}
              {/* [...Array(product.countInStock).keys].map((x, i) */}
              {Array.from({ length: product.countInStock }).map((v, i) =>{
                return <option value={i+1}>{i+1}</option>
              })}
            </select>

            <hr/>
            <div className="m-2" style={{ textAlign: 'right' }}>
              <button className="btn btn-dark">Add To Cart</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
