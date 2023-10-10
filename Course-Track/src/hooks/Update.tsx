import React from "react";
import axios from "axios";
import StuPage from "../hooks/StuPage";
import Nav from "../components/nav";
import image from "../assets/data-report.png";
import image2 from "../assets/dashboard (4).png"
import image3 from "../assets/layout.png"
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
type Coursinfo = {
  Coursname: string;
  Summry: string;
  Date: string;
  id: "";
};
export default function Update() {
  const Neveg = useNavigate();
  const [Update, setUpdate] = React.useState<Coursinfo>({
    Coursname: "",
    Summry: "",
    Date:"",
    id: "",
  });
  const id = localStorage.getItem("id");

  const edite = () => {
    axios
      .put(`https://64e1142f50713530432cee2a.mockapi.io/courses/${id}`, {
        Coursname: Update.Coursname,
        Summry: Update.Summry,
        Date: Update.Date,
      })
      .then(() => {
        Neveg("/CoursPage");
      });
  };
  return (
    <div>
      <Nav Logein={true} />

      <div className="w-11/12 max-sm:w-11/12 max-sm:ml-6 ml-16 mb-2 flex flex-row items-center h-60 mt-10 justify-evenly bg-gray-300 bg-opacity-25 rounded-lg">
              
              <div className=" w-60 flex flex-col text-center items-center justify-center"><img className="w-40 max-sm:w-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300" src={image} alt="image" />
              <p className="text-black font-semibold max-sm: text-sm max-sm:w-28 max-sm:mt-5 ">Take control of Your Courses</p></div>
              
              
              <div className=" w-60 flex flex-col text-center items-center justify-center gap-4"><img className="w-32 max-sm:w-16 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300" src={image3} alt="image" />
              <p className="text-black font-semibold mt-4 max-sm: text-sm max-sm:w-40">Track Your Success</p></div>

 
              <div className=" w-60 flex flex-col text-center items-center justify-center"><img className="w-40 max-sm:w-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300" src={image2} alt="image" />
              <p className="text-black font-semibold max-sm: text-sm max-sm:w-28 max-sm:mt-5 ">Streamline Your Study Schedule</p></div>

              </div> 

        <div className=" mt-18 m-auto max-w-7xl px-4 py-6 lg:px-8 text-center w-full">
          <h1 className="text-4xl max-sm:ml-10 max-sm:mt-10 mt-5 font-bold uppercase tracking-tight text-gray-900">
            Update the Course
          </h1>
        </div>


      <div className=" bg-gray-300 bg-opacity-25 rounded-lg border-0 max-sm:w-10/12 max-sm:ml-14 max-sm:m-10 flex flex-col items-center justify-center m-10">
      <div className=" max-sm:flex max-sm:flex-col max-sm:gap-1 flex flex-row justify-center text-center w-full gap-10 items-center">
        <input
          className="border-2 mt-3 pl-1 h-10 pr-10 ring-teal-600 rounded "
          value={Update.Coursname}
          placeholder="Add CoursName"
          type="text"
          onChange={(e) => {
            setUpdate({ ...Update, Coursname: e.target.value });
          }}
        ></input>
        <br></br>

        <input
          className="border-2 h-10 pl-1 pr-10 ring-teal-600 mt-3 rounded "
          value={Update.Summry}
          placeholder="Add Summry"
          type="text"
          onChange={(e) => {
            setUpdate({ ...Update, Summry: e.target.value });
          }}
        ></input>
        <br></br>

          
        <input
          className="border-2 h-10 pl-1 pr-10 ring-teal-600 mt-3 rounded "
          value={Update.Date}
          placeholder="Add Date"
          type="text"
          onChange={(e) => {
            setUpdate({ ...Update, Date: e.target.value });
          }}
        ></input>


        <button
          className="bg-[#08AFB7] h-10 flex w-40 mt-8 mb-2  justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
          onClick={edite}
        >
          Update
        </button>

        </div>
      <div className="">
          <StuPage />
          </div>
  
      </div>
            <Footer />

    </div>
  );
}
