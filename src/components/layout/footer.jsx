import { ReactComponent as PartnerProgramsLogo } from "../../assets/partner-programs-logo.svg";
import * as footerIcons from "../../assets/footer";

function FooterNavLinks({ navItems }) {
  return (
    <>
      {navItems.map((navItem) => (
        <div key={navItem.header}>
          <p>{navItem.header}</p>
          <ul>
            {navItem.links.map((link) => (
              <li key={link.label}>
                <a href={link.address}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

function FooterPolicy() {
  return (
    <div className="footer__policy">
      <p className="copyright">
        Copyright © 2022 LiveChat, Inc. All rights reserved
      </p>
      <div>
        <p>
          Hi! We are glad to have you here! Before you start visiting our Site,
          please note that for the best user experience, we use Cookies. By
          continuing to browse our Site, you consent to the collection, use, and
          storage of cookies on your device for us and our partners. You can
          revoke your consent any time in your device browsing settings.
          <a href="#">Click “Cookies Policy”</a>
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
      <nav className="footer__nav">
        <FooterNavLinks navItems={footerNavLinksDetails} />
        <div className="footer__logo">
          <PartnerProgramsLogo />
          <a href="/" className="btn btn--red">
            {buttonText}
          </a>
        </div>
      </nav>
      <div className="footer__contact">
        <a href="#" className="contact-us">
          Contact us
          <img src={footerIcons.MailIcon} alt="mail-icon" />
        </a>
        <div className="social-icons">
          <a href="#"></a>
          <a href="#"></a>
        </div>
      </div>
      <FooterPolicy />
    </footer>
  );
}

export default Footer;
