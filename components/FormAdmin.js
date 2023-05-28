import Link from "next/link";
import React from "react";

export default function FormAdmin() {
  return (
    <div className="container mx-auto">
      <p className="text-center mt-5 font-bold text-2xl text-gray-800">LOGIN ADMIN</p>

      <form
        action="/send-data-here"
        method="post"
        className="flex flex-col gap-3 items-center bg-slate-100 shadow-xl rounded-3xl w-64 lg:w-1/3 mx-auto py-8 mt-10 font-medium text-base lg:text-xl"
      >
        <label for="first">User Name:</label>
        <input type="text" id="first" name="first" placeholder="Masukan Username" className="px-2 border-2 rounded-md" />
        <label for="last">Password:</label>
        <input type="password" id="last" name="last" className="px-2 border-2 rounded-md"/>
        <Link href='/Detaillogin'>
        <button type="submit"  className="px-5 py-3 bg-green-600 rounded-xl text-white my-3">
          Submit
        </button>
        </Link>
      </form>
    </div>
  );
}
