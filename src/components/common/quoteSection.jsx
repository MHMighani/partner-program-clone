function QuoteSection({ quoteDetails = {} }) {
  return (
    <div className="section quote-section">
      <div className="section__container">
        <div>
          <img src={quoteDetails.image} alt="quote-1" />
          <blockquote className="quote">
            <p className="quote__main">{quoteDetails.main}</p>
            <p className="quote__footer">
              <strong className="author">{quoteDetails.authorName}</strong>
              {quoteDetails.authorDetail}
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default QuoteSection;
