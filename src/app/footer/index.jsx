"use client";
import React, { useState } from "react";

import InstagramIcon from "../../../public/images/instagram.svg";
import LinkedinIcon from "../../../public/images/linkedin.svg";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        console.log("Text copied to clipboard");
      },
      (err) => {
        console.error("Failed to copy text: ", err);
      }
    );
  };

  return (
    <footer className="footer font-urbanist border-t mx-auto border-secondary z-10 border-l-transparent border-r-transparent text-black bg-background">
      <div className="p-8 flex justify-between ">
        <div>
          <span className="font-semibold text-primary text-xl md:text-3xl">
            Me contacter
          </span>
          <div className="text-base py-1">
            <p>Sandrine Thibierge</p>
            <p
              className="underline cursor-pointer text-blue-500 hover:text-primary"
              onClick={() => handleCopy("st.grapho@gmail.com")}
            >
              st.grapho@gmail.com
            </p>
            <p>06 09 99 22 88 </p>
            {copied && (
              <p className="text-green-500 mt-2">
                Email copié dans le presse papier !
              </p>
            )}
          </div>
        </div>
        <div className="socials flex flex-row gap-2">
          <Link href="https://www.linkedin.com/in/sara-thibierge-6092471bb/">
            <Image
              src={InstagramIcon}
              alt="Linkedin Icon"
              width={50}
              height={50}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/sandrine-thibierge-75112a27/">
            <Image
              src={LinkedinIcon}
              alt="Linkedin Icon"
              width={50}
              height={50}
            />
          </Link>
        </div>
      </div>
      <p className="text-slate-600  text-center">Tous droits réservés.</p>
    </footer>
  );
}
