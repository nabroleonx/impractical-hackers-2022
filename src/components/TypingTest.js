import { useEffect, useState } from "react";
import { data } from "./data";
import Result from "./Result";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const TypingTest = () => {
  const [languageChoice, setLanguageChoice] = useState(Object.keys(data)[0]);

  const [userInput, setUserInput] = useState([]);

  const [initialWords, setInitialWords] = useState(
    data[languageChoice][
      Math.floor(Math.random() * data[languageChoice].length)
    ].split(" ")
  );

  const [initialTimer, setInitialTimer] = useState(30);
  const [timer, setTimer] = useState(initialTimer);
  const [start, setStart] = useState(false);
  const [wpm, setWpm] = useState(undefined);
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [length, setLength] = useState(initialWords[0].length);
  const [counter, setCounter] = useState(0);
  const [fullCounter, setFullCounter] = useState(0);

  const Only_letters_and_symbols = [
    8, 9, 32, 40, 41, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68,
    69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87,
    88, 89, 90, 186, 187, 188, 189, 219, 220, 221, 222,
  ];

  const timerButtons = [10, 15, 20, 30, 60];

  const restart = () => {
    setInitialWords(
      data[languageChoice][
        Math.floor(Math.random() * data[languageChoice].length)
      ].split(" ")
    );
    setInitialTimer(initialTimer);
    setUserInput([]);
    setStart(false);
    setTimer(initialTimer);
    setWpm(undefined);
    setLength(initialWords[0].length);
    setWordIndex(0);
    setLetterIndex(0);
    setCounter(0);
    setFullCounter(0);
  };

  const handleUserInput = (event) => {
    if (Only_letters_and_symbols.includes(event.which)) {
      if (event.which === 8) {
        if (letterIndex === 0) return;
        else {
          const newTab = [...userInput];

          newTab.splice(userInput.length - 1, 1);
          setUserInput([...newTab]);
          setLetterIndex((prevState) => prevState - 1);
          setCounter(counter - 1);
          setFullCounter(fullCounter - 1);
        }
      } else if (event.which === 9) {
        event.preventDefault();
        restart();
      } else {
        setStart(true);
        setCounter(counter + 1);
        setFullCounter(fullCounter + 1);
        setLetterIndex(letterIndex + 1);

        if (event.key === initialWords.join(" ").split("")[userInput.length]) {
          setUserInput([
            ...userInput,
            {
              letter: event.key,
              valid: true,
              key: wordIndex.toString() + letterIndex.toString(),
            },
          ]);
        } else {
          setUserInput([
            ...userInput,
            {
              letter: event.key,
              valid: false,
              key: wordIndex.toString() + letterIndex.toString(),
            },
          ]);
        }

        if (letterIndex === length) {
          setLetterIndex(0);
          setWordIndex(wordIndex + 1);
        }
      }
    } else return;
  };

  const changeLanguage = (language) => {
    setLanguageChoice(language);
  };

  const changeTimer = (time) => {
    if (!start) setInitialTimer(time);
    else return false;
  };

  useEffect(() => {
    document.addEventListener("keydown", handleUserInput);
    return () => document.removeEventListener("keydown", handleUserInput);
  }, [userInput]);

  useEffect(() => {
    if (!start || !timer) return;

    const interval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [start, timer]);

  useEffect(() => {
    if (timer === 0) {
      const filtered = userInput.filter(
        (word) => word.letter.trim() && word.valid
      );
      if (filtered.length === 0) {
        setWpm(1);
      } else setWpm((filtered.length / 4) * (60 / initialTimer));
    }
  }, [timer]);

  useEffect(() => {
    setTimer(initialTimer);
  }, [initialTimer]);

  useEffect(() => {
    const myLength = initialWords[wordIndex].length;
    setLength(myLength);
  }, [wordIndex]);

  useEffect(() => {
    restart();
  }, [languageChoice]);

  return (
    <>
      {!wpm ? (
        <>
          <div
            className={`min-h-full px-[calc((100%)/8)] text-sm font-thin  py-16 sm:py-52 `}
          >
            {start && (
              <p className="text-sky-500 text-xl mt-6 font-normal">{timer}</p>
            )}

            <div className="mx-auto max-w-max">
              <main className="sm:flex">
                <div className="relative mt-10 md:mt-4 flex flex-wrap items-center justify-between w-full my-auto">
                  {initialWords.map((word, i) => {
                    return (
                      <span key={i} className="whitespace-nowrap inline-block">
                        {word
                          .split("")
                          .concat(" ")
                          .map((letter, j) => {
                            return (
                              <span
                                key={j}
                                style={{
                                  color: !userInput.find(
                                    (word) =>
                                      word.key === i.toString() + j.toString()
                                  )
                                    ? "#585c5c"
                                    : userInput.find(
                                        (word) =>
                                          word.key ===
                                          i.toString() + j.toString()
                                      ) &&
                                      userInput.find(
                                        (word) =>
                                          word.key ===
                                          i.toString() + j.toString()
                                      ).valid
                                    ? "white"
                                    : "#ff392b",
                                }}
                                className="inline-block text-xl tracking-wide relative [word-spacing:0.16rem]"
                              >
                                {letter === " " ? "\u00a0" : letter}
                                <div
                                  style={{
                                    display:
                                      userInput.find(
                                        (word) =>
                                          word.key ===
                                          i.toString() + j.toString()
                                      ) &&
                                      userInput.find(
                                        (word) =>
                                          word.key ===
                                          i.toString() + j.toString()
                                      ).key === userInput[fullCounter - 1].key
                                        ? "block"
                                        : "none",
                                  }}
                                  className="animate-pulse absolute h-[80%] w-[2px] rounded bg-sky-600 top-2/3 -translate-y-[50%] right-0"
                                ></div>
                              </span>
                            );
                          })}
                      </span>
                    );
                  })}
                </div>
              </main>
            </div>
            <div className="flex justify-center mt-12">
              <ArrowPathIcon
                onClick={() => restart()}
                className="h-6 w-6 text-sky-500 -translate-x-1/2 cursor-pointer"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <p className="text-slate-600">Press tab to restart</p>
          </div>

          <div className="absolute isolate top-10 left-1/2 inline-flex items-center -translate-x-1/2 text-md text-slate-400">
            Time:
            {timerButtons.map((timerBtn, index) => (
              <button
                onClick={() => changeTimer(timerBtn)}
                key={index}
                className={classNames(
                  index === 0 && "rounded-l-md ml-2",
                  index === timerButtons.length - 1 && "rounded-r-md",
                  timerBtn === initialTimer && "bg-slate-700",
                  "relative inline-flex items-center border border-slate-700 text-slate-500 px-4 py-2 text-sm font-medium focus:z-10"
                )}
              >
                {timerBtn}
              </button>
            ))}
          </div>

          <div className="absolute isolate top-28 left-1/2 inline-flex items-center -translate-x-1/2 text-md text-slate-400">
            Language:
            {Object.keys(data).map((language, index) => (
              <button
                onClick={() => changeLanguage(language)}
                key={index}
                className={classNames(
                  index === 0 && "rounded-l-md ml-2",
                  index === Object.keys(data).length - 1 && "rounded-r-md",
                  language === languageChoice && "bg-slate-700",
                  "relative inline-flex items-center border border-slate-700 text-slate-500 px-4 py-2 text-sm font-medium focus:z-10"
                )}
              >
                {language}
              </button>
            ))}
          </div>
        </>
      ) : (
        <Result wpm={wpm} restart={restart} />
      )}
    </>
  );
};

export default TypingTest;
