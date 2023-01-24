import React, { FC } from "react";
import Title from "../UI/Title/Title";
import "./Works.scss";
import WorkLink from "../UI/WorkLink/WorkLink";
import Lazy from "./img/lazy.png";
import Court from "./img/Court.png";
import DustCity from "./img/DustCity.png";
import dsShop from "./img/dsShop.png";

const ProjectList = [
  {
    title:
      'Very beautiful site for the game "Football Manager" on the blockchain',
    description:
      "Experience the future of gaming with Blockchain Football Manager. This cutting-edge website combines the excitement of football management with the security and transparency of blockchain technology. As a Front End developer, I have created an intuitive and user-friendly interface that allows you to manage your own football team and compete with other users on the blockchain.",
    stack: "HTML5, CSS3, JavaScript, Firebase",
    img: Lazy,
    websiteLink: "https://lazy.soccer/",
  },
  {
    title: "The Premier Cryptocurrency Betting Platform",
    description:
      "It is the leading cryptocurrency betting platform, which I  developed as a FullStack Developer. It offers a secure and seamless experience for users to place bets on their favorite sports and events using various cryptocurrencies. The platform is easy to navigate and features live odds and updates, making it the go-to destination for sports betting enthusiasts. The website was tested by real-world performance during the 2022 FIFA World Cup, where more than 100,000 blockchain transactions were made through the website, which highlights its reliability and scalability. ",
    stack:
      "FrontEnd: React, TypeScript, Redux. BackEnd: NodeJS, MongoDB, Express.js ",
    img: Court,
    websiteLink: "https://court.dustcity.world/",
  },
  {
    title: "Online store",
    description:
      "Online store for the Dust City brand, where I worked as a full-stack developer. Users can make purchases with cryptocurrencies. Developed authorization, personal account, catalogs and all interaction with the blockchain.",
    stack:
      "FrontEnd: React, TypeScript, Redux. BackEnd: NodeJS, MongoDB, Express.js, Heroku",
    img: dsShop,
    codeLink: "https://github.com/Stepanishin/dsShop",
    websiteLink: "https://ds-shop.vercel.app/",
  },
  {
    title: "Dust City: The Next Generation of Digital Collectibles.",
    description:
      "Very convenient and bright web site in Cyberpunk style for DustCity company. I wrote my own animation for the site and many other interesting solutions",
    stack: "HTML5, CSS3, Javascript, JQuery",
    img: DustCity,
    codeLink: "https://github.com/Stepanishin/DustCity",
    websiteLink: "https://dustcity.world/",
  },
];

const Works: FC = () => {
  return (
    <section className="container works_container">
      <Title title={"Projects I've worked on:"} className={"title"} />
      {ProjectList.map((item, index) => {
        return <Item key={index} {...item} />;
      })}
    </section>
  );
};

export default Works;

interface ItemProps {
  title?: string;
  description?: string;
  stack?: string;
  img?: string;
  codeLink?: string;
  websiteLink?: string;
}

const Item: FC<ItemProps> = ({
  title,
  description,
  stack,
  img,
  websiteLink,
  codeLink,
}) => {
  return (
    <div className="works_item_container">
      <div className="works_item_description_container">
        <h3 className="works_item_title">{title}</h3>
        <p>{description}</p>
        <p>{stack}</p>
        <div className="works_item_links_container">
          {websiteLink && <WorkLink title={"WEBSITE"} url={websiteLink} />}
          {codeLink && <WorkLink title={"GITHUB"} url={codeLink} />}
        </div>
      </div>
      <img className="works_item_img" src={img} alt="" />
    </div>
  );
};
