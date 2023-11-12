import { infoCard } from "@/utils/data";
import React from "react";

const InfoCard = () => {
  return (
    <React.Fragment>
      {infoCard.map((el) => {
        return (
          <div className="card" key={el.id}>
            <div className="card-child">
              <span
                className="card-child__icon"
                style={{ background: `${el.color}` }}
              >
                {el.icon}
              </span>
              <div className="card-child__box">
                <h2 className="card-child__title">{el.title}</h2>
                <p className="card-child__number">{el.number}</p>
              </div>
            </div>
            <div className="card-bottom">
              <h2 className="card-bottom__text">{el.text}</h2>
              <div
                className="card-bottom__trading"
                style={{ background: `${el.tradingBg}` }}
              >
                <span>{el.arrowIcon}</span>
                {el.trading}
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default InfoCard;
