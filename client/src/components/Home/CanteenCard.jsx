import React from 'react';
import { Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CanteenCard = ({ item, index }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/canteen/${item.name}/${index+1}`);
    };

    return (
        <Card key={index} className='m-5 w-[17rem] productCard'>
            <div onClick={handleClick}>
                <img className='w-full h-[10rem] rounded-t-md object-cover' src='https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/COM827/primary/1_1.jpg' alt='' />
            </div>
            <div className='p-4 textPart lg:flex w-full justify-center'>
                <div className='space-y-1'>
                    <p className='font-semibold text-lg'>{item.name}</p>
                </div>
            </div>
        </Card>
    );
};

export default CanteenCard;
