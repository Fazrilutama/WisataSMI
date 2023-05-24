import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="container mx-auto">
      <div className="font-semibold text-lg py-2 md:text-lg bg-blue-500 text-white flex justify-between px-5 md:px-10 ">
      <div>
          <Link href="/" className="text-xl">
            Brand
          </Link>
        </div>
        <div>

        <Link href="/" className="pr-5 md:pr-14">
          Home
        </Link>
        <Link href="/Login">Login</Link>
        </div>
        
      </div>
    </div>
  );
}
