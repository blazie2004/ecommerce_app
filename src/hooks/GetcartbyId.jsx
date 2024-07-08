import { createContext, useContext, useEffect } from "react";
import UserCart from "../Context/UserCart";


function GetcartbyId(userid){

    const {cart,setCart}=useContext(UserCart);




    async function download(userid){
        const response=axios.get(`https://fakestoreapi.com/carts/user/${userid}`);
        setCart(response.data[0]);
        
    }




    useEffect(()=>{

    },[userid]);
    //rerender the component when id is changed;

    return [cart,setCart];

     
}

export default GetcartbyId;