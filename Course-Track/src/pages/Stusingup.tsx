import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import Swal from "sweetalert2";

type IuserInfo = {
  userName: string;
  password: string;
  email: string;
};

export default function Stusingup() {
  const [error, seterror] = React.useState("");
  const [emailerror, setEmailerror] = React.useState("");
  const [passerror, setPaaerror] = React.useState("");
  const [inputValue, setInputValue] = React.useState<IuserInfo>({
    userName: "",
    password: "",
    email: "",
  });

  const navgit = useNavigate();

  const logIn = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^[a-zA-Z0-9]{4,}$/;
    if (
      inputValue.userName != "" &&
      inputValue.password != "" &&
      inputValue.email != ""
    ) {
       if (!emailRegex.test(inputValue.email)) {
        setEmailerror("Invalid email must be ex: nouf@gmail.com");
      }
      else if (!passwordRegex.test(inputValue.password)) {
        setPaaerror("Invalid password must at least 4 digit");
  
      }
      else if (
        emailRegex.test(inputValue.email) &&
        passwordRegex.test(inputValue.password)
      ) {
        axios
        .post("https://64ec519bf9b2b70f2bfa170c.mockapi.io/Student", {
          userName: inputValue.userName,
          password: inputValue.password,
          email: inputValue.email,
        })

        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
        Swal.fire(
          '',
          'Sign  up successful!',
          'success'
        )
      navgit("/studentlogin");
    }
  } else {
      seterror("Invalid must be filled");

    }
   
  };

  return (
    <div>
      <div className="min-h-screen flex justify-center items-center">
        <div className=" bg-gray-200 w-1/3  max-sm:w-3/4 flex flex-col justify-center items-center rounded-lg ">
          <div className="sm:mx-auto mt-7 max-sm:mt-5 ">
            <img className="mx-auto h-9 w-auto max-sm:w-24 max-sm:h-6 " src={logo} alt="logo" />
            <h2 className="mt-5 max-sm:text-lg text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
              Creat your account
            </h2>
          </div>

          <div className="text-left w-80 mt-5 max-sm:mt-2 max-sm:w-44 ">
            <label
              htmlFor="email"
              className=" mt-10 block text-sm mb-3 font-medium leading-6 text-gray-900"
            >
              Name
            </label>

            <input
              value={inputValue.userName}
              onChange={(e) => {
                setInputValue({ ...inputValue, userName: e.target.value });
              }}
              type="text"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="ml-[1rem] m-2 max-sm:ml-0 text-red-600">
            {error}
          </div>

          <div className="text-left w-80 max-sm:w-44 ">
            <label
              htmlFor="email"
              className=" mt-5 block text-sm mb-5 font-medium leading-6 text-gray-900"
            >
              Email address
            </label>

            <input
              value={inputValue.email}
              onChange={(e) => {
                setInputValue({ ...inputValue, email: e.target.value });
              }}
              type="email"
              className="block w-full rounded-md border-0 py-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="ml-[1rem] m-1 max-sm:ml-0 text-red-600">
            {error}{" "}
          </div>
          <div className="ml-[1rem] m-1 max-sm:ml-0 text-red-600">
            {emailerror}
          </div>

          <div className="text-left w-80 max-sm:w-44">
            <label
              htmlFor="password"
              className="block mt-5 mb-5 text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>

            <input
              value={inputValue.password}
              onChange={(e) => {
                setInputValue({ ...inputValue, password: e.target.value });
              }}
              type="password"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="ml-[1rem] m-2 max-sm:ml-0 text-red-600">
            {error}
          </div>
          <div className="ml-[1rem] m-2 max-sm:ml-0 text-red-600">
            {passerror}
          </div>
          <br />

          <button
            className="bg-[#08AFB7] flex w-60 max-sm:w-24 mt-8 max-sm:mt-0 mb-2  justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            onClick={logIn}
          >
            Sign up
          </button>

          <p className="m-5 mb-7 max-sm:mb-5 max-sm:text-xs text-center ">
            Already have an account?
            <a
              className="text-lg text-zinc-400 max-sm:text-sm hover:text-teal-500"
              href="/studentlogin"
            >
              {" "}
              Log in{" "}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
