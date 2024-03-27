import styled from "styled-components";

export const HomePageContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const TemplesHomePage = styled.div`
  display: flex;
  height: 90vh;
  width: 100%;
  background-color: #ffcc00;
`;
export const TempleHomeImage = styled.img`
  padding-left: 30px;
`;
export const TempleHomeDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const TempleCount = styled.h1`
  color: #990000;
  font-family: "Roboto";
  font-size: 40px;
`;
export const AddYourTempleButton = styled.button`
  color: #ffffff;
  background-color: #990000;
  height: 50px;
  font-size: 16px;
  width: 150px;
  border: none;
  outline: none;
  border-radius: 6px;
  cursor: pointer;
`;

export const HomeDescriptionContent = styled.div`
  display: flex;
  width: 100%;
  background-color: #f2f2f2;
`;
export const FeaturedRecentlyContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  height: 80%;
  // border: 1px red solid;
  margin-top: 40px;
`;
export const FeaturedContent = styled.img`
  height: 130px;
  width: 150px;
  margin: 20px;
`;
export const RecentlyEdited = styled.img`
  height: 130px;
  width: 150px;
`;
export const TemplesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-top: 70px;
`;
export const TempleCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0.5px 1px 5px 2px #d9d9d9;
  border-radius: 8px;
  margin: 10px;
`;
export const TempleName = styled.h1`
  color: #b32d00;
  font-size: 18px;
`;
export const TemplePlace = styled.p`
  color: #737373;
  font-size: 15px;
`;
export const TempleImage = styled.img``;
export const TempleDescription = styled.p`
  color: #737373;
  font-size: 15px;
`;

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  width: 25%;
  margin: 30px;
  max-width: 250px;
`;

export const PostHeading = styled.h1`
  color: #000000;
  font-size: 20px;
`;
export const PostNames = styled.p`
  color: #000000;
  font-size: 14px;
  font-weight: 500;
  border-bottom: 1px #000000 solid;
`;
export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
`;

export const TagButton = styled.button`
  background-color: #d9d9d9;
  height: 35px;

  border-radius: 20px;
  color: #737373;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 10px;
`;
