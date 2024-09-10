import { CartContext } from "../store/shopping-cart-context";
import { useContext } from "react";
export default function Scart()
{
    const {item,decrement,increment}=useContext(CartContext);
    console.log(item);
    var total_price;
    if(item.length>0)
    {
        total_price=item.reduce((acc,item)=>{
            console.log(item.price);
            return acc+item.price*item.quantity;
        },0)
    }
    console.log(total_price);
    
    return (
        <>
            <ul id="cart-items">
                {item.length < 1 ? (
                    <h3>No items in cart</h3>
                ) : (
                    <>
                        <li>
                                <span><b>Item Name</b></span>
                                <span><b>Price</b></span>
                                <span><b>Quantity</b></span>
                            </li>
                        {item.map(item => (
                            <li key={item.id}>
                                <span>{item.title}</span>
                                <span>{item.price}</span>
                                <span>
                                    <button onClick={()=>decrement(item.id)}>-</button>
                                    {item.quantity}
                                    <button onClick={()=>increment(item.id)}>+</button>
                                </span>
                            </li>
                        ))}
                        <li>
                            <span><b>Total: </b></span>
                            <span><b>{total_price}</b></span>
                        </li>
                    </>
                )}
            </ul>
        </>
    );
};
