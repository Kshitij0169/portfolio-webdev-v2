import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="text-center items-center footer z-10 border-2 border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent">
            <div className="flex items-center justify-center">
                <Link href={"/"}>
                        <Image
                            src="/images/logo.png"
                            alt="logo image"
                            height={70}
                            width={70}
                        />
                </Link>
            </div>
            <div>
                <p className="text-slate-700">All rights reserved.</p>
            </div>
    </footer>
  )
}

export default Footer