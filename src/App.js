import React, { useEffect, useState } from 'react';

import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

import Quote from './components/Quote';
import Buttons from './components/Buttons';

import fetchQuote from './utils/fetchQuote';
import getTweetLink from './utils/getTweetLink';

import './App.css';

export const App = () => {
  const [quotes, setQuotes] = useState(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    nprogress.start();
    const getData = async () => {
      const quotesJSON = await fetchQuote();
      quotesJSON && setQuotes(quotesJSON);
    };
    getData();
    setHasLoaded(true);
    nprogress.done();
  }, []);

  const handleClick = async () => {
    setHasLoaded(false);
    nprogress.start();
    const quotesJSON = await fetchQuote();
    quotesJSON && setQuotes(quotesJSON);
    setHasLoaded(true);
    nprogress.done();
  };

  return (
    <>
      {quotes && hasLoaded && (
        <div id="quote-box" className={`App ${hasLoaded && 'visible'}`}>
          <Quote title={quotes.author} content={quotes.content} />
          <Buttons
            onClick={handleClick}
            disabled={!hasLoaded}
            href={getTweetLink(quotes.author, quotes.content)}
          />
        </div>
      )}
    </>
  );
};
export default App;
