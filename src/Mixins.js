export const backGroundColor = '#0d0e0e !important';
export const primaryColor = '#343a40 !important';
export const secondaryColor = '#1bd2ff !important';
export const tertiaryColor = '#f9f9f9 !important';
export const secondaryColorRGBA = 'rgba(27, 210, 255, .8) !important';
export const liteWite = 'rgba(255, 255, 255, 0.93) !important';
export const setSecondaryColorRGBA = (percent) => `rgba(27, 210, 255, ${percent}) !important`;

export const textBordered = 'text-shadow: -1px 0 #a0a0a0, 0 1px #a0a0a0, 1px 0 #a0a0a0, 0 -1px #a0a0a0 !important';
export const mainShadow = 'box-shadow: 0 0 5px 4px rgba(0, 0, 0, 0.52) !important';
export const mainTransition = 'transition: all .4s .1s !important';

export const isMobile = () => {
    const width = window.innerWidth;

    return width <= 500;
};
