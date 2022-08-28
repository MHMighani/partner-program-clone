import QuoteSection from "../common/quoteSection";
import QuoteTwoImage from "../../assets/businessIntro/quote-2.jpg";

function QuoteTwo() {
  const quoteDetails = {
    name: "quoteTwo",
    main: "In this partnership, I was simply looking for new streams of revenue. A great thing is that I also found lots of co-marketing opportunities and amazing support.",
    image: QuoteTwoImage,
    authorName: "Syed Balkhi",
    authorDetail: "Owner at WPBeginner",
  };

  return (
    <div className="quoteTwo">
      <QuoteSection quoteDetails={quoteDetails} />
    </div>
  );
}

export default QuoteTwo;
