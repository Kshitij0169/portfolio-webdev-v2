import React from 'react'

const ProjectTags = ({name, onClick, isSelected}) => {
  const buttonStyles = isSelected
  ? "text-white border-primary-500"
  : "text-[#D1D1D1] border-slate-600 hover:text-white"
  return (
    <button className={`${buttonStyles} rounded-full border-b-2 px-8 py-2 text-xl cursor-pointer mb-5`}
    onClick={() => onClick(name)}>
        {name}
    </button>
  )
}

export default ProjectTags