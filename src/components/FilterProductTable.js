import React from 'react';
import ProductRow from './ProductRow';
import SearchBar from "./SearchBar";
import data from "../data.json"
import ProductTable from './ProductTable';

function FilterProductTable(){
    return (
        <div>
            <h1>Ironhack</h1>
            <SearchBar />
            <ProductTable data={data} />
        </div>
    )
}


export default FilterProductTable; 