
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
      <div className=" font-mont space-y-4 md:w-[570px] mx-auto  flex flex-col justify-center rounded-lg md:p-12 bg-white border border-[#ABABAB] relative top-10">
        <h3 className="text-2xl text-black font-mont font-bold">
          Create an account
        </h3>
        <input
          className="py-3 bg-transparent border-b  outline-none border-[#C5C5C5] placeholder:text-black"
          type="text"
          placeholder="First name"
        />
        <input
          className="py-3 bg-transparent border-b  outline-none border-[#C5C5C5] placeholder:text-black"
          type="text"
          placeholder="Last Name"
        />
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
        <input
          className="py-3 bg-transparent border-b outline-none border-[#C5C5C5] placeholder:text-black"
          type="password"
          placeholder="Confirm Passowrd"
        />
       
        <button className="btn bg-[#F9A51A]">Create an account</button>
        <p className="font-medium text-center">
          Already have an account?{" "}
          <Link to="/login">
            <span className="text-[#F9A51A]">Login Now</span>
          </Link>
        </p>
       
      </div>
    );
};

export default SignUp;