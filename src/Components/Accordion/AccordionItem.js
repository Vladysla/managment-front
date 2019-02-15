import React from 'react'

import {
    AccordionItemWrapper,
    Panel,
    Title
} from './Components'

const AccordionItem = props => {
    return (
        <AccordionItemWrapper>
            <Title active={props.active} onClick={props.toggle}>
                {props.title}
            </Title>
            <Panel active={props.active}>{props.children}</Panel>
        </AccordionItemWrapper>
    );
}

export default AccordionItem