import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Article from './Article'
import accordion from '../decorators/accordion'


class ArticleList extends Component {

    static propTypes = {
        // передается при вызове ArticleList в index.js:
        articles: PropTypes.array.isRequired,

        // передается в результате обертки в докоратор accordion:
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    }

    render() {
        const { articles, openItemId, toggleOpenItem } = this.props
        const articleElements = articles.map(article =>
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === openItemId}
                    toggleOpen={toggleOpenItem(article.id)} />
            </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

}

export default accordion(ArticleList)