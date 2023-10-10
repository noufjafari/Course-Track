import React from "react";
import delImag from "../assets/bin.png";
import UpdatImag from "../assets/refresh.png";
import axios from "axios";

type Coursinfo = {
  Coursname: string;
  Summry: string;
  Date: string;
  id: "";
};
const ApiCours = "https://64e1142f50713530432cee2a.mockapi.io/courses";
export default function AdminPage() {
  const [GetCours, setGetCours] = React.useState<Coursinfo[]>([]);

  const [PostCours, setPostCours] = React.useState<Coursinfo>({
    Coursname: "",
    Summry: "",
    Date: "",
    id: "",
  });

  const PostGet = () => {
    if (PostCours.Coursname != "" && PostCours.Summry != "") {
      axios
        .post(ApiCours, {
          Coursname: PostCours.Coursname,
          Summry: PostCours.Summry,
          Date: PostCours.Date,
        })
        .then((res) => {
          setPostCours(res.data);
          console.log(res);
        });
    }
  };
  React.useEffect(() => {
    axios.get(ApiCours).then((res) => {
      setGetCours(res.data);
    });
  }, [PostCours]);

  const deleteID = (id: string) => {
    axios
      .delete(`https://64e1142f50713530432cee2a.mockapi.io/courses/${id}`)
      .then((res) => {
        console.log(res);
        setGetCours(
          GetCours.filter((item) => {
            return item.id !== id;
          })
        );
      });
    console.log(id);
  };
  return (
    <div>
      <div className="max-sm:flex max-sm:flex-col max-sm:gap-1 flex flex-row justify-center mt-10 max-sm:mt-10 text-center w-full gap-10 items-center">
        <input
          className="border-2 mt-3 pl-1 h-10 pr-10 ring-teal-600 rounded "
          value={PostCours.Coursname}
          placeholder="Add CoursName"
          type="text"
          onChange={(e) => {
            setPostCours({ ...PostCours, Coursname: e.target.value });
          }}
        ></input>
        <br></br>

        <input
          className="border-2 h-10 pl-1 pr-10 ring-teal-600 mt-3 rounded "
          value={PostCours.Summry}
          placeholder="Add Summry"
          type="text"
          onChange={(e) => {
            setPostCours({ ...PostCours, Summry: e.target.value });
          }}
        ></input>
        <br></br>

        <input
          className="border-2 h-10 pl-1 pr-10 ring-teal-600 mt-3 rounded "
          value={PostCours.Date}
          placeholder="Add Date"
          type="text"
          onChange={(e) => {
            setPostCours({ ...PostCours, Date: e.target.value });
          }}
        ></input>
        <br></br>
        <button
          className="bg-[#08AFB7] h-10 flex w-40 mt-8 mb-2  justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
          onClick={PostGet}
        >
          Add
        </button>
      </div>
      <div className="ml-2 mb-10 grid grid-cols-4 max-sm:grid-cols-1 mt-20 gap-10 ">
        {GetCours.map((item) => {
          return (
            <div >
            <div className=" bg-card rounded-lg border-2 h-80 w-60 max-sm:w-48 text-white mb-20 text-center flex flex-col justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300">
             
.              <p className="text-xs w-44 mt-1 text-left ml-3 max-sm:w-40 max-sm:ml-3 max-sm:mt-10">{item.Date}</p>
              <h1 className="font-bold text-3xl w-40 mt-20 max-sm:mt-10 ml-10 max-sm:ml-4 max-sm:text-2xl max-sm:w-40">{item.Coursname}</h1>
              <h1 className="font-bold w-44 ml-9 mt-10 mb-10 max-sm:mb-1 max-sm:w-40 max-sm:ml-3 text-base">{item.Summry}</h1>
              </div>

              <div className="  mb-5 max-sm:mt-1 max-sm:mb-5 flex flex-row-reverse justify-evenly">
                <a onClick={() => deleteID(item.id)}>
                  <img
                    className=" w-7 max-sm:w-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300"
                    src={delImag}
                    alt="delete"
                  />
                </a>

                <a
                  onClick={() => localStorage.setItem("id", item.id)}
                  href="/Update"
                >
                  <img
                    className=" w-7 max-sm:w-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300"
                    src={UpdatImag}
                    alt="delete"
                  />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
