import React from "react";
import { Link } from "react-router-dom";

const Newsletters = () => {
  return (
    <div className="bg-[#1e2832] bg-opacity-5 xl:px-28 px-4 py-16">
      <h2 className="title mb-8">Follow products and discounts on Instagram</h2>

      {/* Insta grid */}

      <div className="grid grid-cols-6 gap-4 items-center justify-center mb-20 max-w-full">
        <Link to="/">
          <img src="/image/instagram/img1.png" alt="" />
        </Link>
        <Link to="/">
          <img src="/image/instagram/img2.png" alt="" />
        </Link>
        <Link to="/">
          <img src="/image/instagram/img3.png" alt="" />
        </Link>
        <Link to="/">
          <img src="/image/instagram/img4.png" alt="" />
        </Link>
        <Link to="/">
          <img src="/image/instagram/img5.png" alt="" />
        </Link>
        <Link to="/">
          <img src="/image/instagram/img6.png" alt="" />
        </Link>
      </div>

      {/* news letters */}

      <div>
        <h2 className="title mb-8">Or subscribe to the Newsletters</h2>
        <form className="md:w-1/2 mx-auto text-center">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address..."
            className="h-8 bg-transparent outline-none border-b-2 pl-2 border-black md:w-2/3 w-full mb-5 placeholder:text-black/50 mr-4"
          />

          <input type="submit" value={"Submit"} className="bg-black text-white px-6 py-1 rounded-sm" />
        </form>
      </div>
    </div>
  );
};

export default Newsletters;
