import styled from 'styled-components'
import Modal from 'react-bootstrap/Modal'

export const ModalWrapper = styled(Modal)`
    display: block !important;
`;

export const ModalBody = styled(Modal.Body)`
    padding: 0 !important;
`;

export const Body = styled.div`
    background-color: ${props => props.theme.primary};
    display: flex;
`;