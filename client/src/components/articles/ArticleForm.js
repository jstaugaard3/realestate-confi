import React, { useState, useContext, useEffect } from 'react';
import ArticleContext from '../../context/article/articleContext';

const ArticleForm = () => {
  const articleContext = useContext(ArticleContext);

  const { addArticle, updateArticle, clearCurrent, current } = articleContext;

  useEffect(() => {
    if (current !== null) {
      setArticle(current);
    } else {
      setArticle({
        source: '',
        heading: '',
        link: '',
        property: '',
        date: ''
      });
    }
  }, [articleContext, current]);

  const [article, setArticle] = useState({
    source: '',
    heading: '',
    link: '',
    property: '',
    date: ''
  });



  const { source, heading, link, property, date } = article;

  const onChange = e =>
    setArticle({ ...article, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addArticle(article);
    } else {
      updateArticle(article);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current ? 'Edit Article' : 'Add Article'}
      </h2>
      <input
        type='text'
        placeholder='Source'
        name='source'
        value={source}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Heading'
        name='heading'
        value={heading}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Link'
        name='link'
        value={link}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Property'
        name='property'
        value={property}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Date'
        name='date'
        value={date}
        onChange={onChange}
      />

      <div>
        <input
          type='submit'
          value={current ? 'Update Article' : 'Add Article'}
          className='btn btn-primary btn-block'
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ArticleForm;
