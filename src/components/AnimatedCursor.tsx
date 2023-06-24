"use client"
import AnimatedCursor from 'react-animated-cursor';

const AnimatedCursorComponent = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <AnimatedCursor
                innerSize={10}
                outerSize={42}
                color='168, 85, 247'
                innerScale={1.2}
                outerScale={1.5}
                outerStyle={{
                    border: '2px solid gray',
                    backgroundColor: 'transparent'
                }} />
            {
                children
            }
        </>
    );
}

export default AnimatedCursorComponent;