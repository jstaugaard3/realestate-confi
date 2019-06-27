import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

const ArticleItem = ({ article }) => {

  const { source, heading, link, desc, photo, date } = article;

  return (
    <div>
      {/* <div className='row'> */}
      <div className='col s12 m6'>
        <div className='card'>
          <div className='card-image'>
            <img src={photo} alt='Article' />
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
                    {` ` + source}
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

// ArticleItem.propTypes = {
//   source: PropTypes.object.isRequired
// };

export default ArticleItem;
