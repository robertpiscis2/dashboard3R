import React from "react";
import CardSmall from "./card-small";
import "./overview.css";

const cardSmallList = [
  {
    key: 1,
    icon: "../images/icon-facebook.svg",
    pageViews: "87",
    growth: 3,
  },
  {
    key: 2,
    icon: "../images/icon-twitter.svg",
    pageViews: "52",
    growth: 2257,
  },
  {
    key: 3,
    icon: "../images/icon-instagram.svg",
    pageViews: "5462",
    growth: 1375,
  },
  {
    key: 4,
    icon: "../images/icon-youtube.svg",
    pageViews: "117",
    growth: 303,
  },
];

function Overview() {
  return (
    <section className="overview">
      <div className="wrapper">
        <h2>Overview - Today</h2>
        <div className="grid">
          {cardSmallList.map(({ key, icon, pageViews, growth }) => (
            <CardSmall
              key={key}
              icon={icon}
              pageViews={pageViews}
              growth={growth}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Overview;
