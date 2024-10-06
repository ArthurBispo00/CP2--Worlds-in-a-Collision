"use client"

import { motion } from "framer-motion";

export default function Template({children}:{children:React.ReactNode}) {

    return (
      <motion.div initial={{y:16, opacity:0}} animate={{y:0, opacity:1}} transition={{ease:'easeInOut', duration:0.85}}>{children}</motion.div>   
  )
}
