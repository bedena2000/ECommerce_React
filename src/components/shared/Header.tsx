import { Link } from "react-router";

// Animation
import { motion, AnimatePresence } from "framer-motion";

// Icons
import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";

// Store
import { useDispatch } from "react-redux";
import { changeSearchTerm } from "@/store/searchOptionReducer";

// Router
import { useNavigate } from "react-router";

export default function Header() {
  const [isSidemenuOpened, setSideMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleMenu = () => setSideMenu(!isSidemenuOpened);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      dispatch(changeSearchTerm(searchTerm));
      navigate("/products");
    }
  };

  const handleSearchClick = () => {
    dispatch(changeSearchTerm(searchTerm));
    navigate("/products");
  };

  return (
    <header className="pt-[40px] pb-[15px] border-b border-black/20">
      <div className="customContainer flex items-center justify-between">
        <div className="text-lg font-bold">Exclusive</div>
        <div className="hidden lg:flex items-center gap-[48px]">
          <Link
            className="text-sm font-normal transition-all ease-in delay-100 hover:pb-1 hover:border-b hover:border-black/40"
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-sm font-normal transition-all ease-in delay-100 hover:pb-1 hover:border-b hover:border-black/40"
            to="contact"
          >
            Contact
          </Link>
          <Link
            className="text-sm font-normal transition-all ease-in delay-100 hover:pb-1 hover:border-b hover:border-black/40"
            to="about"
          >
            About
          </Link>
          <Link
            className="text-sm font-normal transition-all ease-in delay-100 hover:pb-1 hover:border-b hover:border-black/40"
            to="sign_up"
          >
            Sign Up
          </Link>
        </div>
        <div className="hidden lg:flex items-center gap-2">
          <div
            className="flex items-center gap-2 bg-[#F5F5F5] px-[12px] py-[12px] rounded-md mr-[24px]"
            onKeyDown={handleSearch}
          >
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent outline-none text-[#7D8184]"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <IoSearchOutline
              onClick={handleSearchClick}
              size={24}
              className="cursor-pointer"
            />
          </div>
          <div className="flex items-center gap-[22px]">
            <Link to="/wishlist">
              <CiHeart size={24} className="cursor-pointer" />
            </Link>
            <Link to="/cart">
              <CiShoppingCart size={24} className="cursor-pointer" />
            </Link>
          </div>
        </div>
        <div onClick={handleMenu} className="lg:hidden">
          <HiMenu size={32} className="cursor-pointer" />
        </div>
      </div>
      {/* {isSidemenuOpened && (
        <div className="customContainer lg:hidden w-full">
          <div className="mt-4 border py-4 px-4">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-[48px]">
                <Link
                  className="text-sm font-normal transition-all ease-in delay-100 hover:pb-1 hover:border-b hover:border-black/40"
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className="text-sm font-normal transition-all ease-in delay-100 hover:pb-1 hover:border-b hover:border-black/40"
                  to="contact"
                >
                  Contact
                </Link>
                <Link
                  className="text-sm font-normal transition-all ease-in delay-100 hover:pb-1 hover:border-b hover:border-black/40"
                  to="about"
                >
                  About
                </Link>
                <Link
                  className="text-sm font-normal transition-all ease-in delay-100 hover:pb-1 hover:border-b hover:border-black/40"
                  to="sign_up"
                >
                  Sign Up
                </Link>
                <Link
                  className="text-sm font-normal transition-all ease-in delay-100 hover:pb-1 hover:border-b hover:border-black/40"
                  to="liked"
                >
                  Liked
                </Link>
                <Link
                  className="text-sm font-normal transition-all ease-in delay-100 hover:pb-1 hover:border-b hover:border-black/40"
                  to="cart"
                >
                  Cart
                </Link>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex items-center gap-2 bg-[#F5F5F5] px-[12px] py-[12px] rounded-md w-full justify-between">
                  <input
                    type="text"
                    placeholder="What are you looking for?"
                    className="bg-transparent outline-none text-[#7D8184]"
                  />
                  <IoSearchOutline size={24} className="cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )} */}
      {isSidemenuOpened && (
        <AnimatePresence>
          <motion.div
            className="customContainer lg:hidden w-full"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mt-4 border py-4 px-4">
              {/* Mobile menu content (same as before) */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-[48px]">
                  <div className="flex flex-wrap items-center gap-[48px]">
                    <Link
                      className="text-sm font-normal transition-all ease-in delay-100 hover:pb-1 hover:border-b hover:border-black/40"
                      to="/"
                    >
                      Home
                    </Link>
                    <Link
                      className="text-sm font-normal transition-all ease-in delay-100 hover:pb-1 hover:border-b hover:border-black/40"
                      to="contact"
                    >
                      Contact
                    </Link>
                    <Link
                      className="text-sm font-normal transition-all ease-in delay-100 hover:pb-1 hover:border-b hover:border-black/40"
                      to="about"
                    >
                      About
                    </Link>
                    <Link
                      className="text-sm font-normal transition-all ease-in delay-100 hover:pb-1 hover:border-b hover:border-black/40"
                      to="sign_up"
                    >
                      Sign Up
                    </Link>
                    <Link
                      className="text-sm font-normal transition-all ease-in delay-100 hover:pb-1 hover:border-b hover:border-black/40"
                      to="liked"
                    >
                      Liked
                    </Link>
                    <Link
                      className="text-sm font-normal transition-all ease-in delay-100 hover:pb-1 hover:border-b hover:border-black/40"
                      to="cart"
                    >
                      Cart
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap mt-5">
                  <div
                    className="flex items-center gap-2 bg-[#F5F5F5] px-[12px] py-[12px] rounded-md w-full justify-between"
                    onKeyDown={handleSearch}
                  >
                    <input
                      type="text"
                      placeholder="What are you looking for?"
                      className="bg-transparent outline-none text-[#7D8184] w-full"
                      value={searchTerm}
                      onChange={(event) => setSearchTerm(event.target.value)}
                    />
                    <IoSearchOutline
                      onClick={handleSearchClick}
                      size={24}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </header>
  );
}
