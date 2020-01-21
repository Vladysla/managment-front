import React from 'react';
import ContentLoader from 'react-content-loader';

import { isMobile } from '../../Mixins';

const PageLoader = () => {
    const rectsForMobile = [
        {
            x: 0,
            y: 0,
            rx: 0,
            ry: 0,
            width: '100%',
            height: '12',
        },
        {
            x: '1',
            y: 15,
            rx: 1,
            ry: 1,
            width: '98%',
            height: '70%',
        },
    ];
    const rectsForDesktop = [
        {
            x: 0,
            y: 0,
            rx: 0,
            ry: 0,
            width: '100%',
            height: '4',
        },
        {
            x: '.5%',
            y: 5,
            rx: 1,
            ry: 1,
            width: '99%',
            height: '30',
        },
    ];
    const rects = isMobile() ? rectsForMobile : rectsForDesktop;

    return (
        <ContentLoader
            speed={.8}
            primaryColor={'#343a40'}
            secondaryColor={'#9ca4aa'}
            height={isMobile() ? 100 : 40}
            width={100}
        >
            {rects.map((rect, index) => (
                <rect
                    key={index}
                    x={rect.x}
                    y={rect.y}
                    rx={rect.rx}
                    ry={rect.ry}
                    width={rect.width}
                    height={rect.height}
                />
            ))}
        </ContentLoader>
    );
};

export default PageLoader;
