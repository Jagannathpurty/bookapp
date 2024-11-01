import React from "react";

const Card = ({ item }) => {
  console.log(item);
  return (
   <>
   
   <div my-5 mt-4  >
      <div className="card bg-base-100 w-50  shadow-xl  flex m-3 hover:scale-105 duration-200   ">
        <figure>
          <img
            src={item.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category} </div>
          </h2>
          <p>{item.title} </p>
          <div className="card-actions justify-between ">
            <div className=" border-[2px] rounded-full px-2 py-1"> ${item.price} </div>
            <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white">By Now</div>
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default Card;
