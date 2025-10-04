import { TimelineCardProps } from "@/types/LandingPage";
import Image from "next/image";

const TimelineCard = ({ date, title, description, imageUrl, cta }: TimelineCardProps) => {
  return (
    <div className="flex flex-col gap-3 p-6 bg-white rounded-lg shadow-md max-w-[20rem] w-full h-full xl:max-w-[80rem] ">
      {/* Year */}
      {date && (
        <span className="text-blue-800 font-bold text-[25px]">
          {date}
        </span>
      )}

      {/* Title */}
      {title && (
        <h3 className="text-[#F59E0B] text-sm font-semibold uppercase">
          {title}
        </h3>
      )}

      {/* Description */}
      {description && (
        <p className="mobile-body text-gray-700 text-[20px] font-bold leading-relaxed xl:body">
          {description}
        </p>
      )}

      {/* Image */}
      {imageUrl && (
        <div className="my-3">
          <Image
            src={imageUrl}
            alt={title || "timeline image"}
            width={320}
            height={180}
            className="rounded-md shadow-sm"
          />
        </div>
      )}

      {/* CTA */}
      {cta && (
        <a
          href={cta.link}
          className="text-blue-600 font-semibold text-sm hover:underline flex items-center gap-1"
        >
          {cta.text} <span>›</span>
        </a>
      )}
    </div>
  );
};

export default TimelineCard;
