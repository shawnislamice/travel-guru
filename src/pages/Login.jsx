import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Login = () => {
  return (
    <div className=" font-mont space-y-4 md:w-[570px] mx-auto  flex flex-col justify-center rounded-lg md:p-12 bg-white border border-[#ABABAB] relative top-10">
      <h3 className="text-2xl text-black font-mont font-bold">Login</h3>
      <input
        className="py-3 bg-transparent border-b  outline-none border-[#C5C5C5] placeholder:text-black"
        type="text"
        placeholder="Username or Email"
      />
      <input
        className="py-3 bg-transparent border-b outline-none border-[#C5C5C5] placeholder:text-black"
        type="password"
        placeholder="Passowrd"
      />
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <input className="h-4" type="checkbox" name="" id="check" />
          <label htmlFor="check">Remember me</label>
        </div>
        <Link>
          <p className="text-[#F9A51A]">Forgot Password</p>
        </Link>
      </div>
      <button className="btn bg-[#F9A51A]">Login</button>
      <p className="font-medium text-center">
        Don’t have an account?{" "}
        <Link to='/signup'>
          <span className="text-[#F9A51A]">Create an account</span>
        </Link>
      </p>
      <div className="relative cursor-pointer ">
        <hr />
        <p className="absolute -top-[12px] left-1/2">Or</p>

        <div className="hover:scale-95 duration-300 rounded-xl  max-w-sm mx-auto flex items-center gap-5 px-2 md:py-3 md:mt-3 mt-2 border  border-[#C5C5C5]">
          <FaGoogle size={20} className=" " />
          <p className="block mx-auto text-black font-medium">
            Continue with Google
          </p>
        </div>
        <div className="hover:scale-95 duration-300 rounded-xl  max-w-sm mx-auto flex items-center gap-5 px-2 md:py-3 md:mt-3 mt-2 border  border-[#C5C5C5]">
          <FaFacebook size={20} className="text-blue-500"></FaFacebook>
          <p className="block mx-auto text-black font-medium">
            Continue with Facebook
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
