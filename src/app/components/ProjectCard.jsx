import React from 'react';
import{EyeIcon, CodeBracketIcon} from  '@heroicons/react/24/outline';
import Link from 'next/link';

const ProjectCard = ({imageUrl, title, description, gitUrl, previewUrl}) => {
  return (
    <div className="pb-8 hover:scale-110 duration-700">
        <div className="h-52 md:h-72 rounded-t-xl relative group" style={{background: `url(${imageUrl})`, backgroundSize: "cover"}}>
            <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                <Link 
                href={gitUrl} 
                className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#D1D1D1] hover:border-primary-500 group/link"
                >
                    <CodeBracketIcon className="h-10 w-10 text-[#D1D1D1] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-primary-500" />
                </Link>
                <Link 
                href={previewUrl} 
                className="h-14 w-14 border-2 relative rounded-full border-[#D1D1D1] hover:border-primary-500 group/link"
                >
                    <EyeIcon className="h-10 w-10 text-[#D1D1D1] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-primary-500" />
                </Link>
            </div>
        </div>
        <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
            <h5 className="font-xl font-semibold mb-2">{title}</h5>
            <p className="text=[#D1D1D1]">{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard