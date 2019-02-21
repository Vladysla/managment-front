import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

import ClickOutside from 'react-click-outside'

import {
    Wrapper,
    Body
} from './Components'

const Modal = ({ children, onClose }) => {


    const modalElement = document.body.appendChild(document.createElement('div'))

    useEffect(() => {
        return () => {
            document.body.removeChild(modalElement)
        }
    })

    return ReactDOM.createPortal(
        <Wrapper>
            <ClickOutside onClickOutside={() => onClose()}>
                <Body>
                    { children }
                </Body>
            </ClickOutside>
        </Wrapper>,
        modalElement
    )
}

export default Modal