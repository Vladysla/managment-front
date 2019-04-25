import React from 'react'
import BootsAlert from 'react-bootstrap/Alert'


const Alert = ({ alert, closeAlert }) => {
    return (
        <BootsAlert variant={alert.variant}>
            {alert.message}
            <button onClick={closeAlert} type="button" className="close">
                <span aria-hidden="true">×</span>
                <span className="sr-only">Закрыть</span>
            </button>
        </BootsAlert>
    )
};

export default Alert