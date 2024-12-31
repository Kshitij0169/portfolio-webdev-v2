import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem )" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-[#D1D1D1]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-4 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        variants={variants}
        animate={active ? "active" : "default"}
        className="h-1 bg-primary-500 mt-1 mb-1 mr-3 rounded-full"
      ></motion.div>
    </button>
  );
};

export default TabButton;
