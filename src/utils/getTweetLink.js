import sanitizeHtml from 'sanitize-html';

const getTweetLink = (cont, title) => {
  const cleanContent = sanitizeHtml(cont);
  const textOnly = cleanContent.replace(/(<([^>]+)>)/gi, '').trim();
  return (
    'https://twitter.com/intent/tweet?hashtags=quotes&text=' +
    encodeURIComponent(`"${textOnly}"\n${title}`)
  );
};

export default getTweetLink;
