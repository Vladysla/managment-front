import React from 'react';
import Image from 'react-bootstrap/Image';
import { getImage } from '../../../../../API';
import { Places } from '../Components';

const Photo = ({ product, product_id, theme, changeTheme }) => {
    return (
        <Places>
            <Image
                thumbnail
                src={getImage(product[product_id].info.photo)}
                alt="Product picture"
            />
            <button
                onClick={() => {
                    if  (theme === 'dark') {
                        return changeTheme('light');
                    }
                    return changeTheme('dark');
                }}
            >
                Change
            </button>
        </Places>
    );
};

export default Photo;