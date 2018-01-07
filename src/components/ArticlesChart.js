import React, { Component } from 'react'

export default class ArticlesChart extends Component {
    static propTypes = {

    }

    componentDidMount() {
        // d3 works with this.refs.chart
    }

    componentWillReceiveProps() {
        // update chart for new articles
    }

    render() {
        return (
            <div ref='chart' />
        )
    }

    componentWillUnmount() {
        // do some cleanup
    }
}
