import React from 'react';
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Image from 'next/image';
import Link from 'next/link';

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-10 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
        <div className="z-10">
            <h5 className="text-xl font-bold text-white my-2">Let's Connect!</h5>
            <p className="text-[#D1D1D1] mb-4 max-w-md">
                {" "}
                Please download my resume at the top of this page.
                I am currently looking for new opportunities, feel free to drop by in my inbox anytime.
                Whether you have any questions or just want to say hi, I'll get back to you as soon as I can!
            </p>
            <div className="socials flex flex-row gap-2">
                <Link href={"https://github.com/Kshitij0169"} className="cursor-pointer transition-all 
                bg-transparent text-white px-6 py-2 rounded-lg
                border-purple-400
                border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-purple-500 shadow-purple-300 active:shadow-none">
                    <Image src={GithubIcon} alt="Github Icon"/>
                </Link>
                <Link href={"https://www.linkedin.com/in/-kshitij-tiwari-0101/"} className="cursor-pointer transition-all 
                bg-transparent text-white px-6 py-2 rounded-lg
                border-blue-400
                border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-blue-500 shadow-blue-300 active:shadow-none">
                    <Image src={LinkedinIcon} alt="LinkedIn Icon"/>
                </Link>
            </div>
        </div>
        <div>
            <form className="flex flex-col">
                <div className="mb-6">
                    <label htmlFor="email" className="text-white block mb-2 text-sm font-medium ">
                        Your Email
                    </label>
                    <input
                    type="email" id="email"
                    required
                    className="bg-[#18191E] border border-[#66188a] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg w-full p-2.5"
                    placeholder="sample@something.com" />
                </div>
                <div className="mb-6">
                    <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium ">
                        Subject
                    </label>
                    <input
                    type="text" id="subject"
                    className="bg-[#18191E] border border-[#66188a] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg w-full p-2.5"
                    placeholder="What's on your mind?" />
                </div>
                <div className="mb-6">
                    <label htmlFor="message"  className="text-white block mb-2 text-sm font-medium ">
                        Messsage
                    </label>
                    <textarea 
                        name="message"
                        id="message"
                        className="bg-[#18191E] border border-[#66188a] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg w-full p-2.5"
                        placeholder="Hi, I'd like to talk about..."
                    />
                </div>
                <div className="text-center">
                    <button
                    type="submit"
                    className="cursor-pointer text-center w-full items-center rounded-full px-9 py-3 text-lg font-medium text-[#b35ddb] hover:text-white border-2 border-[#b35ddb]
                    hover:bg-[#b35ddb] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75 duration-300 focus:bg-transparent">
                        Send Message
                    </button>
                </div>
            </form>
        </div>
        
    </section>
  )
} 

export default EmailSection