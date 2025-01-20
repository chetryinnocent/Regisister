import { CheckCircle2 } from "lucide-react";
import pbiu from "../assets/profile-pictures/code.png";

const Workflow = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        L
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          ocations
        </span>
      </h2>

      <div className="flex items-center​ mt-[3rem]">
        <div className="p-2 w-full lg:w-1/2">
          <img src={pbiu} alt="" />
        </div>

        <div className="w-full lg:w-1/2 mt-[5rem]">
          <div className="flex items-start mb-10">
            <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 items-center rounded-full">
              <CheckCircle2 />
            </div>
            <div>
              <h5 className="whitespace-nowrap mt-1 mb-2 text-xl">
                BELTEI Group Headquarters
              </h5>
              <span className="text-md text-neutral-500">
                Address: 173 Jawaharlal Nehru Blvd (215), Phnom Penh.
              </span>
            </div>
          </div>

          <div className="flex items-start mb-10">
            <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 items-center rounded-full">
              <CheckCircle2 />
            </div>
            <div>
              <h5 className="whitespace-nowrap mt-1 mb-2 text-xl">
                Tuol Sleng
              </h5>
              <span className="text-md text-neutral-500">
                Address: #21, St 360, Boeung Kengkang 3, Boeung Kengkang Phnom Penh, Phnom Penh 12304.
              </span>
            </div>
          </div>

          <div className="flex items-start mb-10">
            <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 items-center rounded-full">
              <CheckCircle2 />
            </div>
            <div>
              <h5 className="whitespace-nowrap mt-1 mb-2 text-xl">
              Chom Chao Flyover
              </h5>
              <span className="text-md text-neutral-500">
              Address: National Road 3, Chom Chao 2, Porsenchey, Phnom Penh, Phnom Penh, Cambodia.
              </span>
            </div>
          </div>

          <div className="flex items-start mb-10">
            <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 items-center rounded-full">
              <CheckCircle2 />
            </div>
            <div>
              <h5 className="whitespace-nowrap mt-1 mb-2 text-xl">
              Third Location Project Toul Pong
              </h5>
              <span className="text-md text-neutral-500">
              Address: Location 3: Toul Pong: Trapeang Romchek village, Sangkat Choam Chao I, Khan Por Senchey, Phnom Penh.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;