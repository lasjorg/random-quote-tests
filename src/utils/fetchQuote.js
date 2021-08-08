const API_URL = 'https://api.quotable.io/random';

const fetchQuote = async () => {
  try {
    const res = await fetch(API_URL);
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      throw new Error('Network response failed');
    }
  } catch (error) {
    console.log(error);
  }
};

export default fetchQuote;
