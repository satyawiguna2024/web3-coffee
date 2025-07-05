import { FaTwitter, FaGithub, FaHeart, FaInstagram, FaTelegram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-white py-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Kiri */}
        <div className="text-center md:text-left">
          <h2 className="text-lg sm:text-xl font-semibold font-roboto tracking-wide">
            Buy Me a Coffee ☕
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Support creators in the Web3 space with a cup of crypto coffee.
          </p>
        </div>

        {/* Tengah - Icons */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://t.me/IMadeSatyaWiguna"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaTelegram />
          </a>
          <a
            href="https://github.com/satyawiguna2024"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com/satya375__"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Kanan */}
        <div className="text-center md:text-right text-sm text-slate-400">
          &copy; {new Date().getFullYear()} Built with <FaHeart className="inline text-red-500" /> on Web3
        </div>
      </div>
    </footer>
  );
}
