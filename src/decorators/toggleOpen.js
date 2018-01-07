import React from 'react'

export default (OriginalComponent) => class WrappedComponent extends React.Component {

    state = {
        isOpen: true
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpen={this.toggleOpen} />
    }

    toggleOpen = (ev) => {
        ev && ev.preventDefault && ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}