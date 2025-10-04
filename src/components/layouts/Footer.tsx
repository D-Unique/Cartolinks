import Image from "next/image";
import {
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react";
import { FooterLinkGroup } from "@/types/LandingPage";
import {
  footerLinksContact,
  footerLinksQuick,
  footerLinksSupport,
} from "@/data/footerLinks";

const renderFooterLinkGroup = (group: FooterLinkGroup) => (
  <div className="flex flex-col items-center  text-center mx-auto md:text-left md:w-[8.8rem]">
    <h4 className="font-semibold mb-3 text-white xl:items-start">{group.heading}</h4>
    <ul className="space-y-2 text-sm text-white/90">
      {group.links.map(({ text, link, icon: Icon }, i) => (
        <li key={i} className="flex items-start gap-2">
          {Icon && <Icon size={16} className="mt-1 text-white" />}
          {link ? (
            <a href={link} className="hover:underline">
              {text}
            </a>
          ) : (
            <span>{text}</span>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-10 pb-6 px-6">
      {/* Top Section */}
      <div className="max-w-[19.9rem ] h-[36rem] mx-auto flex flex-col items-center xl:items-center xl-mx-auto xl:flex-row  xl:justify-around xl:gap-20 xl:h-[31rem]  ">
        {/* Logo + tagline */}
        <div className="flex flex-col items-center md:items-center text-center md:text-center md:justify-center ">
          <Image
            src="/images/81.svg"
            alt="Asido Foundation Logo"
            width={130}
            height={60}
          />
          <p className="mt-3 text-sm max-w-xs w-[19.5rem]">
            Making mental health support accessible through advocacy and action.
          </p>
        </div>

        {/* Middle Section (Quick Links + Support side by side on mobile) */}
        <div className="grid grid-cols-2 h-[20rem] md:grid-cols-4 gap-10 md:gap-16 mt-10 w-full text-center md:text-left xl:w-[52.6rem] xl:h-[12.8rem]">
          {/* On desktop, these all show as 4 columns */}
          {/* On mobile, first two columns side-by-side, last (Contact Us) full width below */}
          {renderFooterLinkGroup(footerLinksQuick)}
          {renderFooterLinkGroup(footerLinksSupport)}
          <div className="col-span-2 md:col-span-1">
            {renderFooterLinkGroup(footerLinksContact)}
          </div>
        </div>

      </div>
        {/* Social Icons */}
        <div className="flex gap-4 mt-8 justify-center md:justify-start md:ml-20 xl:mb-20">
          <a href="#" aria-label="Twitter">
            <Twitter size={18} />
          </a>
          <a href="#" aria-label="Facebook">
            <Facebook size={18} />
          </a>
          <a href="#" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="#" aria-label="Instagram">
            <Instagram size={18} />
          </a>
        </div>

      {/* Divider */}
      <hr className="border-white/30 my-6 w-11/12 mx-auto" />

      {/* Bottom Section */}
      <div className="flex flex-col items-start ml-20 text-[16px] text-white/80 font-medium">
        <p>© 2025 Asido Foundation. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
