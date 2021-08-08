import React from 'react';

const Buttons = (props) => {
  return (
    <div className="button-container">
      <button
        id="new-quote"
        className="button button--get-quote"
        onClick={props.onClick}
        disabled={props.disabled}
      >
        Get New Quote
      </button>
      <a
        id="tweet-quote"
        className="button button--tweet-quote"
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweet Quote
      </a>
    </div>
  );
};

export default Buttons;
