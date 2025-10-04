import { PreFooterCardProps } from "@/types/LandingPage";


const PreFooterCard = ({ imageurl, text, cta }: PreFooterCardProps) => {
  return (
      <div className="bg-white p-6 rounded-lg shadow-md">
           <img src={imageurl} alt={text} className="w-full h-auto rounded-md" />

      <p className="text-gray-600 mb-4">
       {text}
      </p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
        {cta.text}
      </button>
    </div>
  );
};
export default PreFooterCard;
