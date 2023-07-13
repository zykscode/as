'use client';

// Photos from https://citizenofnowhe.re
// import "./styles.css";
import { motion } from 'framer-motion';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { useState } from 'react';

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

export function ImageGradient({ src }: { src: StaticImageData }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  return (
    <section className="scroll-snap-align-center perspective-500 relative flex items-center justify-center ">
      <motion.div
        initial={false}
        animate={
          isLoaded && isInView
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        onViewportEnter={() => setIsInView(true)}
      >
        <Image src={src} alt="" onLoad={() => setIsLoaded(true)} />
      </motion.div>
    </section>
  );
}

// import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';
// import { useInView } from 'react-intersection-observer';

// const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
// const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

// export function ImageGradient({ src }) {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [ref, isInView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   useEffect(() => {
//     if (isLoaded && isInView) {
//       ref.current.style.WebkitMaskImage = visibleMask;
//       ref.current.style.maskImage = visibleMask;
//     } else {
//       ref.current.style.WebkitMaskImage = hiddenMask;
//       ref.current.style.maskImage = hiddenMask;
//     }
//   }, [isLoaded, isInView, ref]);

//   return (
//     <section className="scroll-snap-align-center perspective-500 relative flex h-screen items-center justify-center">
//       <motion.div ref={ref} transition={{ duration: 1 }}>
//         <img src={src} alt="" onLoad={() => setIsLoaded(true)} />
//       </motion.div>
//     </section>
//   );
// }
