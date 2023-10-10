import logo from "../assets/logo.png";

interface NavparProps {
  Logein: boolean;
}
export default function Nav(prop: NavparProps) {
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
                    <a
                      href="/"
                      className="text-red-600 transition duration-150 ease-in-out hover:text-gray-300   "
                    >
                      LogOut
                    </a>
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
