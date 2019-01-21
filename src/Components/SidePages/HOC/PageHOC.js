import React, { Component } from 'react'


export default (TableBody, options = {}) => {
    return class extends Component {
        state = {
            isDataFetching: true,
            filterBy: [],
            hasMenuOpen: null,
            hasActionsMenuOpened: null
        }

        componentDidMount() {
            this.loadMoreData()
        }

        menuOpenHandler = (key, value) => {
            this.setState(prevState => ({[key]: (prevState[key] !== value) ? value : null}));
        }

        loadMoreData = () => {
            this.props.loadData()
        }

        render() {
            return (
                <div>
                    <TableBody
                        menuOpenHandler={this.menuOpenHandler}
                        hasMenuOpen={this.state.hasMenuOpen}
                        data={this.props.data}
                    />
                </div>
            )
        }
    }
}