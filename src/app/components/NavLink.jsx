import Link from "next/link";

const NavLink = ({href, title}) => {
    return(
        <Link 
            href={href}
            as={href}
            className="block py-2 pl-3 pr-4 text-[#D1D1D1] sm:text-xl rounded md:p-0 hover:text-white duration-300"
        >
            {title}
        </Link>
    );
};

export default NavLink;