import React from 'react'
import PropTypes from 'prop-types'


export default class Comment extends React.Component {

    static propTypes = {
        comment: PropTypes.shape({
            user: PropTypes.string.isRequired,
            text: PropTypes.string
        })
    }

    render() {
        const { comment } = this.props
        return (
            <div>
                <p>{comment.user} :</p>
                <p>{comment.text}</p>
            </div>
        )
    }
}