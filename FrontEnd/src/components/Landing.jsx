import React from "react";
import img from "../assets/ld.jpg"
import { Link } from "react-router-dom";
function Landing(){
    return(
        <>
        <div className="w-screen h-screen bg-no-repeat bg-cover" style={{ backgroundImage: `url(${img})`}}>
            <div className="flex flex-col gap-4 text-white font-serif text-center ">
                <h1 className="text-8xl text-white font-serif">KEC BOOK STALL</h1>
                <p className="text-4xl mt-52">Welcome KEC Book Selling platform where you can sell your books....</p>
                <div className="flex gap-12 ml-auto mr-auto">
                    <Link className="bg-[#ffffff] text-xl px-20 py-3 font-bold my-12 rounded-lg  text-black shadow-xl cursor-pointer hover:shadow-[#9e9e9e] hover:bg-[#000000] hover:text-white text-center" to='/signup'>Signup</Link>
                    <Link className="bg-[#ffffff] text-xl px-20 py-3 font-bold my-12 rounded-lg  text-black shadow-xl cursor-pointer hover:shadow-[#9e9e9e] hover:bg-[#000000] hover:text-white text-center" to='/login'>Login</Link>
                </div>
            </div>
        </div>
        </>
    );
}

export default Landing;