import {
  AboutHeading,
  TempleDescription,
  Profiles,
  ProfileName,
  TemplesDescription,
  DenoteButton,
} from "./styledComponents";
import Footer from "../Footer";
import Navbar from "../Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <AboutHeading> About Temples of India </AboutHeading>
      <TemplesDescription>
        Temples of India is a devotees led movement to create a comprehensive
        and detailed online repository of temples across the Bharatvarsha.
        Temples of India is a not-for-profit knowledge platform to document and
        store possibly all details of temples across Bharatvarsha. We aim to
        present each detail related to the temple such as its location, images
        of the temple, videos, open and close timings, etc contributed by
        devotees like you. You can search temples located nearby but unknown to
        you. Our goal is to acquaint users with the rich heritage of our country
        whose core lies in the temples. We are a group of students from IIT
        Bombay mentored by Prof. Ganesh Ramakrishnan .
      </TemplesDescription>
      <p>Core Team: </p>
      <Profiles
        src="https://res.cloudinary.com/djwd6ayk5/image/upload/v1711449594/ayush_yaktc4.jpg"
        alt="arun"
      />
      <ProfileName>Ayush Maheshwari</ProfileName>
      <Profiles
        src="https://res.cloudinary.com/djwd6ayk5/image/upload/v1711449602/arun_kboqpl.jpg"
        alt="ayush"
      />
      <ProfileName> Arun Jayaramakrishnan</ProfileName>
      <AboutHeading> ACKNOWLEDGEMENTS : </AboutHeading>
      <ProfileName>
        Prof. Saketha Nath <br />
        Prof. Ravi Pooviah <br />
        Aditya Verma
        <br />
        Bhagyarsh Dhumal <br />
        Anjay Goel (Android Development) <br />
        Prateek (App Backend) <br />
        Siddharth Raja (Web Backend) <br />
        Aman Kumar(Web Frontend) <br />
        Arjun Sable
      </ProfileName>
      <TemplesDescription>
        We thank <ProfileName>Mangilal Godarafor</ProfileName> generous donation
        of $1000 (2022-23). <br />
        We thank <ProfileName>Parmanand Ahirwar</ProfileName> for generous
        donation of $1000 (2021-22).
      </TemplesDescription>
      <AboutHeading> Support Temples of India </AboutHeading>
      <TemplesDescription>
        Temples of India is a non-profit cause which is being run by students
        and devotees like you. We are completely dependent on devotees for
        preserving our rich temple heritage about temples in the country. Do
        your little help in preserving the glory of Sanatan Dharma for eternity
        by either adding temples you love and if possible, help us monetarily.
      </TemplesDescription>
      <DenoteButton>Donate to us </DenoteButton>
      <TemplesDescription>
        Are you a Techie? You could help us by joining our development team. Let
        us know your interest by mailing at{" "}
        <ProfileName>devs@templesofindia.org</ProfileName>
      </TemplesDescription>
      <TemplesDescription>
        For any other queries, mail us at contact@templesofindia.org
      </TemplesDescription>
      <Footer />
    </>
  );
};

export default About;
