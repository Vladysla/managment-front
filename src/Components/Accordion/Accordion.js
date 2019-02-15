import React, {useState} from 'react'
import ClickOutside from 'react-click-outside'

import { AccordionWrapper } from "./Components"


const Accordion = props =>
{

    const [isOpen, setOpen] = useState(false);

    const renderChildren = () => {
        return React.Children.map(props.children, child => {
            console.log(child);
            return React.cloneElement(child, {
                active: isOpen,
                close: onClose,
                toggle: onToggle
            })
        })
    };

    const onToggle = () => setOpen(!isOpen);

    const onClose = () => setOpen(false);

    return (
        <ClickOutside onClickOutside={onClose}>
            <AccordionWrapper>{renderChildren()}</AccordionWrapper>
        </ClickOutside>
    )
}

export default Accordion
