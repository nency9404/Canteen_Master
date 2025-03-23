import { Button, Card } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addItemToCart, findCart } from '../State/Cart/Action';
import { getAllCanteensAction } from '../State/Canteen/Action';

const MenuItemcard = ({items}) => {

    const dispatch = useDispatch();

    const handleAddItemToCart = (e) => {
        const email = sessionStorage.getItem("email");
        e.preventDefault();
        const reqData = {
            userEmail : email,
            cartItem:{
                foodId: items.id,
                quantity: 1,
            },
        };
        dispatch(addItemToCart({reqData}));
        // dispatch(getAllCanteensAction());
        dispatch(findCart(email));
    }
  return (
    <Card className='p-5 lg:flex items-center justify-between box'>
        <div className='lg:flex items-center lg:space-x-5'>
            <img className='w-[7rem] h-[7rem] obect-cover' src={items.images[0]} alt=''/>
            <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                <p className='font-semibold text-xl'>
                    {items.name}
                </p>
                <p>₹{items.price}</p>
            </div>
        </div>
        <div>
            <Button variant='contained' onClick={handleAddItemToCart}>Add To Cart</Button>
        </div>
    </Card>
  )
}

export default MenuItemcard