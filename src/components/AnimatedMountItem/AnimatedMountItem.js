import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const AnimatedMountItem = ({ index, children }) => (
  <motion.div
    key={index}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    exit={{ scale: 0, opacity: 0 }}
  >
    {children}
  </motion.div>
);

AnimatedMountItem.propTypes = {
  index: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default AnimatedMountItem;