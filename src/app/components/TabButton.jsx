import React from 'react';

const TabButton = ({active, selectTab, children}) => {

  const buttonClasses = active ? "text-white border-b border-primary-500" : "text-[#D1D1D1]"

  return (
    <button onClick={selectTab}>
        <p className={`mr-4 font-semibold hover:text-white ${buttonClasses}`}>
            {children}
        </p>
    </button>
  );
}

export default TabButton