import QuoteSection from "./common/quoteSection";
import QuoteImageOne from "../assets/quote-1.png";

function QuoteOne() {
  const quoteDetails = {
    main: "main",
    image: QuoteImageOne,
    authorName: "Bernard May",
    authorDetail: "CEO at National Positions",
  };

  return <QuoteSection quoteDetails={quoteDetails} />;
}

export default QuoteOne;
