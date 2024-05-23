import { useState } from "react";
import "./App.scss";
import { contents } from "./data/content";

const App = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);

    console.log(index);
  };

  return (
    <div className="App">
      <h2>Show stuff based on index</h2>
      <div className="list">
        <ul>
          {contents.map((content, index) => (
            <h2
              key={index}
              className={activeIndex === index ? "active" : undefined}
              onClick={() => handleClick(index)}
            >
              {content.title}
            </h2>
          ))}
        </ul>
        <p>{contents[activeIndex].subTitle}</p>
      </div>
    </div>
  );
};

export default App;
