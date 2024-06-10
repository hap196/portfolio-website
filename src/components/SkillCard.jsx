import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const SkillCard = ({ name, icon, experience }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`relative w-full h-32 transform-style-preserve-3d transition-transform duration-700 ease-in-out ${
        visible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
      }`}
    >
      <div className="relative w-full h-full cursor-pointer group perspective-1000">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 border-2 border-gray-200 dark:border-off-white rounded-lg shadow-md bg-light-blue-2 dark:bg-dark-blue backface-hidden group-hover:rotate-y-180 transition-transform duration-700 ease-in-out">
          <img src={icon} alt={`${name} icon`} className="h-16 w-16 mb-2" />
          <p className="text-lg font-semibold text-gray-800 dark:text-off-white">
            {name}
          </p>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 border-2 border-gray-200 dark:border-off-white rounded-lg shadow-md bg-light-blue-2 dark:bg-dark-blue rotate-y-180 backface-hidden group-hover:rotate-y-0 transition-transform duration-700 ease-in-out">
          <p className="text-lg font-semibold text-gray-800 dark:text-off-white">
            Experience:
          </p>
          <p className="text-lg font-semibold text-gray-800 dark:text-off-white">
            {experience} years
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
