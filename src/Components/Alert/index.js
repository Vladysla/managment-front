import React from 'react';
import styled from 'styled-components';
import BootsAlert from 'react-bootstrap/Alert';

const AlertWrapper = styled(BootsAlert)`
  position: fixed;
  width: 100%;
  z-index: 999;
`;


const Alert = ({ alert, closeAlert }) => {
    return (
        <AlertWrapper variant={alert.variant}>
            {alert.message}
            <button onClick={closeAlert} type="button" className="close">
                <span aria-hidden="true">×</span>
                <span className="sr-only">Закрыть</span>
            </button>
        </AlertWrapper>
    )
};

export default Alert