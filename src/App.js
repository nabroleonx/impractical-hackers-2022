import React, { useState, useEffect } from "react";
import "./App.css";
import DVDLogo from "./components/DVDLogo";
import GreetingModal from "./components/GreetingModal";
import TypingTest from "./components/TypingTest";
import { ThemeSelector } from "./components/ThemeSelector";

function App() {
  const [initializing, setInitializing] = useState(true);
  const [keyboard, setKeyboard] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInitializing(false);
    }, 10000);
  }, []);

  const toogleScreen = () => {
    setKeyboard(!keyboard);
  };

  return (
    <div>
      {initializing && <GreetingModal toogleScreen={toogleScreen} />}

      <div className="absolute mt-4 right-20">
        <ThemeSelector />
      </div>
      {keyboard ? <TypingTest /> : <DVDLogo />}
      <div className="absolute w-full bottom-8 flex justify-center mt-12">
        <button
          onClick={toogleScreen}
          className="relative text-sky-700 hover:animate-bounce"
        >
          {keyboard ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 210 107"
              fill="rgb(3 105 161)"
            >
              <path d="M118.895,20.346c0,0-13.743,16.922-13.04,18.001c0.975-1.079-4.934-18.186-4.934-18.186s-1.233-3.597-5.102-15.387H81.81H47.812H22.175l-2.56,11.068h19.299h4.579c12.415,0,19.995,5.132,17.878,14.225c-2.287,9.901-13.123,14.128-24.665,14.128H32.39l5.552-24.208H18.647l-8.192,35.368h27.398c20.612,0,40.166-11.067,43.692-25.288c0.617-2.614,0.53-9.185-1.054-13.053c0-0.093-0.091-0.271-0.178-0.537c-0.087-0.093-0.178-0.722,0.178-0.814c0.172-0.092,0.525,0.271,0.525,0.358c0,0,0.179,0.456,0.351,0.813l17.44,50.315l44.404-51.216l18.761-0.092h4.579c12.424,0,20.09,5.132,17.969,14.225c-2.29,9.901-13.205,14.128-24.75,14.128h-4.405L161,19.987h-19.287l-8.198,35.368h27.398c20.611,0,40.343-11.067,43.604-25.288c3.347-14.225-11.101-25.293-31.89-25.293h-18.143h-22.727C120.923,17.823,118.895,20.346,118.895,20.346L118.895,20.346z" />
              <path d="M99.424,67.329C47.281,67.329,5,73.449,5,81.012c0,7.558,42.281,13.678,94.424,13.678c52.239,0,94.524-6.12,94.524-13.678C193.949,73.449,151.664,67.329,99.424,67.329z M96.078,85.873c-11.98,0-21.58-2.072-21.58-4.595c0-2.523,9.599-4.59,21.58-4.59c11.888,0,21.498,2.066,21.498,4.59C117.576,83.801,107.966,85.873,96.078,85.873z" />
              <polygon points="182.843,94.635 182.843,93.653 177.098,93.653 176.859,94.635 179.251,94.635 178.286,102.226 179.49,102.226 180.445,94.635 182.843,94.635" />
              <polygon points="191.453,102.226 191.453,93.653 190.504,93.653 187.384,99.534 185.968,93.653 185.013,93.653 182.36,102.226 183.337,102.226 185.475,95.617 186.917,102.226 190.276,95.617 190.504,102.226 191.453,102.226" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="rgb(3 105 161)"
            >
              <path d="M22 4v10h-20v-10h20zm2-2h-24v14h24v-14zm-18 3h-3v2h3v-2zm3 0h-2v2h2v-2zm3 0h-2v2h2v-2zm3 0h-2v2h2v-2zm3 0h-2v2h2v-2zm3 0h-2v2h2v-2zm-4 6h-10v2h10v-2zm4-3h-4v2h4v-2zm-14 0h-4v2h4v-2zm3 0h-2v2h2v-2zm3 0h-2v2h2v-2zm3 0h-2v2h2v-2zm0 10l-4 4-4-4h8z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

export default App;
