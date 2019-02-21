import React from 'react'
import get from 'lodash/get';

const Test = () => {
    const obj = {
        "Mag 1": {
            "S": {
                "Green": 1,
                "Red": 2
            },
            "M": {
                "Blue": 4
            }
        },
        "Mag 2": {
            "M": {
                "Purpul": 2
            }
        }
    };


    const reduceObj = Object.keys(obj).reduce((acc, currVal) => {
        Object.keys(obj[currVal]).map(size => {
            Object.keys(obj[currVal][size]).map(color => {
                acc+=obj[currVal][size][color]
            })
        });

        return acc;
    }, 0);




    const reduceObj2 = Object.keys(obj).reduce(
        (acc, currentKey) => ({
            ...acc,
            [currentKey]: Object.keys(obj[currentKey]).reduce(
                (sizeAcc, currentSizeKey) => sizeAcc += Object.keys(obj[currentKey][currentSizeKey]).reduce(
                    (colorAcc, currentColorKey) => colorAcc += obj[currentKey][currentSizeKey][currentColorKey],
                    0
                ),
                0
            )
        }),
        {}
    );

    const reduceObj3 = Object.keys(obj).reduce(
        (acc, currentKey) => ({
            ...acc,
            [currentKey]: Object.keys(obj[currentKey]).reduce(
                (sizeAcc, currentSizeKey) => ({
                  ...sizeAcc, [currentSizeKey]: Object.keys(obj[currentKey][currentSizeKey]).reduce(
                        (colorAcc, currentColorKey) => colorAcc += obj[currentKey][currentSizeKey][currentColorKey],
                        0
                    ),
                }),
                {}
            )
        }),
        {}
    );







    console.log(reduceObj2);
    console.log(reduceObj3);
    return (
        <div>

        </div>
    )
}

export default Test