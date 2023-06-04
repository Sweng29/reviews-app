import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import "./App.css";
import people from "./data";

function App() {
  const [index, setIndex] = useState(0);
  const { id, name, image, job, text } = people[index];

  const previousPerson = () => {
    return setIndex((index) => {
      return (index - 1 + people.length) % people.length;
    });
  };
  const nextPerson = () => {
    return setIndex((index) => {
      return (index + 1) % people.length;
    });
  };

  const surpriseMe = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) randomNumber = index + 1;
    const newIndex = randomNumber % people.length;
    setIndex(newIndex);
  };

  return (
    <>
      <main>
        <article className="review">
          <div className="img-container">
            <img src={image} alt={name} className="person-img" />
            <span className="quote-icon">
              <FaQuoteRight />
            </span>
          </div>
          <h4 className="author">{name}</h4>
          <p className="job">{job}</p>
          <p className="info">{text}</p>
          <div className="btn-container">
            <button className="prev-btn" onClick={previousPerson}>
              <FaChevronLeft />
            </button>
            <button className="next-btn" onClick={nextPerson}>
              <FaChevronRight />
            </button>
          </div>
          <button className="btn btn-hipster" onClick={surpriseMe}>
            Surprise me
          </button>
        </article>
      </main>
    </>
  );
}

export default App;
