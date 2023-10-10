import logo from "../assets/logo.png";
import Nav from "../components/nav";
export default function Home() {
  return (
    <div>
      <Nav Logein={false} />
      <div className="flex justify-center">
            <img className="w-1/2 mt-56 max-sm:w-4/5 max-sm:mt-60 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300" src={logo} alt="the logo" />
        
      </div>
    </div>
  );
}
