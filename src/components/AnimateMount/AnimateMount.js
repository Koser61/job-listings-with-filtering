import PropTypes from 'prop-types';
import { useTransition, animated } from 'react-spring';

const AnimateMount = ({ children, show }) => {
  const fadeInOut = useTransition(show, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <>
      {fadeInOut((style, item) =>
        item &&
          <animated.div
            style={style}
            className='AnimateMount'
          >
            {children}
          </animated.div>
      )}
    </>
  );
};

AnimateMount.propTypes = {
  children: PropTypes.node.isRequired,
  trigger: PropTypes.bool,
};

export default AnimateMount;