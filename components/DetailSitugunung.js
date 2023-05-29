import React from "react";
import Hargamasuk from "./Hargamasuk";
import Fasilitas from "./Fasilitas";
import Dayatarik from "./Dayatarik";
import Maps from "./Maps";

export default function DetailSitugunung() {
  return (
    <div className="container mx-auto">
      <div>
        <div>
          <img src="/Images/Detailsitgun/2.jpeg" className="w-full" />
        </div>
        <p className="px-5 font-bold text-xl lg:text-3xl py-5">
          Situ Gunung, Satu Tempat, Berjuta Pesona Di Sukabumi
        </p>
        <div className="px-5 text-base tracking-normal">
          <p>
            Situ Gunung merupakan tempat wisata di Sukabumi yang menyimpan
            berjuta pesona, berjuta keindahan, yang diterjemahkan ke dalam
            beberapa spot wisata yang sangat populer.
          </p>
          <p className="py-3">
            Bahkan, salah-satu spotnya yaitu Situ Gunung Suspension Bridge,
            adalah Jembatan Situ Gunung yang memiliki status sebagai jembatan
            gantung di tengah hutan terpanjang di Asia Tenggara.
          </p>
          <p>
            Berjuta pesona di Situ Gunung dikarenakan lokasinya terletak di
            Taman Wisata Alam Situ Gunung Sukabumi, sebagai bagian yang tak
            terpisahkan dari Taman Nasional Gunung Pangrango.
          </p>
        </div>
        <Fasilitas/>
        <Hargamasuk/>
        <Dayatarik/>
        <Maps/>
      </div>
    </div>
  );
}
