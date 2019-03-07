import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';

import {
    Wrapper,
    ListGroupWrapper,
    ListGroupItemWrapper
} from './Components'

class Sidebar extends Component {

    render() {
        return (
            <Wrapper isSidebarShown={this.props.isSidebarShown}>
                <ListGroupWrapper>
                    <ListGroupItemWrapper variant="dark" action>Cras justo odio</ListGroupItemWrapper>
                    <Link to="/"><ListGroupItemWrapper  variant="dark" action active>Показать все товары</ListGroupItemWrapper></Link>
                    <Link to="/"><ListGroupItemWrapper  variant="dark" action>Показать товары для точки</ListGroupItemWrapper></Link>
                    <Link to="/store"><ListGroupItemWrapper  variant="dark" action>Добавить товары</ListGroupItemWrapper></Link>
                    <Link to="/"><ListGroupItemWrapper  variant="dark" action>Продать товары</ListGroupItemWrapper></Link>
                    <Link to="/"><ListGroupItemWrapper  variant="dark" action>Переместить товары</ListGroupItemWrapper></Link>
                </ListGroupWrapper>
            </Wrapper>
        );
    }
}

export default withRouter(Sidebar);