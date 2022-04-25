import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

const AnimateMount = ({ children, isVisible, variant }) => {
  const getStyling = () => {
    switch(variant) {
      case 'fade':
        return {
          init: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 }
        };
      default:
        return;
    }
  };

  const styling = getStyling();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={styling.init}
          animate={styling.animate}
          exit={styling.exit}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

AnimateMount.propTypes = {
  children: PropTypes.node.isRequired,
  isVisible: PropTypes.bool,
  variant: PropTypes.oneOf(['fade']).isRequired,
};

export default AnimateMount;