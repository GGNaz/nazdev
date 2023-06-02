import React, {useRef,useEffect} from 'react'
import { motion, useInView, useAnimation } from "framer-motion";

interface ContentProps {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}

export default function ScrollAnimation({ children, width = "fit-content" }: ContentProps) {
  const mainControls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    // } else {
    //   mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref}  className={`${width} relative overflow-hidden`} >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.50 }}
      >
        {children}
      </motion.div>
    </div>
  )
}
