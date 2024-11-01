import React from "react";

const Contact = () => {
  return (
    <>
      <div className="  mt-20 ">
        <div className="form text-center  h-screen p-5">
          <form action="" className="text-center h-screen  p-4"> 
            <table className=" text-center justify-center border md:bg-green-700   bg-slate-500  rounded-md m-auto   "  style={{  height:"400px ", width:"500px" }}>
            <tbody className="p-2" >
            <tr  className="text-center"> <th colSpan={2}  >Contact us </th></tr>
              <tr>
                <td>Name:</td>
                <td>
                  <input
                    type="text" placeholder="Enter a name"
                    className="border border-red-200 rounded-md p-1 md:p-2"
                  />
                </td>
              </tr>{" "}
              <tr>
                <td>Email:</td>
                <td>
                  <input
                    type="text" placeholder="Enter a email"
                    className="border border-red-200   rounded-md p-1 md:p-2 "
                  />
                </td>
              </tr>{" "}
              <tr>
                <td>Mobile:</td>
                <td>
                  <input type="text"  placeholder="Enter a mobile" className="border border-red-200  rounded-md p-1 md:p-2 " />
                </td>
              </tr>
               <tr>
                <td>Zip code:</td>
                <td>
                  <input type="text" placeholder="Enter a zip code" className="border border-red-200  rounded-md p-1 md:p-2 " />
                </td>
              </tr>
              <tr>
                <td>City:</td>
                <td>
                  <select name="" id="" className="rounded-md p-1  mr-12 ">
                    <option value="">Select</option>
                    <option value="">Bangalore</option>{" "}
                    <option value="">Odisha</option>{" "}
                    <option value="">Delhi</option>{" "}
                    <option value="">Pune</option>{" "}
                    <option value="">Jharkhand</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Message:</td>
                <td>
                  <textarea name="" id="" className="rounded-md" ></textarea>
                </td>
              </tr>
              <tr className="text-center" >
             
                <td colSpan={2} >
              <button className="bg-blue-700  p-1 rounded-md  w-20  hover:bg-blue-300  "  >Submit</button>

                </td>
              </tr>
            </tbody>
              
            </table>
         
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
