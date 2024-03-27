import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import {
  FooterContainer,
  FooterLayout,
  WebsiteInfoContainer,
  WebsiteNameLogoContainer,
  SiteName,
  SiteLogo,
  SiteDescription,
  QuickLinksContainer,
  QuickLinkItem,
  SocialIconsContainer,
  IconItem,
} from "./styledComponents";

const Footer = () => (
  <FooterContainer>
    <FooterLayout>
      <WebsiteInfoContainer>
        <WebsiteNameLogoContainer>
          <SiteName>Temples of India</SiteName>
          <SiteLogo
            src="https://templesofindia.org/assets/images/tofi_logo/tofi-logo_navbar.png"
            alt="tofi logo"
          />
        </WebsiteNameLogoContainer>
        <SiteDescription>World's Largest Hindu Temples Portal.</SiteDescription>
      </WebsiteInfoContainer>

      <QuickLinksContainer>
        <QuickLinkItem>Quick Links</QuickLinkItem>
        <QuickLinkItem>Home</QuickLinkItem>
        <QuickLinkItem>About Us</QuickLinkItem>
        <QuickLinkItem>Nearby Temples</QuickLinkItem>
        <QuickLinkItem>Download App</QuickLinkItem>
      </QuickLinksContainer>

      <QuickLinksContainer>
        <QuickLinkItem>Search Temples</QuickLinkItem>
        <QuickLinkItem>Watch Video</QuickLinkItem>
        <QuickLinkItem>Disclaimer</QuickLinkItem>
        <QuickLinkItem>Our Blog</QuickLinkItem>
        <QuickLinkItem>Donate for Dharma</QuickLinkItem>
      </QuickLinksContainer>

      <SocialIconsContainer>
        <IconItem>
          <FaFacebookF size={28} color="#039be5" />
        </IconItem>
        <IconItem>
          <FaTwitter size={26} color="#039be5" />
        </IconItem>
        <IconItem>
          <FaInstagram size={26} color="#039be5" />
        </IconItem>
        <IconItem>
          <FaLinkedinIn size={26} color="#039be5" />
        </IconItem>
      </SocialIconsContainer>
    </FooterLayout>
  </FooterContainer>
);

export default Footer;
