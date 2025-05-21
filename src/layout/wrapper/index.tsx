import { motion } from "framer-motion";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.main>
  );
};

export default Wrapper;
