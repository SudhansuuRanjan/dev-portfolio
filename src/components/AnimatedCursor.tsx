"use client"
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const DynamicAnimatedCursor = dynamic(() => import('react-animated-cursor'), { ssr: false });

const AnimatedCursorComponent = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted && (
        <DynamicAnimatedCursor
          innerSize={10}
          outerSize={42}
          color='168, 85, 247'
          innerScale={1.2}
          outerScale={1.5}
          outerStyle={{
            border: '2px solid gray',
            backgroundColor: 'transparent'
          }}
        />
      )}
      {children}
    </>
  );
};

export default AnimatedCursorComponent;
