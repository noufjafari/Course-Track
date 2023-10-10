import React from "react";
import axios from "axios";
type Coursinfo = {
  Coursname: string;
  Summry: string;
  Date: string;
};
const ApiCours = "https://64e1142f50713530432cee2a.mockapi.io/courses";
export default function StuPage() {
  const [GetCours, setGetCours] = React.useState<Coursinfo[]>([]);
  React.useEffect(() => {
    axios.get(ApiCours).then((res) => {
      setGetCours(res.data);
    });
  }, []);
  return (
    <div className="ml-2 mb-5  grid grid-cols-4 max-sm:grid-cols-1 mt-20 gap-10 ">
      {GetCours.map((item) => {
        return (
          <div className="bg-card rounded-lg border-2 h-80 w-60 max-sm:w-48 text-white mb-20 text-center flex flex-col justify-center gap-7 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300">
            <p className="text-xs w-44 text-left ml-3 max-sm:w-40 max-sm:ml-3 ">
              {item.Date}
            </p>
            <h1 className="font-bold text-3xl w-40 mt-10  ml-10 max-sm:ml-4  max-sm:mt-6 max-sm:text-2xl max-sm:w-40">
              {item.Coursname}
            </h1>
            <h1 className="font-bold w-44 ml-9 max-sm:w-40 max-sm:ml-3 text-base">
              {item.Summry}
            </h1>
          </div>
        );
      })}
    </div>
  );
}
