import { TimelineCardProps } from "@/types/LandingPage";
import Image from "next/image";

// ✅ Add colorClass as an optional prop
interface ExtendedTimelineCardProps extends TimelineCardProps {
  colorClass?: string;
}

const TimelineCard = ({
  date,
  title,
  description,
  imageUrl,
  cta,
  colorClass = "text-gray-700", // fallback color
}: ExtendedTimelineCardProps) => {
  return (
    <div className="flex flex-col gap-3 p-6 rounded-lg shadow-md max-w-[20rem] w-full h-full xl:max-w-[80rem]">
      {/* Year */}
      {date && (
        <span className="text-blue-800 font-extrabold text-[39px]">
                  {date}
        </span>
      )}

      {/* Title */}
      {title && (
        <h3 className={`text-[24px] font-semibold uppercase ${colorClass}`}>
          {title}
        </h3>
      )}

      {/* Description */}
      {description && (
        <p
          className="mobile-body text-[25px] text-secondary font-bold leading-relaxed xl:body"
        >
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
          className="text-primary font-bold text-[16px] hover:underline flex items-center gap-1"
        >
          {cta.text} <span>›</span>
        </a>
      )}
    </div>
  );
};

export default TimelineCard;
