import { FooterLinkGroup } from "@/types/LandingPage";
import { MapPin, Mail, Phone } from "lucide-react";


export const footerLinksQuick: FooterLinkGroup = {
  heading: "Quick Links",
  links: [
    { text: "Programs", link: "/programs" },
    { text: "Blog", link: "/blog" },
    { text: "Thursday Tribune", link: "/thursday-tribune" },
    { text: "IMCE Sessions", link: "/imce-session" },
  ],
};

export const footerLinksSupport: FooterLinkGroup = {
  heading: "Support",
  links: [
    { text: "Donate", link: "/donate" },
    { text: "Volunteer", link: "/volunteer" },
    { text: "Book Campaign", link: "/book-campaign" },
    { text: "Unashamed Pledge", link: "/unashamed-pledge" },
  ],
};

export const footerLinksContact: FooterLinkGroup = {
  heading: "Contact Us",
  links: [
    { icon: MapPin, text: "No 4, Awosika Street, Old Bodija, Ibadan." },
    { icon: Mail, text: "asidofoundation@gmail.com" },
    { icon: Phone, text: "+234 818 077 7458" },
    { icon: Phone, text: "+234 902 808 0416" },
  ],
};
