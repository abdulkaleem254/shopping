import React, { useState, forwardRef, useImperativeHandle, useContext } from 'react';
import Scart from './Scart';
import { CartContext } from '../store/shopping-cart-context';

const ScartModal = forwardRef((props,ref) => {
    const {item}=useContext(CartContext)
    const cartList=item;
    console.log(cartList)
    const [isVisible, setIsVisible] = useState(false);

    useImperativeHandle(ref, () => ({
        open: () => setIsVisible(true),
        // close: () => setIsVisible(false),
    }));
    // console.log(cart)

    if (!isVisible) return null;

    return (
        <div id="modal">
            <dialog open>
            <h2>My Cart</h2>
            <Scart/>
            {cartList.length>0?
            (<div>
                <button onClick={() => setIsVisible(false)}>Close</button>
                <button onClick={()=>{checkout}}>Check Out</button>
            </div>):(<div>
                <button onClick={() => setIsVisible(false)}>Close</button>
            </div>)}
        </dialog>
        </div>
    );
});

export default ScartModal;
