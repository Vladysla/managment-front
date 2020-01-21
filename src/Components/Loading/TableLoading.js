import React from 'react';
import ContentLoader from 'react-content-loader';

import { isMobile } from '../../Mixins';

const Row = ({ count = 6, width = 60, height = 10, ctY = 10, ctXStart = 30, borderRadius = 3, margin = 10 }) => {
    const items = [];
    for (let i = 0; i < (count * (margin + width)); i+=(width + margin)) {
        const item = {
            x: i + ctXStart,
            y: ctY,
            width,
            height,
            radius: borderRadius,
        };

        items.push(item)
    }

    return items.map((itemArr, index) => (
        <rect
            key={index}
            x={itemArr.x}
            y={itemArr.y}
            rx={itemArr.radius}
            ry={itemArr.radius}
            width={itemArr.width}
            height={itemArr.height}
        />
    ))
};

const TableLoading = () => {
    const mainHeight = isMobile() ? 200 : 100;
    const rowHeight = isMobile() ? 41 : 21;
    const headRowHeight = isMobile() ? 21 : 11;
    const ctY = isMobile() ? 4 : 2;
    const margin = 3;
    return (
        <div>
            <ContentLoader
                speed={.7}
                primaryColor={'#23292f'}
                secondaryColor={'#9ca4aa'}
                width="500"
                height={mainHeight}
            >
                <Row
                    count={7}
                    width={66}
                    height={headRowHeight}
                    ctY={4 * ctY}
                    ctXStart={10}
                    borderRadius={1}
                    margin={margin}
                />
                <Row
                    count={7}
                    width={66}
                    height={rowHeight}
                    ctY={11 * ctY}
                    ctXStart={10}
                    borderRadius={1}
                    margin={margin}
                />
                <Row
                    count={7}
                    width={66}
                    height={rowHeight}
                    ctY={23 * ctY}
                    ctXStart={10}
                    borderRadius={1}
                    margin={margin}
                />
                <Row
                    count={7}
                    width={66}
                    height={rowHeight}
                    ctY={35 * ctY}
                    ctXStart={10}
                    borderRadius={1}
                    margin={margin}
                />
            </ContentLoader>
        </div>
    )
};

export default TableLoading;
