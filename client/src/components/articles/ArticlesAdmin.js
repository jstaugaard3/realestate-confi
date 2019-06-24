import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ArticleItemAdmin from './ArticleItemAdmin';
import Spinner from '../layout/Spinner';
import ArticleContext from '../../context/article/articleContext';

const Articles = () => {
  const articleContext = useContext(ArticleContext);

  const { articles, filtered, getArticles, loading } = articleContext;

  useEffect(() => {
    getArticles();
    // eslint-disable-next-line
  }, []);

  if (articles !== null && articles.length === 0 && !loading) {
    return <h4>Please add an article</h4>;
  }

  return (
    <Fragment>
      {articles !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map(article => (
                <CSSTransition
                  key={article._id}
                  timeout={500}
                  classNames='item'
                >
                  <ArticleItemAdmin article={article} />
                </CSSTransition>
              ))
            : articles.map(article => (
                <CSSTransition
                  key={article._id}
                  timeout={500}
                  classNames='item'
                >
                  <ArticleItemAdmin article={article} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Articles;
