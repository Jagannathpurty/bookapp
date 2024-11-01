import React from "react";
import {useEffect, useState } from "react";
import axios from "axios";

// import list from "../../public/list.json"
import Card from "./Card";

const Courses = () => {

const [book,setBook]= useState([]);
   useEffect(()=>{
    const getBook= async()=>{
      
      try {
        const res= await axios.get("http://localhost:5001/book");
        console.log(res.data);
        setBook(res.data);
        

        
      } catch (error) {
        console.log(error);
        
      }
    }
    getBook();
   },[])

  return (
    <>
      <div className="max-w-screen-2xl md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl ">
            We're deligated to have you{" "}
            <span className="text-pink-500"> Here!</span>
          </h1>

          <p className="mt-12" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            praesentium accusantium laborum illum velit repellendus at
            reprehenderit consequatur, sunt facilis, aut est eligendi, quos id
            deserunt aperiam nam expedita suscipit?
          </p>
          <button className="bg-pink-500 mt-5 px-2 py-1 rounded-md hover:bg-pink-700" >  <a href="/">Back</a> </button>
        </div>

        <div  className="mt-12 grid grid-cols-1 md:grid-cols-4 ">
         {book.map((item)=>(
          <Card  item={item } key={item.id} />
         ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
