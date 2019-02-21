import React, { useState } from 'react'

import {
    AccordionItemWrapper,
    Panel,
    Title
} from './Components'

const AccordionItem = props => {

    const [isOpen, setOpen] = useState(false)

    return (
        <AccordionItemWrapper>
            <Title active={isOpen} onClick={() => setOpen(!isOpen)}>
                {props.title}
            </Title>
            <Panel active={isOpen}>{props.children}</Panel>
        </AccordionItemWrapper>
    );
}

export default AccordionItem