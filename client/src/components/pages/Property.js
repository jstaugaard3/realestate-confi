import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import AuthContext from '../../context/auth/authContext';
import Spinner from '../layout/Spinner';
import ArticleContext from '../../context/article/articleContext';
import ArticleItem from '../articles/ArticleItem';



const Property = (props) => {
  const authContext = useContext(AuthContext);

  const articleContext = useContext(ArticleContext);
  const { articles, loading, getBuildingArticles } = articleContext;

  useEffect(() => {
    authContext.loadUser();
    getBuildingArticles(props.match.params.id);
    console.log(props.match.params.id)
    // eslint-disable-next-line
  }, []);

 
  

  return (
    <Fragment>
    {articles !== null && !loading ? (
      articles.map(article => (
                <CSSTransition
                  key={article._id}
                  timeout={500}
                  classNames='item'
                >
                  <ArticleItem article={article} />
                </CSSTransition>
              ))
        ) : (<Spinner />)
    }
    </Fragment>
  )
  }
export default Property;
