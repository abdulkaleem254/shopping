import Sproducts from "./Sproducts";
import { DUMMY_PRODUCTS } from "../dummy-products";
import { useContext } from "react";
import { ourValue } from "../store/MyValue";

export default function Sshop()
{
    const contextValue=useContext(ourValue);
    console.log(contextValue);
    
    const productsData=DUMMY_PRODUCTS;
    return(
        <>
        <div id="shop">
            <h2>Elegant Clothing For Everyone</h2>
            <div id="products">
                {productsData.map((product,index)=>{
                    return (
                        <Sproducts {...product} key={index}/>
                    )
                })}
            </div>
        </div>
        </>
    )
}