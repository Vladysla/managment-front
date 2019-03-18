import React from 'react';
import FormControl from 'react-bootstrap/FormControl';


const Select = ({ handler = () => ({}), description = 'Описание', data = [] }) => {
    return (
        <FormControl as="select" onChange={(e) => handler(e.target.value)}>
            <option value="" selected>{ description }</option>
            {
                data && data.map(item => (
                    <option value={item.id}>{item.name}</option>
                ))
            }
        </FormControl>
    )
}

export default Select