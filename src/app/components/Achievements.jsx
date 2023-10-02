import React from 'react'

const achievementsList = [
    {
        metric: "Projects",
        value: "10+"
    },
    {
        metric: "Grades",
        value: "3.5+"
    },
    {
        metric: "Volunteering",
        value: "4+"
    },
    {
        metric: "Years",
        value: "2+"
    },
]

const Achievements = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="border=[#33353F] border rounded-md py-8 px-17 flex flex-row items-center justify-between">
        {
            achievementsList.map((achievement, index) => {
                return(
                    <div key={index} className="flex flex-col items-center justify-center mx-4 pl-4 pr-4">
                        <h2 className="text-white text-4xl font-bold">{achievement.value}</h2>
                        <p className="text-[#D1D1D1] text-base">{achievement.metric}</p>
                    </div>
                );
            })}
            </div>
    </div>
  );
};

export default Achievements