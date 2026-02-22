// "use client";

// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const HERO_IMAGES = [
//   "/images/logo.png",
//   "/images/farm2.png",
//   "/images/farm3.jpg",
//   "/images/farm4.webp",
//   "/images/farm5.webp",
// ];

// export default function HeroSlideshow() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
//     }, 3500);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-emerald-100 hover:-translate-y-1 hover:shadow-2xl">
//       <AnimatePresence mode="wait">
//         <motion.img
//           key={index}
//           src={HERO_IMAGES[index]}
//           alt="Farm technology slideshow"
//           initial={{ opacity: 0, scale: 1.05 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.95 }}
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//           className="w-full h-auto object-cover"
//         />
//       </AnimatePresence>
//     </div>
//   );
// }
