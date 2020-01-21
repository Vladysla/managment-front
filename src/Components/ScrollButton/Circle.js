import React, { Component } from 'react';

import {
    Svg,
    CircleSvg
} from './Components';

class Circle extends Component {
    constructor(props) {
        super(props);

        const { radius, stroke } = this.props;

        this.normalizedRadius = radius - stroke * 2;
        this.circumference = this.normalizedRadius * 2 * Math.PI;
    }

    render() {
        const { radius, stroke, progress } = this.props;

        const strokeDashoffset = this.circumference - progress / 100 * this.circumference;

        return (
            <Svg
                height={radius * 2}
                width={radius * 2}
            >
                <CircleSvg
                    fill="transparent"
                    strokeWidth={ stroke }
                    strokeDasharray={ this.circumference + ' ' + this.circumference }
                    style={ { strokeDashoffset } }
                    r={ this.normalizedRadius }
                    cx={ radius }
                    cy={ radius }
                />
            </Svg>
        );
    }
}

export default Circle;
