import { useEffect, useState } from "react";
import getOffset from "./utils/getOffset";
import "./App.css";
import { cards, dropdowns } from "./configs";

function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectOption, setSelectedOption] = useState(null);

  const handleOnClickCard = (e) => {
    const target = e.currentTarget;
    target.classList.add("selected");

    setSelectedCard(target.id);

    //animation
    //target translateXY to the center
    const { translateX, translateY } = getOffset(target);

    //other cards opacity to 0
    const cardElements = document.querySelectorAll(".card");
    cardElements.forEach((card) => {
      if (card !== target) {
        card.style.opacity = 0;
      }
    });

    //target translateXY to the center after 0.8s
    setTimeout(() => {
      target.style.transform = `translate(${translateX}px, ${translateY}px)`;
    }, 800);

    //.cards-wrapper opacity to 0 and display none after 4.5s
    const cardsWrapper = document.querySelector(".cards-wrapper");
    const selectedCard = document.querySelector(".selected-card");

    setTimeout(() => {
      cardsWrapper.style.opacity = "0";
    }, 4500);

    setTimeout(() => {
      cardsWrapper.style.display = "none";
      selectedCard.style.display = "block";
    }, 5500);

    //.select-wrapper scaleY to 1 after 7.2s
    setTimeout(() => {
      const selectWrapper = document.querySelector(".select-wrapper");
      selectWrapper.style.transform = "scaleY(1)";
    }, 7200);
  };

  const handleOnClickOption = (e) => {
    const target = e.currentTarget;
    target.classList.add("selected");

    setSelectedOption(target.textContent);
  };

  useEffect(() => {
    if (selectOption) {
      //framePlaceHolder scaleX to 1 after 1.5s
      setTimeout(() => {
        const framePlaceHolder = document.querySelector(".frame-place-holder");
        framePlaceHolder.style.transform = "scaleX(1)";
      }, 1500);

      //select-wrapper scaleY to 0 after 2s
      setTimeout(() => {
        const selectWrapper = document.querySelector(".select-wrapper");
        selectWrapper.style.transform = "scaleY(0)";
      }, 1800);

      //framePlaceHolder scaleY to 0 after 2.5s
      setTimeout(() => {
        const framePlaceHolder = document.querySelector(".frame-place-holder");
        framePlaceHolder.style.transform = "scaleY(0)";
      }, 3000);

      const optionSelectWrapper = document.querySelector(
        ".option-select-wrapper"
      );

      //option-select-wrapper > text-frame scaleY to 0 after 3s
      setTimeout(() => {
        const textFrame = optionSelectWrapper.querySelector(".text-frame");
        textFrame.style.animation = "scaleDown 0.3s forwards";
      }, 3500);

      //option-select-wrapper > text-frame-outline scaleY to 0 after 3.3s
      setTimeout(() => {
        const textFrameOutline = optionSelectWrapper.querySelector(
          ".text-frame-outline"
        );
        textFrameOutline.style.animation = "scaleDown 0.3s forwards";
      }, 3700);
    }
  }, [selectOption]);

  return (
    <div className="App">
      {/* 四張圖卡 Start */}
      <div className="cards-wrapper">
        {cards.map((card, index) => (
          <div
            className="card"
            onClick={handleOnClickCard}
            id={card.id}
            key={card.id}
          >
            <div id={`card-${card.id}`}>
              <div className={`animated-line animated-line-${index}`}>
                <div className="animation-card ">
                  <div className="content-wrapper">{card.svg}</div>
                </div>
              </div>
              <div className="text-frame-wrapper">
                <div className="text-frame"></div>
                <div className="text-frame-outline"></div>
              </div>
              <div className="text-frame-content">{card.title}</div>
            </div>
          </div>
        ))}
      </div>
      {/* 四張圖卡 End */}

      {/* 選單下拉 Start */}
      <div className="selected-card">
        {selectedCard && (
          <div className="option-select-wrapper">
            <div className="text-frame-wrapper">
              <div className="text-frame">
                <p className="frame-place-holder">
                  {selectOption ? selectOption : "\u00A0"}
                </p>
              </div>
              <div className="text-frame-outline"></div>
            </div>
            <div className="select-wrapper">
              {dropdowns.map((item) => (
                <div
                  className="option-item"
                  onClick={handleOnClickOption}
                  key={item.id}
                >
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* 選單下拉 End */}
    </div>
  );
}

export default App;
