import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Stulogin() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loggedIn, setLoggedIn] = React.useState(false);

  const navg = useNavigate();
  {
    loggedIn;
  }
  const AdminAPI = "https://64ec519bf9b2b70f2bfa170c.mockapi.io/Admin";
  const handleLogin = () => {
    axios.get(AdminAPI).then((res) => {
      const admin = res.data.find(
        (admin: any) =>
          admin.Username === username && admin.Password === password
      );

      if (admin) {
        setLoggedIn(true);
        navg("/CoursPage");
      } else {
        axios
          .get("https://64ec519bf9b2b70f2bfa170c.mockapi.io/Student")
          .then((res) => {
            const student = res.data.find(
              (student: any) =>
                student.userName === username && student.password === password
            );

            if (student) {
              setLoggedIn(true);
              navg("/CoursPage/stud");
            } else {
              alert("Invalid credentials");
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="min-h-screen flex justify-center items-center">
        <div className=" bg-gray-200 w-1/3 max-sm:w-3/4 flex flex-col justify-center items-center rounded-lg ">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-20">
            <img className="mx-auto h-9 w-auto " src={logo} alt="logo" />
            <h2 className="mt-8 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
              Log in to your account
            </h2>
          </div>
          <div className="text-left w-80 mt-5 ">
            <label
              htmlFor="email"
              className=" mt-10 block text-sm mb-5 font-medium leading-6 text-gray-900"
            >
              UserName
            </label>

            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="text-left w-80">
            <label
              htmlFor="password"
              className="block mt-5 mb-5 text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
            />
          </div>

          <br />
          <button
            className="bg-[#08AFB7] flex w-60 mt-8 mb-2  justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            onClick={handleLogin}
          >
            Log in
          </button>

          <p className="m-5 mb-20 text-center ">
            Dont have an account?
            <a
              className="text-lg text-zinc-400  hover:text-teal-500"
              href="/singup"
            >
              {" "}
              Sing up{" "}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
