import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

type RevealProps = {
  children: JSX.Element;
};

function Reveal({ children }: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    isInView ? mainControls.start('visible') : mainControls.set('hidden');
  }, [isInView]);

  // TODO: RESETAR A ANIMAÇÃO (NÃO ESTÁ FUNCIONANDO O HIDDEN)

  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Reveal;
