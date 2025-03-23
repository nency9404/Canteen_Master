import React from "react";
import { Card } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CanteenCard = ({ item, index }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if(sessionStorage.getItem("email")){
      navigate(`/canteen/${item.name}/${item.id}`);
    }else{
      navigate('/account/login');
    }
  };

  return (
    <Card key={index} className="m-5 w-[17rem] productCard">
      <div className="cursor-pointer" onClick={handleClick}>
        <img
          className="w-full h-[10rem] rounded-t-md object-cover"
          src={item.images[0]}
          alt=""
        />
      </div>
      <div className="p-4 textPart lg:flex w-full justify-center">
        <div className="space-y-1">
          <p className="font-semibold text-lg">{item.name}</p>
        </div>
      </div>
    </Card>
  );
};

export default CanteenCard;
