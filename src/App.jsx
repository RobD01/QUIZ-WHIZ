import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Emi & Mira's website</h1>
      <div>
        <img
          src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/google-quiz.jpg?width=595&height=400&name=google-quiz.jpg"
          alt=""
        />
        <img
          src="https://media.istockphoto.com/id/1221635138/vector/search-magnifying-glass-icon-symbol.jpg?s=612x612&w=0&k=20&c=x0lkDJ0GaM605PpTiQDgpL9q0gz4puiDTvClQCzgKtY="
          alt="che"
          className="w-50"
        />
      </div>
      <h1>QUIZ-WHIZ</h1>
      <p>
        This app has mostly any quiz or trivia you can mostly think of. ENJOY!{" "}
      </p>
      <a href="https://www.britannica.com/quiz/browse" target="_blank">
        <button>Quizzes</button>
      </a>
      <a href="https://scratch.mit.edu/users/Autumnfrost123/" target="_blank">
        <button>My Scratch Account</button>
      </a>
    </>
  );
}

export default App;
