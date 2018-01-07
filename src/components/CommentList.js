import React, { Component } from 'react'

import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'


class CommentList extends Component {

    static defaultProps = {
        comments: []
    }

    render() {
        const buttonText = this.props.isOpen ? "Скрыть комментарии" : "Посмотреть комментарии"
        return (
            <div>
                <button onClick={this.props.toggleOpen}>{buttonText}</button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const { comments, isOpen } = this.props
        if (!isOpen) return null
        if (!comments.length) return <p>Пока нет комментариев</p>
        return (
            <div>
                <ul>
                    {comments.map(
                        (c) =>
                            <li key={c.id}><Comment comment={c} /></li>
                    )}
                </ul>
            </div>
        )
    }

}

export default toggleOpen(CommentList)