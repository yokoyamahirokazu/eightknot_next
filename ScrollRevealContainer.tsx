import { FC, useRef, useEffect } from 'react';
import scrollReveal from 'scrollreveal';

interface ScrollRevealContainerProps {
  move?: string;
  size?: string;
}

const ScrollRevealContainer: FC<ScrollRevealContainerProps> = ({ children, move, size }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        reset: false,
        delay: 200,
        duration: 600,
        interval: 100,
        opacity: 0,
        origin:
          move === 'left' ? 'left' : move === 'right' ? 'right' : move === 'top' ? 'top' : 'bottom',
        scale: size === 'small' ? 1.5 : size === 'medium' ? 2 : size === 'big' ? 3 : 1,
        distance: '40px',
      });
  }, [sectionRef]);

  return <section ref={sectionRef}>{children}</section>;
};
export default ScrollRevealContainer;
