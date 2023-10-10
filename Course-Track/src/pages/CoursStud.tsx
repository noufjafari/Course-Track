import StuPage from "../hooks/StuPage";
import Nav from "../components/nav";
import Footer from "../components/footer";
import image from "../assets/data-report.png";
import image2 from "../assets/dashboard (4).png";
import image3 from "../assets/layout.png";

export default function CoursStud() {
  return (
    <div>
      <Nav Logein={true} />
      <div className="w-11/12 max-sm:w-11/12 max-sm:ml-4 ml-16 mb-2 flex flex-row items-center h-60 mt-10 justify-evenly bg-gray-300 bg-opacity-25 rounded-lg">
        <div className=" w-60 flex flex-col text-center items-center justify-center">
          <img
            className="w-40 max-sm:w-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300"
            src={image}
            alt="image"
          />
          <p className="text-black font-semibold max-sm: max-sm:text-[0.60rem] text-sm max-sm:w-18 max-sm:mt-5 ">
            Take control of Your Courses
          </p>
        </div>

        <div className=" w-60 flex flex-col text-center items-center justify-center gap-4">
          <img
            className="w-32 max-sm:w-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300"
            src={image3}
            alt="image"
          />
          <p className="text-black font-semibold mt-4 max-sm:text-[0.60rem] text-sm max-sm:w-14">
            Track Your Success
          </p>
        </div>

        <div className=" w-60 flex flex-col text-center items-center justify-center">
          <img
            className="w-40 max-sm:w-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300"
            src={image2}
            alt="image"
          />
          <p className="text-black font-semibold max-sm:text-[0.60rem] text-sm max-sm:w-18 max-sm:mt-5 ">
            Streamline Your Study Schedule
          </p>
        </div>
      </div>

      <div className=" mt-18 m-auto max-w-7xl px-4 py-6 lg:px-8 text-left w-full">
        <h1 className="text-4xl max-sm:ml-10 max-sm:mt-10 mt-5 font-bold uppercase tracking-tight text-gray-900">
          MY Courses
        </h1>
      </div>

      <div className=" bg-gray-300 bg-opacity-25 rounded-lg border-0 max-sm:w-10/12 max-sm:ml-8 max-sm:m-10 flex flex-row items-center justify-center m-10">
        <StuPage />
      </div>
      <br />
      <Footer />
    </div>
  );
}
