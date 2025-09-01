import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-[#222222]">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start max-w-7xl mx-auto px-10 py-10 text-white gap-y-10">
          <div>
            <h2 className="text-[#55554D] uppercase font-semibold text-center">
              Contactgegevens
            </h2>
            <div className="space-y-2 mt-5">
              <div className="flex items-start gap-2 font-extralight text-sm">
                <IoLocation color="#E63B72" className="mt-1" />
                <div>
                  <span className="font-bold">Locatie:</span> School
                  Lyndensteyn, Helomareed, Beetsterzwaag
                </div>
              </div>
              <div className="flex items-start gap-2 font-extralight text-sm">
                <FaPhoneAlt color="#E63B72" className="mt-1" />
                <Link href="tel:0641025079">
                  <span className="font-bold">Telefoon:</span> 06-41025079
                </Link>
              </div>
              <div className="flex items-start gap-2 font-extralight text-sm">
                <IoMail color="#E63B72" className="mt-1" />
                <Link href="mailto:zwemschoolwaterjuffer@gmail.com">
                  <span className="font-bold">E-mail:</span>{" "}
                  zwemschoolwaterjuffer@gmail.com
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-[#55554D] uppercase font-semibold  text-center">
              Volg ons!
            </h2>
            <div className="flex gap-x-5 mt-5">
              <Link
                href="https://www.facebook.com/zwemschooldewaterjuffer/"
                target="_blank"
                className="bg-[#3C5999] p-2 rounded-md inline-flex"
              >
                <IoLogoFacebook color="white" size={50} />
              </Link>
              <Link
                href="https://www.instagram.com/waterjuffertje/"
                target="_blank"
                className="bg-[#E54060] p-2 rounded-md inline-flex"
              >
                <FaInstagram size={50} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#333333]">
        <p className="max-w-7xl mx-auto px-10 text-white py-5 text-[10px]">
          © Copyright - Zwemschool de Waterjuffer
        </p>
      </div>
    </footer>
  );
}
