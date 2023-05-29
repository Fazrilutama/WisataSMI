import Link from "next/link";
import React from "react";

export default function Submit() {
  return (
    <div className="container mx-auto">
      <table className="w-full text-center">
        <tr className="bg-slate-100">
          <th>No</th>
          <th>Nama</th>
          <th>Foto</th>
          <th>Alamat</th>
          <th>Map</th>
          <th>Aksi</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Situ Gunung</td>
          <td>
            <img src="/Images/Submit/5.jpg" className="w-28" />
          </td>
          <td>Sukamanis, Kec. Kadudampit, Kabupaten Sukabumi, Jawa Barat</td>
          <td>
            <Link
              className="text-blue-600 "
              href="https://goo.gl/maps/r5XP6e2KJpdkjbML8"
            >
              Link Maps Situ Gugung
            </Link>
          </td>

          <td>
            <button className="px-3 py-2 bg-yellow-400 mr-3">Edit</button>
            <button className="px-3 py-2 bg-red-500">Hapus</button>
          </td>
        </tr>
        
      </table>
    </div>
  );
}
