"use client";

export default function Stepper({ activeStep }) {
  const steps = ["Draft", "Team", "Budget", "Review"];

  return (
    <div className="w-full h-16 border border-gray-400 bg-white rounded-2xl flex items-center">
      <ul className="flex justify-evenly w-full text-gray-700">
        {steps.map((item, index) => {
          const isActive = item === activeStep;

          return (
            <li key={index} className="flex items-center gap-2">
              
              {/* Circle number */}
              <span
                className={`flex items-center justify-center w-5 h-5 text-xs rounded-full ${
                  isActive
                    ? "bg-sky-500 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {index + 1}
              </span>

              {/* Step name */}
              <span
                className={`text-sm font-medium ${
                  isActive
                    ? "text-sky-500 border-b-2 border-sky-500"
                    : ""
                }`}
              >
                {item}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}