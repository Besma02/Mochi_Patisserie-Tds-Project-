import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { removeFromCart,decreaseCart,addToCart,clearCart, getTotals } from '../../feature/CartSlice'
import { useToast } from '@chakra-ui/react'
import { UnlockIcon } from "@chakra-ui/icons"



export const Cart = () => {
 

  const toast=useToast()
 const dispatch=useDispatch()
  const cart=useSelector(state=>state.cart)
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);
 
  const handleRemoveFromCart=(cartItem)=>{
    dispatch(removeFromCart(cartItem))
    toast({
      title: (`${cartItem.title}`),
      description: "suppression de la carte réussie",
      duration: 1000,
      isClosable: true,
      position: 'top',
      status: 'error',
     icon: <UnlockIcon />,
    })
  }
 
  const handleAddToCart = (cartItem) => {
    dispatch(addToCart(cartItem));
    toast({
      title: (`${cartItem.title}`),
      description: " itemQuantity augmente",
      duration: 1000,
      isClosable: true,
      position: 'top',
      status: 'info',
     icon: <UnlockIcon />,
    })
    
   
  

  };
  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
    toast({
      title: (`${cartItem.title}`),
      description: " itemQuantity réduite",
      duration: 1000,
      isClosable: true,
      position: 'top',
      status: 'error',
     icon: <UnlockIcon />,
    })
  };
  const handleclearCart = () => {
    dispatch(clearCart());
    toast({
      title: ('vider la carte'),
      description: " cart vide",
      duration: 1000,
      isClosable: true,
      position: 'top',
      status: 'error',
     icon: <UnlockIcon />,
    })
  };
 
    
    
  
  return (
   <div className='cart-container'>
    <h2>Shopping Cart</h2>
    {cart.cartItems.length===0?(
     <div className='cart-empty'>
      <p>la carte est vide</p>
      <div className='start-shopping'>
        <Link to='/Produits'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
          <span>Commencer vos achats</span>
        </Link>
      </div>
     </div>


    ):(<div>
    <div className='titles'>
      <h3 className='product-title'>Produit</h3>
      <h3 className='product-price'>Prix</h3>
      <h3 className='product-quantity'>quantité</h3>
      <h3 className='product-total'>Total</h3>
    </div>
    <div className='cart-items'>
      {cart.cartItems?.map(cartItem=>(
        <div className='cart-item' key={cartItem.id}>
          
          <div className='cart-product' >
            <img src={cartItem.url} alt={cartItem.name}/>
            <div>
              <h3>{cartItem.title}</h3>
              <p>{cartItem.description}</p>
              <button onClick={()=>handleRemoveFromCart(cartItem)}>remove</button>
            </div>

            </div>
            <div className='cart-product-price' >
              ${cartItem.price}
              </div>
              <div className='cart-product-quantity' >
                <button onClick={() => handleDecreaseCart(cartItem)}>-</button>
                <div className='count'>{cartItem.cartQuantity}</div>
                <button  onClick={() => handleAddToCart(cartItem)}>+</button>
                </div>
                <div className='cart-product-total-price' >
                  ${cartItem.price*cartItem.cartQuantity}
                  </div>

                  <div className='cart-summary' >
                 
                    <button className='clear-cart' onClick={()=>handleclearCart()}>vider la cart</button>
                 
                    <div className='cart-checkout' >
                    <div className='subtotal' >
                      <span>Subtotal</span>
                      <span className='amount'>${cart.cartTotalAmount}</span>
              
                     </div>
                     <p>taxes et frais d'expédition calculés à la caisse</p>
                    <button>Vérifier</button>
                    <div className='start-shopping'>
                      <Link to='/Produits'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                      </svg>
                        <span>Continuer vos achats</span>
                      </Link>
                    </div>
                    </div>
                    </div>
        </div>
      ))}
    </div>
    </div>)}

   </div>

  )
}
