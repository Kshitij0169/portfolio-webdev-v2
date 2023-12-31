"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { Resend } from "resend";

const EmailSection = () => {
  // const [emailSubmitted, setEmailSubmitted] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const data = {
  //     email: e.target.email.value,
  //     subject: e.target.subject.value,
  //     message: e.target.message.value,
  //   };
  //   const JSONdata = JSON.stringify(data);
  //   const endpoint = "/api/send";

  //   // Form the request for sending data to the server.
  //   const options = {
  //     // The method is POST because we are sending data.
  //     method: "POST",
  //     // Tell the server we're sending JSON.
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     // Body of the request is the JSON data we created above.
  //     body: JSONdata,
  //   };

  //   const response = await fetch(endpoint, options);
  //   const resData = await response.json();

  //   if (response.status === 200) {
  //     console.log("Message sent.");
  //     setEmailSubmitted(true);
  //   }
  // };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h2 className="text-xl font-bold text-white my-2">Let us Connect!</h2>
        <p className="text-[#D1D1D1] mb-4 max-w-md">
          {" "}
          Please download my resume at the top of this page. I am currently
          looking for new opportunities, feel free to drop by in my inbox
          anytime. Whether you have any questions or just want to say hi, I will
          get back to you as soon as I can!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link
            href={"https://github.com/Kshitij0169"}
            className="cursor-pointer transition-all 
                bg-transparent text-white px-6 py-2 rounded-lg
                border-primary-400
                border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-primary-500 shadow-primary-300 active:shadow-none"
          >
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/-kshitij-tiwari-0101/"}
            className="cursor-pointer transition-all 
                bg-transparent text-white px-6 py-2 rounded-lg
                border-blue-400
                border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-blue-500 shadow-blue-300 active:shadow-none"
          >
            <Image src={LinkedinIcon} alt="LinkedIn Icon" />
          </Link>
        </div>
      </div>

      <div>
        <form
          className="flex flex-col"
          action="https://formsubmit.co/tiwari.ks@northeastern.edu"
          method="POST"
        >
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium "
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              //  value={email}
              //  onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-[#18191E] border border-[#66188a] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg w-full p-2.5"
              placeholder="sample@something.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium "
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              // value={subject}
              // onChange={(e) => setSubject(e.target.value)}
              className="bg-[#18191E] border border-[#66188a] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg w-full p-2.5"
              placeholder="What's on your mind?"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium "
            >
              Messsage
            </label>
            <textarea
              name="message"
              id="message"
              // value={message}
              // onChange={(e) => setMessage(e.target.value)}
              className="bg-[#18191E] border border-[#66188a] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg w-full p-2.5"
              placeholder="Hi, I'd like to talk about..."
            />
          </div>
          <input
            type="hidden"
            name="_autoresponse"
            value="Thanks alot for getting in touch! I will get back to you as soon as I can."
          ></input>
          <div className="text-center">
            <button
              type="submit"
              className="cursor-pointer text-center w-full items-center rounded-full px-9 py-3 text-lg font-medium text-[#b35ddb] hover:text-white border-2 border-[#b35ddb]
                    hover:bg-[#b35ddb] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75 duration-300 focus:bg-transparent"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
