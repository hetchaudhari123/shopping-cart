import { useState } from "react"
import { useEffect } from "react";
// import Card from "../components/Card";
import Card from "../components/Card";
// import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";
export default function Home(){
    const [loading,setLoading] = useState(true);
    const API_URL = "https://fakestoreapi.com/products";
    const [arr,setArr] = useState([]);
    async function fetchProduct(){
        const response = await fetch(API_URL);
        const obj = await response.json();
        setArr(obj);  

    }
    useEffect(()=>{
        setLoading(true);
        fetchProduct();
        setLoading(false);
    },[])
    return (
        <div className="flex max-w-6xl flex-wrap  mx-auto">
            {
                (loading)?(<Spinner/>):(
                    arr.map((ele,index)=>{
                        return <Card key={index} props={ele}></Card>       
                    })
                )
            }
        </div>
    )
}