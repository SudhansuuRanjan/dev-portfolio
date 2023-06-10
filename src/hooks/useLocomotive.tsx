import { useEffect, useRef, useState } from "react";
import LocomotiveScroll, { InstanceOptions } from "locomotive-scroll";

type useLocomotiveScrollHook = [LocomotiveScroll | null];

type Props = {
  ref: React.RefObject<HTMLElement | null>;
} & Omit<InstanceOptions, 'el'>;

const useLocomotive = ({ ref, ...options }: Props): useLocomotiveScrollHook => {
  const [locomotiveScrollRef, setRef] = useState<LocomotiveScroll | null>(null);

  useEffect(() => {
    let scroll: LocomotiveScroll | null = null;

    if (ref.current) {
      import('locomotive-scroll').then((locomotiveModule) => {
        const LocomotiveModuleDefault = locomotiveModule.default;

        scroll = new LocomotiveModuleDefault({
          el: ref.current,
          smooth: true,
          lerp:0.05,
          inertia: 0.8,
          multiplier: 1,
          smartphone: {
            smooth: true,
          },
          tablet: {
            smooth: true,
            breakpoint: 1024,
          },
        });

        setRef(scroll);
      });
    }

    return () => {
      if (scroll) {
        scroll.destroy();
      }
    };
  }, [ref]);

  return [locomotiveScrollRef];
};

export default useLocomotive;
