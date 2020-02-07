import React from 'react';
import ContentLoader from 'react-content-loader';

const ChoosePlateLoading = () => {
    return (
        <ContentLoader
            speed={.8}
            primaryColor={'#343a40'}
            secondaryColor={'#9ca4aa'}
            height={13}
            width={100}
        >
            <rect
                x={0}
                y={0}
                rx={2}
                ry={2}
                width={100}
                height={10}
            />
        </ContentLoader>
    )
};

export default ChoosePlateLoading;
