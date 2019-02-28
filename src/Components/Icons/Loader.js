import React from 'react'
import styled from 'styled-components'


const LoaderTD = styled.td`
    vertical-align: middle;
    text-align: center;
`;


const Loader = props => (
    <tr>
        <LoaderTD colSpan="100">
            <div className="spinner-border" role="status" style={{...props}} />
        </LoaderTD>
    </tr>
);

export default Loader