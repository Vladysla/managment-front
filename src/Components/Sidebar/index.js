import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';

import {
    Wrapper,
    ListGroupWrapper,
    ListGroupItemWrapper
} from './Components'

class Sidebar extends Component {

    render() {
        console.log(this.props)
        return (
            <Wrapper isSidebarShown={this.props.isSidebarShown}>
                <ListGroupWrapper>
                    <ListGroupItemWrapper action disabled>Cras justo odio</ListGroupItemWrapper>
                    <Link to="/"><ListGroupItemWrapper action active>Показать все товары</ListGroupItemWrapper></Link>
                    <Link to="/"><ListGroupItemWrapper action>Показать товары для точки</ListGroupItemWrapper></Link>
                    <Link to="/store"><ListGroupItemWrapper action>Добавить товары</ListGroupItemWrapper></Link>
                    <Link to="/"><ListGroupItemWrapper action>Продать товары</ListGroupItemWrapper></Link>
                    <Link to="/"><ListGroupItemWrapper action>Переместить товары</ListGroupItemWrapper></Link>
                </ListGroupWrapper>
            </Wrapper>
        );
    }
}

export default withRouter(Sidebar);