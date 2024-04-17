
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';


const Destination = () => {
    return (
      <div className="md:mt-20 font-mont flex justify-between items-center h-full">
        <div className="text-white md:w-[48%] space-y-5">
          <h1 className="font-extrabold text-7xl font-bebas">Cox's bazar</h1>
          <p className="opacity-80 text-justify">
            Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s
            known for its very long, sandy beachfront, stretching from Sea Beach
            in the north to Kolatoli Beach in the south. Aggameda Khyang
            monastery is home to bronze statues and centuries-old Buddhist
            manuscripts. South of town, the tropical rainforest of Himchari
            National Park has waterfalls and many birds. North, sea turtles
            breed on nearby Sonadia Island.
          </p>
        </div>
        <div className="bg-white p-6 md:w-[30%] rounded-lg space-y-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="opacity-80">
              Origin
            </label>
            <input
              type="text"
              className="input bg-base-200 placeholder:text-black font-bold"
              placeholder="Dhaka"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="opacity-80">
              Destinition
            </label>
            <input
              type="text"
              className="input bg-base-200 placeholder:text-black font-bold"
              placeholder="Cox's Bazar"
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <label className="opacity-80" htmlFor="">From</label>
              <input type="date" className="input placeholder:font-bold" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="opacity-80" htmlFor="">To</label>
              <input type="date" className="input placeholder:font-bold" />
            </div>
          </div>
          <button className="btn bg-[#F9A51A] border-none outline-none w-full">Start Booking</button>
        </div>
      </div>
    );
};

export default Destination;