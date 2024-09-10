import { useRef } from "react";
import logo from "../../public/logo.png"
import ScartModal from "./ScartModal";
import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";
export default function Sheader()
{ 
    const {item}=useContext(CartContext)
    // const list=cart;
    const modalRef = useRef();

    function openModal() {
        modalRef.current.open();
    }

    // const cartList=cart;
    return(
        <>
        <ScartModal ref={modalRef}/>
        <div id="main-header">
            <div id="main-title">
                <img src={logo} alt="" />
                <h1>Elegant Context</h1>
            </div>
            <button onClick={openModal}>cart({item.length})</button>
        </div>
        </>
    )
}