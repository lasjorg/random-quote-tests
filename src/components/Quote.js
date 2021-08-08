import React from 'react';

const Quote = ({ title, content }) => {
  return (
    <>
      <h1 className="author" id="author">
        {title}
      </h1>
      <div className="quote" id="text">
        {content}
      </div>
    </>
  );
};

export default Quote;
