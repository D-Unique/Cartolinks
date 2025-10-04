
import { Search, PlayCircle, Car } from "lucide-react";
import Navbar from "@/components/layouts/Navbar";
import Hero from "@/components/layouts/Hero";
import Timeline from "@/components/layouts/Timeline";
import Prefooter from "@/components/layouts/Prefooter";
import Footer from "@/components/layouts/Footer";



//   <section id="gallery" className="px-6 py-12 bg-gray-50" aria-label="Gallery">
//     <h3 className="text-2xl font-bold mb-6">Gallery</h3>
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//       {Array.from({ length: 8 }).map((_, idx) => (
//         <motion.img
//           key={idx}
//           src={`/gallery/${idx+1}.jpg`}
//           alt={`Gallery item ${idx+1}`}
//           className="rounded-lg object-cover h-40 w-full"
//           initial={{opacity:0}}
//           animate={{opacity:1}}
//           transition={{delay:idx*0.1}}
//         />
//       ))}
//     </div>
//   </section>
// );

/**
 * Main Page Component
 */
export default function Page() {
  return (
    <main className="w-full flex flex-col bg-white">
      <Navbar />
      <Hero />
      <Timeline />
      <Prefooter />
      <Footer />
     
    
    </main>
  );
}
