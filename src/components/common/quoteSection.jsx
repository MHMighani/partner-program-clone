import "./quoteSection.scss";

function QuoteSection({ quoteDetails = {} }) {
  return (
    <div className={`container quote-section`}>
      <div className="quote-container">
        <div className="image-container">
          <img
            className="image"
            src={quoteDetails.image}
            alt={quoteDetails.name}
          />
        </div>
        <blockquote className="quote">
          <p className="quote__main">
            <span>“</span> {quoteDetails.main} <span>“</span>
          </p>

          <p className="quote__footer">
            <strong className="author">{quoteDetails.authorName}</strong>
            {quoteDetails.authorDetail}
          </p>
        </blockquote>
      </div>
    </div>
  );
}

export default QuoteSection;
