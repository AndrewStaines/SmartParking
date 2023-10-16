import React from "react";
import img from "../assets/bg.jpg"
import './home.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Signup(){
    const [email, setEmail] = useState('');
    const [Pass, setPass] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [name , setName] = useState("");
    const [uname , setUname] =useState("")
    
    
    const [vehicle, setvehi] = useState('');
    const handleOnJoin = async(e)=>{
     
        var now=new Date()
        
        var hour=now.getHours()
        var min= now.getMinutes()
        const tim=`${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`
        let time=tim
        function getCurrentDate() {
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth() + 1; 
            const day = currentDate.getDate();
            const formattedMonth = month < 10 ? `0${month}` : month;
            const formattedDay = day < 10 ? `0${day}` : day;
            const formattedDate = `${year}-${formattedMonth}-${formattedDay}`;
          
            return formattedDate;
          }
          const dat = getCurrentDate();
          
          let date=dat.slice(0,10);
          
        
          let tyv=""
        try {
           const response = await axios('http://localhost:5000/run-python', {
              method: 'post',
              headers: {
               'Content-Type': 'application/json',
             },
            });
            let rep=response.data
            console.log(rep)
            if (rep!=null) {
              const ty = await response.data;
              console.log(ty)
              tyv=ty
              setvehi(ty);
            } else {
             setvehi('Error running Python script.');
           }
          } catch (error) {
           setvehi('Error running Python script.');
          }
          console.log(tyv)
          let tyve=""
          if(tyv==1){
            tyve="Car"
          }
          else if(tyv==0){
            tyve="Bike"
          }
        
          let result = await fetch(
            'http://localhost:5000/register', {
            method: "post",
            body: JSON.stringify({ email, name , uname, Pass, time, date, tyve}),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        )
          
      
        if(result){
            alert("Successfull!!Welcome to the Community..!!")
            setEmail("");
            setName("");
            setConfirmpassword("");
            setPass("");
            setUname("");
        }

        

    }
    
    return(
        <>
        <div className="w-screen h-screen bg-no-repeat bg-cover" style={{ backgroundImage: `url(${img})`}}>
            <div className="flex flex-col gap-4 text-white font-serif text-center">
                <h1 className="text-8xl text-white font-serif">SMART PARKING</h1>
                <div className="w-fit mx-auto mt-12 bg-[#00000033] border-2 p-12 border-slate-50">
                    <div className=" text-white flex flex-col gap-4 overflow-scroll" id="scroll">
                        <h2 className="text-6xl text-white ">REGISTER</h2>
                        <form className="flex flex-col gap-4 text-2xl w-fit mx-auto text-black">
                            <input type="text" placeholder="Name" id="" className="bg-[#EAF0F7] text-xl px-12  py-3 my-4 rounded-lg w-full focus:outline-none" value={name} onChange={ e => setName(e.target.value)} />
                            <input type="text" placeholder="Number Plate" id="" className="bg-[#EAF0F7] text-xl px-12  py-3 my-4 rounded-lg w-full focus:outline-none" value={uname} onChange={ e => setUname(e.target.value)} />
                            <input type="email" placeholder="Phone Number" id="" className="bg-[#EAF0F7] text-xl px-12  py-3 my-4 rounded-lg w-full focus:outline-none" value={email} onChange={ e => setEmail(e.target.value)} />
                            <input type="password" placeholder="Password" id="" className="bg-[#EAF0F7] text-xl px-12  py-3 my-4 rounded-lg w-full focus:outline-none" />
                            <input type="password" placeholder="Confirm Password" id="" className="bg-[#EAF0F7] text-xl px-12  py-3 my-4 rounded-lg w-full focus:outline-none" />
                        </form>
                        <Link className="bg-[#ffffff] text-xl px-20 py-3 font-bold my-12 rounded-lg  text-black shadow-xl cursor-pointer hover:shadow-[#9e9e9e] hover:bg-[#000000] hover:text-white text-center" to='/home' onClick={handleOnJoin}>Join</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
    }

export default Signup;