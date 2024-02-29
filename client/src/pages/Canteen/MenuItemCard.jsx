import { Button, Card } from '@mui/material'
import React from 'react'

const MenuItemcard = ({item}) => {

    const handleAddItemToCart = () => {
        console.log("handle add item to cart")
    }
  return (
    <Card className='p-5 lg:flex items-center justify-between box'>
        <div className='lg:flex items-center lg:space-x-5'>
            <img className='w-[7rem] h-[7rem] obect-cover' src='https://www.shutterstock.com/image-photo/paper-masala-dosa-south-indian-600nw-1008144772.jpg' alt=''/>
            <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                <p className='font-semibold text-xl'>
                    {`Pizza`}
                </p>
                <p>₹{`50`}</p>
            </div>
        </div>
        <div>
            <Button onClick={handleAddItemToCart}>Add To Cart</Button>
        </div>
    </Card>
  )
}

export default MenuItemcard