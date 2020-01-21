import React from 'react'
import {
    ModalWrapper,
    ModalBody,
    Body
} from './Components'

const Modal = ({ children, onClose }) => (
    <ModalWrapper
        size="lg"
        centered
        show
        onHide={onClose}
    >
        <ModalBody>
            <Body>
                { children }
            </Body>
        </ModalBody>
    </ModalWrapper>
);

export default Modal