

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function GetallProducts(){

    const [getallproducts,setallproducts]=useState([]);





    async function download(){
        const list=await axios.get('https://fakestoreapi.com/products').then(response=>{
            return response.data;
        })
        setallproducts(list);
      
    }



    useEffect(()=>{
        download();

    },[]);

    return {getallproducts};

}
export default GetallProducts;