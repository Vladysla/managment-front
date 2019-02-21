import React from 'react'

import { AccordionWrapper } from "./Components"


const Accordion = props =>
{

    const renderChildren = () => {
        return React.Children.map(props.children, child => {
            return child
        })
    };

    return (
            <AccordionWrapper>
                {renderChildren()}
            </AccordionWrapper>
    )
}

export default Accordion
