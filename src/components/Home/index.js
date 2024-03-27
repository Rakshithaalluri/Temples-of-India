import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";

import {
  HomePageContainer,
  TemplesHomePage,
  TempleHomeImage,
  TempleHomeDescription,
  TempleCount,
  AddYourTempleButton,
  HomeDescriptionContent,
  FeaturedRecentlyContent,
  FeaturedContent,
  RecentlyEdited,
  TemplesContainer,
  TemplePlace,
  TempleImage,
  TempleCard,
  TempleName,
  TempleDescription,
  TagsContainer,
  TagButton,
  PostsContainer,
  PostNames,
  PostHeading,
} from "./styledComponents";

const TagsList = [
  {
    id: 1,
    tag: "Bhoodevi",
  },
  {
    id: 2,
    tag: "Mumbai",
  },
  {
    id: 3,
    tag: "Awasthi",
  },
  {
    id: 4,
    tag: "Shiva",
  },
  {
    id: 5,
    tag: "2022",
  },
  {
    id: 6,
    tag: "Kailasa",
  },
];

const Home = () => {
  return (
    <HomePageContainer>
      <Navbar />
      <TemplesHomePage>
        <TempleHomeImage
          src="https://res.cloudinary.com/djwd6ayk5/image/upload/v1711433774/NewHomeTemple_vajwy2.png"
          alt="Temple-img"
        />
        <TempleHomeDescription>
          <TempleCount> 7,50,000 Plus Temples and Counting </TempleCount>
          <AddYourTempleButton> Add Your Temple </AddYourTempleButton>
        </TempleHomeDescription>
      </TemplesHomePage>
      <HomeDescriptionContent>
        <FeaturedRecentlyContent>
          <Link to="/featured-temples">
            <FeaturedContent
              src="https://res.cloudinary.com/djwd6ayk5/image/upload/v1711436314/newFeatured_fupvg6.png"
              alt="featured"
            />
          </Link>
          <Link to="/recently-updated">
            <RecentlyEdited
              src="https://res.cloudinary.com/djwd6ayk5/image/upload/v1711436325/newRecentlyEdited_qigwdu.png"
              alt="recent-temples"
            />
          </Link>
        </FeaturedRecentlyContent>
        <TemplesContainer>
          <TempleCard>
            <TempleName> Padmavathi Temple </TempleName>
            <TemplePlace> Andhra Pradesh</TemplePlace>
            <TempleImage
              src="https://res.cloudinary.com/djwd6ayk5/image/upload/v1711436732/60b5ed3c2f749142cb504b08ba3f2245_1158_xcagns.jpg"
              alt="Padmavathi Temple"
            />
            <TempleDescription>
              {" "}
              It is believed that the goddess{" "}
            </TempleDescription>
          </TempleCard>
          <TempleCard>
            <TempleName> Maninath Brahmasthan Nonapur </TempleName>
            <TemplePlace> Uttar Pradesh</TemplePlace>
            <TempleImage
              src="https://templesofindia.org/assets/compressed/34afc7dac7c83fce10bf4ee3e75405ad_4452.jpg"
              alt="Maninath Brahmasthan Nonapur"
            />
            <TempleDescription> ....</TempleDescription>
          </TempleCard>
          <TempleCard>
            <TempleName> Ekambaranathar Temple </TempleName>
            <TemplePlace> Tamil Nadu </TemplePlace>
            <TempleImage
              src="https://templesofindia.org/assets/compressed/c67dcec15ea146d3a4deac93622614d0_37387.png"
              alt="Ekambaranathar Temple"
            />
            <TempleDescription>
              {" "}
              Legend has it that once parvati, the consort of shiva, wanted to
              expiate herself from sin by doing penance unde rthe temples
              ancient mango tree near vegavathi river. In order to test her
              devotion....{" "}
            </TempleDescription>
          </TempleCard>
          <TempleCard>
            <TempleName> Vijayadurga Temple </TempleName>
            <TemplePlace> Goa</TemplePlace>
            <TempleImage
              src="https://templesofindia.org/assets/compressed/28c4269f115e3f21d038ba1db90b573c_1297.jpg"
              alt="Vijayadurga Temple"
            />
            <TempleDescription>
              {" "}
              The Goddess is family deity as well as mostly considered a pallavi
              of many Brahmins. According to local legends, it was once said
              that Shri Shantadurga of Keloshi who is now worshipped in kavlem
              w...{" "}
            </TempleDescription>
          </TempleCard>
          <TempleCard>
            <TempleName> Nandi Mandap </TempleName>
            <TemplePlace> Andhra Pradesh</TemplePlace>
            <TempleImage
              src="https://templesofindia.org/assets/compressed/038e4a5a9f78853674df8ee9083489ef_1150.jpg"
              alt="Nandi Temple"
            />
            <TempleDescription>
              {" "}
              The Nandi temple is a Hindu temple located in Khajuroho city
              Madhya Pradhesh, India. It is dedicated to Nanadi, the bull which
              serves as the mount(vahna) of shiva, in hindu mythology, As a
              commo...{" "}
            </TempleDescription>
          </TempleCard>
          <TempleCard>
            <TempleName> Old Sreekanteshwara temple </TempleName>
            <TemplePlace> Kerala </TemplePlace>
            <TempleImage
              src="https://templesofindia.org/assets/compressed/8813f4d6ec49511348245b0b8beef8ee_1297.jpg"
              alt="Padmavathi Temple"
            />
            <TempleDescription>
              {" "}
              It is one of the ancient Shiva temples in Kerala. According to the
              renowned historian Elamkulam Kunjan Pillai, this temple existed
              even in the 9th century AD. This temple is the original abode of
              t....{" "}
            </TempleDescription>
          </TempleCard>
          <TempleCard>
            <TempleName> Thirullakkavu Sree Dharma Sastha Temple </TempleName>
            <TemplePlace> Kerala </TemplePlace>
            <TempleImage
              src="https://templesofindia.org/assets/compressed/052b14861fc60c404991d638a3d7da16_1297.jpeg"
              alt="Padmavathi Temple"
            />
            <TempleDescription>
              {" "}
              It is one of the ancient Shiva temples in Kerala. According to the
              renowned historian Elamkulam Kunjan Pillai, this temple existed
              even in the 9th century AD. This temple is the original abode of
              t....{" "}
            </TempleDescription>
          </TempleCard>
        </TemplesContainer>
        <PostsContainer>
          <PostHeading>Posts</PostHeading>
          <PostNames> 16 Divine Darshans of Unique Shivlingas </PostNames>
          <PostNames>
            {" "}
            Top 10 Tallest Statues of Hindu Gods in the World{" "}
          </PostNames>
          <PostNames>
            {" "}
            12 famous and beautiful Hindu Temples outside India{" "}
          </PostNames>
          <PostNames>
            {" "}
            10 Ancient Magnificent Sculptures of Hindu Gods{" "}
          </PostNames>
          <PostNames> Arumigu Subramaniya Swamy Temple, Tiruchendur </PostNames>
          <PostNames> Kopeshwar Temple </PostNames>
          <TagsContainer>
            {TagsList.map((eachTag) => (
              <TagButton key={eachTag.id}> {eachTag.tag}</TagButton>
            ))}
          </TagsContainer>
        </PostsContainer>
      </HomeDescriptionContent>
      <Footer />
    </HomePageContainer>
  );
};

export default Home;
