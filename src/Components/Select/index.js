import React from 'react';
import FormControl from 'react-bootstrap/FormControl';


const Select = ({ handler = () => ({}), description = 'Описание', data = [], isTransferPage = false }) => {
    return (
        <FormControl as="select" onChange={(e) => handler(e.target.value)}>
            { !isTransferPage && <option value="" selected>{ description }</option>}
            {
                data && data.map(item => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                ))
            }
        </FormControl>
    )
}

export default Select