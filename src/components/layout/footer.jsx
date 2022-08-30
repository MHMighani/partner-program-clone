import { ReactComponent as PartnerProgramsLogo } from "../../assets/businessIntro/partner-programs-logo.svg";

import mailIcon from "../../assets/businessIntro/footer/mail.svg";
import { ReactComponent as TwitterIcon } from "../../assets/businessIntro/footer/twitter.svg";
import { ReactComponent as FacebookIcon } from "../../assets/businessIntro/footer/facebook.svg";

import "./footer.scss";

function FooterNavLinks({ navItems }) {
  return (
    <div className="nav-links">
      {navItems.map((navItem) => (
        <div className="nav-item" key={navItem.header}>
          <p className="header">{navItem.header}</p>
          <ul>
            {navItem.links.map((link) => (
              <li className="item" key={link.label}>
                <a href={link.address}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function FooterPolicy() {
  return (
    <div className="footer__policy container">
      <p className="copyright">
        Copyright © 2022 LiveChat, Inc. All rights reserved
      </p>
      <div className="cookies">
        <p>
          Hi! We are glad to have you here! Before you start visiting our Site,
          please note that for the best user experience, we use Cookies. By
          continuing to browse our Site, you consent to the collection, use, and
          storage of cookies on your device for us and our partners. You can
          revoke your consent any time in your device browsing settings.
          <a href="/">Click “Cookies Policy”</a>
          to check how you can control them through your device.
        </p>
      </div>
    </div>
  );
}

function Footer() {
  const footerNavLinksDetails = [
    {
      header: "Resources",
      links: [
        { label: "Blog", address: "#" },
        { label: "Help Center", address: "#" },
        { label: "Documentation", address: "#" },
        { label: "Changelog", address: "#" },
        { label: "Terms", address: "#" },
      ],
    },
    {
      header: "Our products",
      links: [
        { label: "liveChat", address: "#" },
        { label: "ChatBot", address: "#" },
      ],
    },
    {
      header: "Partnerships",
      links: [
        { label: "Affiliate Program", address: "#" },
        { label: "Solution Program", address: "#" },
      ],
    },
  ];

  const buttonText = "Join Partner Program";

  return (
    <footer className="footer">
      <div className="container">
        <nav className="footer__nav">
          <div className="footer__logo">
            <PartnerProgramsLogo className="logo" />
            <a href="/" className="btn btn--red">
              {buttonText}
            </a>
          </div>
          <FooterNavLinks navItems={footerNavLinksDetails} />
        </nav>
        <div className="footer__contact">
          <a href="/" className="contact-us">
            <img className="icon" src={mailIcon} alt="mail-icon" />
            Contact us
          </a>
          <div className="social-icons">
            <a className="icon" href="/">
              <TwitterIcon />
            </a>
            <a className="icon" href="/">
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>

      <FooterPolicy />
    </footer>
  );
}

export default Footer;
