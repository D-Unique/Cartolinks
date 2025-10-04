import { PreFooterCardProps } from "@/types/LandingPage";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const PreFooterCard = ({ imageurl, text, cta }: PreFooterCardProps) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-[23.8rem] hover:shadow-lg transition">
      {/* Image */}
      <Image
        src={imageurl}
        alt={text}
        width={380}
        height={220}
        className="w-full h-auto rounded-md"
      />

      {/* Text + CTA */}
      <div className="flex flex-col mt-4 space-y-4">
        <p className="text-gray-800 text-base xl:text-lg">{text}</p>

        {cta?.text && (
          <a
            href={cta.link || "#"}
            className="flex items-center gap-2 text-primary font-bold hover:text-blue-700 transition"
          >
            {cta.text}
            <ArrowRight size={18} />
          </a>
        )}
      </div>
    </div>
  );
};

export default PreFooterCard;
