import React, { useContext } from 'react';
import ArticleContext from '../../context/article/articleContext';
import Moment from 'react-moment';


const ArticleItemAdmin = ({ article }) => {
  const articleContext = useContext(ArticleContext);
  const { deleteArticle, setCurrent, clearCurrent } = articleContext;

  const { _id, source, heading, link, desc, photo, date } = article;

  const onDelete = () => {
    deleteArticle(_id);
    clearCurrent();
  };

  return (
    <div>
      {/* <div className='row'> */}
        <div className='col s12 m6'>
          <div className='card'>
            <div className='card-image'>
              <img src={photo} alt="Article"/>
              <span className='card-title'>{heading}</span>
            </div>
            <div className='card-content'>
              <p>{desc}</p>
            </div>

            <div className='card-action'>
              <div className='row'>
                <div className='col s12 m4'>
                  <a href={link}>Link</a>
                </div>

                <div className='col s12 m4'>
                  {date && (
                    <span>
                      <i className='fas fa-clock' />
                      <Moment format='MM/DD/YYYY'>{date}</Moment>
                    </span>
                  )}
                </div>

                <div className='col s12 m4'>
                  {source && (
                    <span>
                      <i className='fas fa-newspaper' />
                      {` `+source}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <p>
          <button
            className='btn yellow black-text'
            onClick={() => setCurrent(article)}>
            {' '}
            Edit
          </button>
          <button className='btn red' onClick={onDelete}>
            Delete
          </button>
        </p>


          </div>
        </div>
      {/* </div> */}

      {/* <div className='card bg-light'>
        <h3 className='text-primary text-left'>{heading}</h3>
        <h4 className='text-secondary text-left'>{desc}</h4>
        <div className='grid-2'>
          <div>
            <ul className='list'>
              {source && (
                <li>
                  <i className='fas fa-newspaper' /> {source}
                </li>
              )}

              {property && (
                <li>
                  <i className='fas fa-map-pin' /> {property}
                </li>
              )}
            </ul>
          </div>

          <div>
            <ul className='list'>
              {link && (
                <li>
                  <i className='fas fa-link' />{' '}
                  <a href={link}>Link to Article</a>
                </li>
              )}

              {date && (
                <li>
                  <i className='fas fa-clock' />{' '}
                  <Moment format='MM/DD/YYYY'>{date}</Moment>
                </li>
              )}
            </ul>
          </div>
        </div>

        <p>
          <button
            className='btn btn-dark btn-sm'
            onClick={() => setCurrent(article)}>
            {' '}
            Edit
          </button>
          <button className='btn btn-danger btn-sm' onClick={onDelete}>
            Delete
          </button>
        </p>
      </div> */}
    </div>
  );
};

// ArticleItem.propTypes = {
//   source: PropTypes.object.isRequired
// };

export default ArticleItemAdmin;
