import React, { useContext } from 'react';
import ArticleContext from '../../context/article/articleContext';

const ArticleItem = ({ article }) => {
  const articleContext = useContext(ArticleContext);
  const { deleteArticle, setCurrent, clearCurrent } = articleContext;

  const { _id, source, heading, link, property, date } = article;

  const onDelete = () => {
    deleteArticle(_id);
    clearCurrent();
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>{heading}</h3>

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
                <i className='fas fa-link' /> {link}
              </li>
            )}

            {date && (
          <li>
            <i className='fas fa-clock' /> {date}
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
    </div>
  );
};

// ArticleItem.propTypes = {
//   source: PropTypes.object.isRequired
// };

export default ArticleItem;
