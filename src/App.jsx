import { useState } from "react";
import "../src/index.css"
import Sheader from "./components/Sheader";
import Sshop from "./components/Sshop";
import { DUMMY_PRODUCTS } from "./dummy-products";
// import { createContext,useContext } from "react";
import { CartContext } from "./store/shopping-cart-context";
import { ourValue } from "./store/MyValue";
function App()
{
  const [cart,setCart]=useState([]);
  const [myValue,setMyValue]=useState("coming from app.js");
  function addingCart(id)
  {
    // setCart([...cart,id]);
    const products=DUMMY_PRODUCTS;
    const product=products.find(item=>{return item.id==id});
    if(product)
    {
      const IsExisting=cart.find(item=>{return item.id==id})
      if(!IsExisting)
      {
        product.quantity=1;
        setCart([...cart,product])
      }
      else{
        let index=cart.indexOf(IsExisting);
        let updatedItem=cart[index];
        updatedItem.quantity=updatedItem.quantity+1;
        setCart([...cart.slice(0,index),updatedItem,...cart.slice(index+1)])
      }
    }
    
    // console.log(product)

  }
  function increment(id) {
    let updatedQuantityItem = cart.find(item => item.id === id);
    let index = cart.indexOf(updatedQuantityItem);
    if(updatedQuantityItem)
    {
      updatedQuantityItem = { ...updatedQuantityItem, quantity: updatedQuantityItem.quantity + 1 };
      setCart([...cart.slice(0, index), updatedQuantityItem, ...cart.slice(index + 1)]);
    }
    
  }
  
  function decrement(id) {
    let updatedQuantityItem = cart.find(item => item.id === id);
    let index = cart.indexOf(updatedQuantityItem);
    if(updatedQuantityItem && updatedQuantityItem.quantity!=1)
    {
      updatedQuantityItem = { ...updatedQuantityItem, quantity: updatedQuantityItem.quantity - 1 };
      setCart([...cart.slice(0, index), updatedQuantityItem, ...cart.slice(index + 1)]);
    }
    else{
      let updatedCart=cart.filter(item=>item.id!=id)
      setCart(updatedCart)
    }
    
  }
  const myctxtValue={
    item:cart,
    addItemToCart:addingCart,
    increment:increment,
    decrement:decrement

  }
  
  console.log(cart);
  
  return(
    <>
    <CartContext.Provider value={myctxtValue}>
      <Sheader/>
      <ourValue.Provider value={myValue}>
        <Sshop/>
      </ourValue.Provider>
    </CartContext.Provider>
      
    </>
  )
}
export default App;





// {
//   "p1":1
//   "p2":8
// }























// import { useState } from 'react';

// import Header from './components/Header.jsx';
// import Shop from './components/Shop.jsx';
// import { DUMMY_PRODUCTS } from './dummy-products.js';
// import Product from './components/Product.jsx';

// function App() {
//   const [shoppingCart, setShoppingCart] = useState({
//     items: [],
//   });

//   function handleAddItemToCart(id) {
//     setShoppingCart((prevShoppingCart) => {
//       const updatedItems = [...prevShoppingCart.items];

//       const existingCartItemIndex = updatedItems.findIndex(
//         (cartItem) => cartItem.id === id
//       );
//       const existingCartItem = updatedItems[existingCartItemIndex];

//       if (existingCartItem) {
//         const updatedItem = {
//           ...existingCartItem,
//           quantity: existingCartItem.quantity + 1,
//         };
//         updatedItems[existingCartItemIndex] = updatedItem;
//       } else {
//         const product = DUMMY_PRODUCTS.find((product) => product.id === id);
//         updatedItems.push({
//           id: id,
//           name: product.title,
//           price: product.price,
//           quantity: 1,
//         });
//       }

//       return {
//         items: updatedItems,
//       };
//     });
//   }

//   function handleUpdateCartItemQuantity(productId, amount) {
//     setShoppingCart((prevShoppingCart) => {
//       const updatedItems = [...prevShoppingCart.items];
//       const updatedItemIndex = updatedItems.findIndex(
//         (item) => item.id === productId
//       );

//       const updatedItem = {
//         ...updatedItems[updatedItemIndex],
//       };

//       updatedItem.quantity += amount;

//       if (updatedItem.quantity <= 0) {
//         updatedItems.splice(updatedItemIndex, 1);
//       } else {
//         updatedItems[updatedItemIndex] = updatedItem;
//       }

//       return {
//         items: updatedItems,
//       };
//     });
//   }

//   return (
//     <>
//       <Header
//         cart={shoppingCart}
//         onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
//       />
//       <Shop>
//         {DUMMY_PRODUCTS.map((product) => (
//             <li key={product.id}>
//               <Product {...product} onAddToCart={handleAddItemToCart} />
//             </li>
//           ))}
//       </Shop>
//     </>
//   );
// }

// export default App;
