import { CheckCircle2 } from "lucide-react";

const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        P<span className="text-orange-600">ricing</span>
      </h2>

    <div className="flex m-10 items-center">
      <div className="p-10 pr-2 border border-neutral-700 rounded-xl w-full sm:w-1/2 lg:w-1/3 mr-3">
        <h2 className="text-4xl mb-8">Bachelor Degree</h2>
        <p className="text-4xl mb-8">
          $700<span className="text-base opacity-60"> /Year</span>
        </p>
        <ul>
          <li className="mt-8 flex items-center">
            <CheckCircle2 />
            <span className="ml-2">Quality</span>
          </li>
          <li className="mt-8 flex items-center">
            <CheckCircle2 />
            <span className="ml-2">Efficiency</span>
          </li>
          <li className="mt-8 flex items-center">
            <CheckCircle2 />
            <span className="ml-2">Excellence</span>
          </li>
          <li className="mt-8 flex items-center">
            <CheckCircle2 />
            <span className="ml-2">Morality</span>
          </li>
          <li className="mt-8 flex items-center">
            <CheckCircle2 />
            <span className="ml-2">Virtue</span>
          </li>
        </ul>
        <a
          href="#"
          className="inline-flex  ml-[-1rem] ml-[-1rem] justify-center items-center text-center w-full h-12 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
        >
          Subscribe
        </a>
      </div>

      <div className="p-10 pr-2 border border-neutral-700 rounded-xl w-full sm:w-1/2 lg:w-1/3 mr-3">
        <h2 className="text-4xl mb-8">Higher Bachelor's Degree</h2>
        <p className="text-4xl mb-8">
        $1500<span className="text-base opacity-60"> /Year</span>
        </p>
        <ul>
          <li className="mt-8 flex items-center">
            <CheckCircle2 />
            <span className="ml-2">Quality</span>
          </li>
          <li className="mt-8 flex items-center">
            <CheckCircle2 />
            <span className="ml-2">Efficiency</span>
          </li>
          <li className="mt-8 flex items-center">
            <CheckCircle2 />
            <span className="ml-2">Excellence</span>
          </li>
          <li className="mt-8 flex items-center">
            <CheckCircle2 />
            <span className="ml-2">Morality</span>
          </li>
          <li className="mt-8 flex items-center">
            <CheckCircle2 />
            <span className="ml-2">Virtue</span>
          </li>
        </ul>
        <a
          href="#"
          className="inline-flex  ml-[-1rem] justify-center items-center text-center w-full h-12 p-5  mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
        >
          Subscribe
        </a>
      </div>

      <div className="p-10 pr-2 border border-neutral-700 rounded-xl w-full sm:w-1/2 lg:w-1/3 mr-3">
        <h2 className="text-4xl mb-8">Doctoral degree</h2>
        <p className="text-4xl mb-8">
        $2500<span className="text-base opacity-60"> /Year</span>
        </p>
        <ul>
          <li className="mt-8 flex items-center">
            <CheckCircle2 />
            <span className="ml-2">Quality</span>
          </li>
          <li className="mt-8 flex items-center">
            <CheckCircle2 />
            <span className="ml-2">Efficiency</span>
          </li>
          <li className="mt-8 flex items-center">
            <CheckCircle2 />
            <span className="ml-2">Excellence</span>
          </li>
          <li className="mt-8 flex items-center">
            <CheckCircle2 />
            <span className="ml-2">Morality</span>
          </li>
          <li className="mt-8 flex items-center">
            <CheckCircle2 />
            <span className="ml-2">Virtue</span>
          </li>
        </ul>
        <a
          href="#"
          className="inline-flex  ml-[-1rem] justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
        >
          Subscribe
        </a>
      </div>
      </div>
    </div>
  );
};

export default Pricing;
