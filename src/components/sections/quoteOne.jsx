import QuoteSection from "../common/quoteSection";
import QuoteImageOne from "../../assets/businessIntro/quote-1.png";

function QuoteOne() {
  const quoteDetails = {
    name: "quoteOne",
    main: (
      <>
        My experience with this Partner Program has been incredible. <br />{" "}
        Products are easy-to-use, the set up is simple, and we receive a great
        partner discount.
      </>
    ),
    image: QuoteImageOne,
    authorName: "Bernard May",
    authorDetail: "CEO at National Positions",
  };

  return (
    <div className="quoteOne">
      <QuoteSection quoteDetails={quoteDetails} />
    </div>
  );
}

export default QuoteOne;
