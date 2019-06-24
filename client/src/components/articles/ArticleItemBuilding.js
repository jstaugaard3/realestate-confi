import React, { useContext } from 'react';
import ArticleContext from '../../context/article/articleContext';
import Moment from 'react-moment';
import 'moment-timezone';

const ArticleItemBuilding = ({ article }) => {
  const articleContext = useContext(ArticleContext);
  const { deleteArticle, setCurrent, clearCurrent } = articleContext;

  const { _id, source, heading, link, desc, photo, property, date } = article;

  const onDelete = () => {
    deleteArticle(_id);
    clearCurrent();
  };

  return (
    <div>
      {/* <div className='row'> */}
        <div className='col s12'>
          <div className='card'>
            <div className='card-image'>
              <img src={photo} />
              <span className='card-title'>{heading}</span>
            </div>
            <div className='card-content'>
              <p>{desc}</p>
            </div>

            <div className='card-action'>
              <div className='row'>
                <div className='col s12'>
                  <a href={link}>Link</a>
                </div>

                <div className='col s12'>
                  {date && (
                    <span>
                      <i className='fas fa-clock' />
                      <Moment format='MM/DD/YYYY'>{date}</Moment>
                    </span>
                  )}
                </div>

                <div className='col s12'>
                  {source && (
                    <span>
                      <i className='fas fa-newspaper' />
                      {` `+source}
                    </span>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>

    </div>
  );
};



export default ArticleItemBuilding;
