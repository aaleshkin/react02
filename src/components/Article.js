import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CommentList from './CommentList'



class Article extends Component {


    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }


    render() {
        const { article, isOpen, toggleOpen } = this.props
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={toggleOpen}>
                    {isOpen ? "Скрыть" : "Показать"}
                </button>
                {this.getBody()}
            </div>
        )
    }


    getBody() {
        const { article, isOpen } = this.props
        if (!isOpen) return null
        return (
            <section>
                {article.text}
                <CommentList comments={article.comments} />
            </section>
        )
    }
}


export default Article