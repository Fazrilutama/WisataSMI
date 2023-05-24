import Link from "next/link";
import React from "react";

export default function Informasi() {
  return (
    <div className="container mx-auto">
      <p className="font-bold text-2xl text-center pt-5 md:mt-0">
        Destinasi Wisata Di Sukabumi
      </p>
      <div className=" md:flex md:flex-wrap md:gap-7 xl:gap-14 md:justify-center ">
        <div className=" m-5 rounded-xl shadow-xl mb-10 md:w-72 md:mb-0 px-5 py-5">
          <img
            src="/Images/Informasi/Situgunung.png"
            className="mx-auto rounded-md"
          />

          <p className="md:text-center font-bold text-xl pt-3">Situ Gunung</p>
          <p className=" text-slate-800">
            situ gunung lorem dfbdjfb jfdjfnbjsd bdjb jbjbhjbbbbbbbbbbbbbbbbbb
            bb sdsdsadasj jbjbdjaj b
          </p>


          <Link href="/SituGunung">
          <button className="bg-red-500 p-3 rounded-2xl text-sm font-semibold text-white mt-3">
            Lihat Selengkapnya
          </button>
          </Link>
          
        </div>
        <div className=" m-5 rounded-xl shadow-xl mb-10 md:w-72 md:mb-0 px-5 py-5">
          <img
            src="/Images/Informasi/Situgunung.png"
            className="mx-auto rounded-md"
          />

          <p className="md:text-center font-bold text-xl pt-3">Situ Gunung</p>
          <p className=" text-slate-800">
            situ gunung lorem dfbdjfb jfdjfnbjsd bdjb jbjbhjbbbbbbbbbbbbbbbbbb
            bb sdsdsadasj jbjbdjaj b
          </p>
          <button className="bg-red-500 p-3 rounded-2xl text-sm font-semibold text-white mt-3">
            Lihat Selengkapnya
          </button>
        </div>
        <div className=" m-5 rounded-xl shadow-xl mb-10 md:w-72 md:mb-0 px-5 py-5">
          <img
            src="/Images/Informasi/Situgunung.png"
            className="mx-auto rounded-md"
          />

          <p className="md:text-center font-bold text-xl pt-3">Situ Gunung</p>
          <p className=" text-slate-800">
            situ gunung lorem dfbdjfb jfdjfnbjsd bdjb jbjbhjbbbbbbbbbbbbbbbbbb
            bb sdsdsadasj jbjbdjaj b
          </p>
          <button className="bg-red-500 p-3 rounded-2xl text-sm font-semibold text-white mt-3">
            Lihat Selengkapnya
          </button>
        </div>
        <div className=" m-5 rounded-xl shadow-xl mb-10 md:w-72 md:mb-0 px-5 py-5">
          <img
            src="/Images/Informasi/Situgunung.png"
            className="mx-auto rounded-md"
          />

          <p className="md:text-center font-bold text-xl pt-3">Situ Gunung</p>
          <p className=" text-slate-800">
            situ gunung lorem dfbdjfb jfdjfnbjsd bdjb jbjbhjbbbbbbbbbbbbbbbbbb
            bb sdsdsadasj jbjbdjaj b
          </p>
          <button className="bg-red-500 p-3 rounded-2xl text-sm font-semibold text-white mt-3">
            Lihat Selengkapnya
          </button>
        </div>
        <div className=" m-5 rounded-xl shadow-xl mb-10 md:w-72 md:mb-0 px-5 py-5">
          <img
            src="/Images/Informasi/Situgunung.png"
            className="mx-auto rounded-md"
          />

          <p className="md:text-center font-bold text-xl pt-3">Situ Gunung</p>
          <p className=" text-slate-800">
            situ gunung lorem dfbdjfb jfdjfnbjsd bdjb jbjbhjbbbbbbbbbbbbbbbbbb
            bb sdsdsadasj jbjbdjaj b
          </p>
          <button className="bg-red-500 p-3 rounded-2xl text-sm font-semibold text-white mt-3">
            Lihat Selengkapnya
          </button>
        </div>
      </div>
    </div>
  );
}
