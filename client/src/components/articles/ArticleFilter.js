import React, { useContext, useRef, useEffect } from 'react';
import ArticleContext from '../../context/article/articleContext';

const ArticleFilter = () => {
  const articleContext = useContext(ArticleContext);
  const text = useRef('');

  const { filterArticles, clearFilter, filtered } = articleContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = e => {
    if (text.current.value !== '') {
      filterArticles(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Filter Articles...'
        onChange={onChange}
      />
    </form>
  );
};

export default ArticleFilter;
