
import {Card, CardHeader, CardBody, Image } from "@heroui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";



export default function Hero() {
  const [data, setData] = useState([]);
  const nav = useNavigate();
  const getData = async() => {
    try{
    const resp= await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    setData(resp.data);
    
    }
    catch(err) {
      console.log(err);
    }
    };
  useEffect(() => {
    getData();

  },[]);
  

  return (
    <div className="space-y-3 p-6 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
      
    {data?.categories?.map((items)=>(   //small bracket dida hamle return lekhnu pardaina natra return lekhnu parcha curly braces ma

     <Card
     isPressable
     key={items.idCategory}
      onPress={() => nav(`category-items/${items.strCategory}`)}
      className="py-4 cursor-pointer hover:bg-transparent hover:transition-all bg-transparent hover:opacity-70">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        
        <h1 className="font-bold text-xl tracking-wider">{items.strCategory}</h1>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={items.strCategoryThumb}
          width={270}
        />
      </CardBody>
    </Card>
      
    ))}
     
    </div>
  )
  }
