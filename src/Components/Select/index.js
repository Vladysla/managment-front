import React from 'react';
import FormControl from 'react-bootstrap/FormControl';


const Select = ({ handler = () => ({}), description = 'Описание', data = [], isTransferPage = false, userPlace = '' }) => {
    return (
        <FormControl defaultValue='' as="select" onChange={(e) => handler(e.target.value)}>
            { !isTransferPage && <option value="">{ description }</option>}
            {
                data && data.map(item => {
                    if (isTransferPage && userPlace === item.id) {
                        return null;
                    }
                    return <option key={item.id} value={item.id}>{item.name}</option>
                })
            }
        </FormControl>
    )
};

export default Select