import logo from "../assets/logo.png";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

interface NavparProps {
  Logein: boolean;

}
export default function Nav(prop: NavparProps) {
  const Neveg = useNavigate();

  const logout =() =>{
    Swal.fire({
      title: "Are you sure you want to Logout?",
      showCancelButton: true,
      confirmButtonColor: "#e34237",
      cancelButtonColor: "#08AFB7",
      confirmButtonText: " Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        Neveg("/");

      }
    });
  }
  return (
    <div>
      <div className="relative shadow">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"></div>

        <div className="w-full max-sm:w-full backdrop-blur-sm">
          <div className="relative z-1 h-16 mx-auto px-5 max-w-7xl flex items-center justify-between">
            <img src={logo} className="w-40" alt="" />

            <ul className="flex items-center gap-5">
              {prop.Logein ? (
                <>
                  <li>
                    <button
                     onClick={logout}

                      className="text-red-600 transition duration-150 ease-in-out hover:text-gray-300   "
                    >
                      LogOut
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <a
                      className="hover:text-[#417280] transition-colors"
                      href="/studentlogin"
                    >
                      LogIn
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-[#417280] transition-colors"
                      href="/singup"
                    >
                      SignUp
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
