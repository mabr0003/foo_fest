import Image from "next/image";
import RootLayout from "./layout";
import "./globals.css";
import "./footer.css";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative grid grid-cols-1 grid-rows-1 h-screen">
      <div className="absolute inset-0 bg-black/20 z-10"></div>

      <img src="/img1.png" alt="hero_img" className="absolute inset-0 w-full h-full object-cover" />

      <img src="/img2.png" alt="logo" className="absolute top-4 left-4 w-36 h-36 z-20" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 text-white">
        <h1 className="text-5xl font-bold">Asgaards drømme</h1>
        <p className="text-lg mt-4">En uforglemmelig oplevelse fyldt med musik, fællesskab og magiske øjeblikke!</p>
      </div>
      <div className="absolute bottom-0 w-full flex justify-between items-center px-10 py-4 z-20">
        <a href="#forside" className="text-white font-bold text-lg hover:text-gray-300">
          FORSIDE
        </a>
        <a href="/biletter" className="text-white font-bold text-lg hover:text-gray-300">
          BILLETTER
        </a>
        <a href="#om-os" className="text-white font-bold text-lg hover:text-gray-300">
          OM OS
        </a>
      </div>
      <Footer></Footer>
    </div>
  );
}
