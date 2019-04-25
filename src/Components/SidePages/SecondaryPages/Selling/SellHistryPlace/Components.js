import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WrappedLink = styled(Link)`
    display: block;
    color: inherit;
    &:hover {
        color: inherit;
        text-decoration: none;
    }
`;