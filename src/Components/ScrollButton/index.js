import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Circle from './Circle';
import {
    Wrapper,
    Button,
    ChevronTop,
    ChevronBottom,
} from './Components';

class ScrollButton extends Component {
    state = {
        circleProgress: this.props.top ? 0 : 100,
    };

    componentDidMount() {
        window.addEventListener('scroll', this.clientScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.clientScroll);
    }

    clientScroll = () => {
        let percentage = 0;
        const documentHeight = document.documentElement.getBoundingClientRect().height;
        const calculated = (documentHeight - window.innerHeight) - window.pageYOffset;
        if (this.props.top) {
            percentage = 100 - (((calculated/(documentHeight - window.innerHeight)) * 100).toFixed(0));
        } else {
            percentage = ((calculated/(documentHeight - window.innerHeight)) * 100).toFixed(0);
        }
        this.setState({ circleProgress: percentage });
    };

    handleScrollClick = () => {
        window.scrollTo({top: this.props.top ? 0 : 10000, behavior: 'smooth'});
    };

    getValidProgress = (progress) => progress === 100 ? 99 : progress;

    render() {
        const { circleProgress } = this.state;
        const { top } = this.props;
        return (
            <Wrapper onClick={this.handleScrollClick} top={top}>
                <Button>
                    {top ? <ChevronTop progress={this.getValidProgress(circleProgress)} /> : <ChevronBottom />}
                </Button>
                <Circle
                    radius={33}
                    stroke={4}
                    progress={circleProgress}
                />
            </Wrapper>
        );
    }
}

ScrollButton.defaultProps = {
    top: false,
};

ScrollButton.propTypes = {
    top: PropTypes.bool,
};

export default ScrollButton;
