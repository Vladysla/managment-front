import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

import ClickOutside from 'react-click-outside'

import {
    ModalWrapper,
    ModalBody,
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
        <ModalWrapper
            size="lg"
            centered
            show
        >
            <ClickOutside onClickOutside={() => onClose()}>
                <ModalBody>
                    <Body>
                        { children }
                    </Body>
                </ModalBody>
            </ClickOutside>
        </ModalWrapper>,
        modalElement
    )
}

export default Modal