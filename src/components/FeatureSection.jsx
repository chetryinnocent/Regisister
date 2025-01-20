import { PiStudentDuotone } from "react-icons/pi";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Feature
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Top 5{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Curriculum
          </span>
        </h2>
      </div>

      <div className="flex">
        <div className="">
          <div className="flex flex-wrap mt-10 lg:mt-20">
            <h2 className="flex ml-6 mr-2 h-10 w-10 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
              <PiStudentDuotone />
            </h2>
            <h2 className="mt-1 mb-6 text-xl">English language classes</h2>
          </div>
          <p className="text-md p-2 ml-[4rem] text-neutral-500 w-[20rem]">
            English Remedial Class is a course designed to fill in gaps and help
            improve the ability to speak, listen, write, and read English for
            students who are enrolled in a national language program and intend
            to switch to an international program in the second year or who
            intend to find a job after successfully completing the first year
          </p>
        </div>

        <div>
          <div className="flex flex-wrap mt-10 lg:mt-20">
            <h2 className="flex ml-6 mr-2 h-10 w-10 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
              <PiStudentDuotone />
            </h2>
            <h2 className="mt-1 mb-6 text-xl">Associate Degree</h2>
          </div>
          <p className="text-md p-2 ml-[4rem] text-neutral-500 w-[20rem]">
            English Remedial Class is a course designed to fill in gaps and help
            improve the ability to speak, listen, write, and read English for
            students who are enrolled in a national language program and intend
            to switch to an international program in the second year or who
            intend to find a job after successfully completing the first year
          </p>
        </div>

        <div>
          <div className="flex flex-wrap mt-10 lg:mt-20">
            <h2 className="flex ml-6 mr-2 h-10 w-10 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
              <PiStudentDuotone />
            </h2>
            <h2 className="mt-1 mb-6 text-xl">Bachelor Degree</h2>
          </div>
          <p className="text-md p-2 ml-[4rem] text-neutral-500 w-[20rem]">
            English Remedial Class is a course designed to fill in gaps and help
            improve the ability to speak, listen, write, and read English for
            students who are enrolled in a national language program and intend
            to switch to an international program in the second year or who
            intend to find a job after successfully completing the first year
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="">
          <div className="flex flex-wrap mt-10 lg:mt-20">
            <h2 className="flex ml-6 mr-2 h-10 w-10 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
              <PiStudentDuotone />
            </h2>
            <h2 className="mt-1 mb-6 text-xl">Higher Bachelor's Degree</h2>
          </div>
          <p className="text-md p-2 ml-[4rem] text-neutral-500 w-[20rem]">
            English Remedial Class is a course designed to fill in gaps and help
            improve the ability to speak, listen, write, and read English for
            students who are enrolled in a national language program and intend
            to switch to an international program in the second year or who
            intend to find a job after successfully completing the first year
          </p>
        </div>

        <div>
          <div className="flex flex-wrap mt-10 lg:mt-20">
            <h2 className="flex ml-6 mr-2 h-10 w-10 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
              <PiStudentDuotone />
            </h2>
            <h2 className="mt-1 mb-6 text-xl">Doctoral degree</h2>
          </div>
          <p className="text-md p-2 ml-[4rem] text-neutral-500 w-[20rem]">
            English Remedial Class is a course designed to fill in gaps and help
            improve the ability to speak, listen, write, and read English for
            students who are enrolled in a national language program and intend
            to switch to an international program in the second year or who
            intend to find a job after successfully completing the first year
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
