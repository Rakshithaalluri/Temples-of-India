import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #ffe240;
  height: 30vh;

  display: flex;
  justify-content: center;
`;

export const FooterLayout = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

export const WebsiteInfoContainer = styled.div``;

export const WebsiteNameLogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0px;
`;

export const SiteName = styled.p`
  color: #a4213c;
  font-size: 24px;
`;

export const SiteLogo = styled.img`
  height: 35px;
  width: 35px;
  margin-left: 18px;
`;

export const SiteDescription = styled.p`
  color: #a4213c;
  margin-top: 0px;
  font-size: 15px;
  font-weight: 400;
`;

export const QuickLinksContainer = styled.ul`
  padding-left: 0px;
`;

export const QuickLinkItem = styled.li`
  list-style-type: none;
  color: #a4213c;
  margin-top: 8px;
  cursor: pointer;
`;

export const SocialIconsContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  justify-content: space-between;
  width: 160px;
  margin-top: 30px;
`;

export const IconItem = styled.li`
  list-style-type: none;
  cursor: pointer;
`;
