import { Button, Card } from '@mui/material'
import React from 'react'

export default function OrderCard() {
  return (
    <Card className='flex justify-between items-center p-5'>
        <div className='flex items-center space-x-5'>
            <img className='h-16 w-16' src='https://dinedelicious.in/wp-content/uploads/2021/07/Bread-Pakora-7.jpg' alt=''/>
            <div>
                <p>Dosa</p>
                <p>₹80</p>
            </div>
        </div>
        <div>
            <Button variant="contained"
            className='cursor-not-allowed'>Completed</Button>
        </div>

    </Card>
  )
}
