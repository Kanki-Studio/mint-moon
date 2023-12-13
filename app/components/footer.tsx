import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import {
  FaTwitter,
  FaYoutube,
  FaFacebook,
  FaTelegram,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col bg-primary space-y-12 py-10 px-5 md:px-12 md:py-1">
      <section className="w-full flex flex-col space-y-4  md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-center">
          <Image src="/logo.png" alt="logo" width={38} height={38} />
          <p className="text-white font-bold">MINTMOON</p>
        </div>

        <div className="flex justify-center space-x-5">
          <Link
            href=""
            className="p-2 text-xl text-white flex items-center justify-center rounded-full bg-gray-400 bg-opacity-50 transition hover:text-btnPrimary"
          >
            <FaFacebook />
          </Link>
          <Link
            href=""
            className="p-2 text-xl text-white flex items-center justify-center rounded-full bg-gray-400 bg-opacity-50 transition hover:text-btnPrimary"
          >
            <FaInstagram />
          </Link>
          <Link
            href=""
            className="p-2 text-xl text-white flex items-center justify-center rounded-full bg-gray-400 bg-opacity-50 transition hover:text-btnPrimary"
          >
            <FaTelegram />
          </Link>
          <Link
            href=""
            className="p-2 text-xl text-white flex items-center justify-center rounded-full bg-gray-400 bg-opacity-50 transition hover:text-btnPrimary"
          >
            <FaTwitter />
          </Link>
          <Link
            href=""
            className="p-2 text-xl text-white flex items-center justify-center rounded-full bg-gray-400 bg-opacity-50 transition hover:text-btnPrimary"
          >
            <FaYoutube />
          </Link>
          <Link
            href=""
            className="p-2 text-xl text-white flex items-center justify-center rounded-full bg-gray-400 bg-opacity-50 transition hover:text-btnPrimary"
          >
            <FaWhatsapp />
          </Link>
        </div>
      </section>

      <section className="w-full flex flex-col space-y-4 md:flex-row md:space-y-0 md:items-center md:justify-between">
        <aside className="md:w-[25%]">
          <h5 className="text-sm text-white py-5 font-bold border-b-2">MENU</h5>
          <div className="flex justify-between py-5">
            <p className="flex flex-col space-y-5">
              <Link
                href=""
                className="text-xs text-gray-400 font-semibold transition hover:text-btnPrimary"
              >
                ABOUT
              </Link>
              <Link
                href=""
                className="text-xs text-gray-400 font-semibold transition hover:text-btnPrimary"
              >
                HOME
              </Link>
              <Link
                href=""
                className="text-xs text-gray-400 font-semibold transition hover:text-btnPrimary"
              >
                PRICING
              </Link>
              <Link
                href=""
                className="text-xs text-gray-400 font-semibold transition hover:text-btnPrimary"
              >
                SETTINGS
              </Link>
              <Link
                href=""
                className="text-xs text-gray-400 font-semibold transition hover:text-btnPrimary"
              >
                CONTACTS
              </Link>
            </p>
            <p className="flex flex-col space-y-5">
              <Link
                href=""
                className="text-xs text-gray-400 font-semibold transition hover:text-btnPrimary"
              >
                BIDS
              </Link>
              <Link
                href=""
                className="text-xs text-gray-400 font-semibold transition hover:text-btnPrimary"
              >
                START HERE
              </Link>
              <Link
                href=""
                className="text-xs text-gray-400 font-semibold transition hover:text-btnPrimary"
              >
                STYLE GUIDE
              </Link>
              <Link
                href=""
                className="text-xs text-gray-400 font-semibold transition hover:text-btnPrimary"
              >
                LICENSES
              </Link>
            </p>
          </div>
        </aside>

        <aside>
          <h5 className="text-sm text-white py-5 font-bold border-b-2">
            UTILITY PAGES
          </h5>
          <div className="flex py-5">
            <p className="flex flex-col space-y-5">
              <Link
                href=""
                className="text-xs text-gray-400 font-semibold transition hover:text-btnPrimary"
              >
                BLOG
              </Link>
              <Link
                href=""
                className="text-xs text-gray-400 font-semibold transition hover:text-btnPrimary"
              >
                BLOG POST
              </Link>
              <Link
                href=""
                className="text-xs text-gray-400 font-semibold transition hover:text-btnPrimary"
              >
                TOKENS
              </Link>
              <Link
                href=""
                className="text-xs text-gray-400 font-semibold transition hover:text-btnPrimary"
              >
                TOKEN SINGLE
              </Link>
              <Link
                href=""
                className="text-xs text-gray-400 font-semibold transition hover:text-btnPrimary"
              >
                NIFT COLLECTIONS
              </Link>
            </p>
          </div>
        </aside>

        <div className="p-5 flex flex-col space-y-5 rounded-3xl bg-gray-400 bg-opacity-30 md:h-fit">
          <h5 className="text-sm font-bold text-white">
            DOWNLOAD OUR APPLICATION
          </h5>

          <p className="text-xs text-gray-400 md:w-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit error
            perspiciatis placeat voluptatibus a
          </p>

          <div className="space-x-5">
            <button className="py-2 px-5 font-bold bg-btnPrimary rounded-full text-sm text-white">
              APP STORE
            </button>
            <button className="py-2 px-5 font-bold bg-btnPrimary rounded-full text-sm text-white">
              PLAY STORE
            </button>
          </div>
        </div>
      </section>
      <section className="w-full border-t py-5">
        <p className="w-full text-center text-xs text-gray-400">
          COPYRIGHT 2023 @ MINTMOON | DESIGNED BY{" "}
          <Link href="" className="text-btnPrimary">
            KANKI STUDIO
          </Link>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
