import React from 'react';
import ProductRow from './ProductRow';
import data from "../data.json"
import SearchBar from "./SearchBar.js"

function ProductTable (props) {
const {data}=props.data
  return (
    <div className="product-table">
      <table align="center">
        <thead>
          <th>name</th>
          <th>price</th>
        </thead>
        <tbody>
        {data.map((data)=>{
            return <ProductRow items={data.name} prices={data.price}/>
        }
        )}
        </tbody>
      </table>
    </div>
        );
};


export default ProductTable;
