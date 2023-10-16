import React from "react";
import img from "../assets/bg.jpg"
import axios from 'axios';
import './home.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Home(){
    const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/items')
      .then((response) => {
        console.log(response.data);
        setData(response.data)
      })
      .catch(function (error) {
        alert(error.response.data)
        console.log(error);
      });
  }, []);
    const [email, setEmail] = useState('');
    const [Pass, setPass] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [name , setName] = useState("");
    const [uname , setUname] =useState("")
    const handleOnJoin = async(e)=>{
        if(Pass!=confirmpassword){
            alert("Passwords Don't Match")
            return
        }
        // let result = await fetch(
        //     'http://localhost:5000/register', {
        //     method: "post",
        //     body: JSON.stringify({ email, Pass , name , uname }),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // }
        // )
        // if(result){
        //     alert("Successfull!!Welcome to the Community..!!")
        //     setEmail("");
        //     setName("");
        //     setConfirmpassword("");
        //     setPass("");
        //     setUname("");
        // }
    }
    return(
        <>
        <div className="w-screen h-screen bg-no-repeat bg-cover" style={{ backgroundImage: `url(${img})`}}>
            <div className="flex flex-col gap-4 text-white font-serif text-center ">
                <h1 className="text-8xl text-white font-serif">SMART PARKING</h1>
                <div className="w-fit mx-auto mt-12 bg-[#00000033] border-2 p-12 border-slate-50">
                    <div className=" text-white flex flex-col gap-4">
                    <ul className='h-full overflow-scroll m-12 py-12' id='scroll'>
          {data.map((item) => (
            <li key={item._id}>
                <h4 className="text-6xl text-white ">{item.name}</h4>
                <h4 className="text-4xl text-white ">{item.uname}</h4>
                <h4 className="text-4xl text-white ">{item.Pass}</h4>
                <h4 className="text-4xl text-white ">{item.date.slice(0,10)}</h4>
                <h4 className="text-4xl text-white ">{item.time}</h4>
            </li>
          ))}
        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Home;