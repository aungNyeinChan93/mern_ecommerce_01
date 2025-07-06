import React, { useEffect, useState } from "react";

const TestQuotes = () => {
  const getQuotes = async () => {
    const response = await fetch(`https://dummyjson.com/quotes`);
    const { quotes } = await response.json();
    setQuotes(quotes);
  };

  useEffect(() => {
    getQuotes();
  });
  const [quotes, setQuotes] = useState([]);

  console.log(quotes);

  return (
    <React.Fragment>
      <section className="mx-10 p-4">
        {quotes &&
          Array.isArray(quotes) &&
          quotes?.map((quote) => (
            <li className="text-slate-600" key={quote.id}>
              {quote.quote}
            </li>
          ))}
      </section>
    </React.Fragment>
  );
};

export default TestQuotes;
