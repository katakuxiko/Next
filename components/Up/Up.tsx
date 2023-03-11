import styles from "./Up.module.css";
import cn from "classnames";
import UpIcon from "./up.svg";
import { useScrollY } from "@/hooks/useScrollY";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from 'react';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';
export const Up = (): JSX.Element => {
  const control = useAnimation();
  const y = useScrollY();
  
  useEffect(()=>{
    control.start({opacity:y*2/document.body.scrollHeight})
  },[y,control])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  

  return (
    <motion.div
      animate={control}
      className={styles.up}
      initial={{ opacity: 0 }}
    >
      <ButtonIcon appearence="primary" icon="up" onClick={scrollToTop} />
    </motion.div>
  );
};
