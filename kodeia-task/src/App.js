import { useState } from "react";

import Header from "./components/Header";
import CardOverlay from "./components/CardOverlay";
import FormOverlay from "./components/FormOverlay";
import IconCard from "./components/IconCard";

function App() {
  const [cardShown, setCardShown] = useState(false);
  const [overlayShown, setOverlayShow] = useState(false);

  return (
    <div className="relative max-w-xs mx-auto">
      <Header />
      <CardOverlay isShown={cardShown} closeCard={() => setCardShown(false)} />
      <FormOverlay isShown={overlayShown} />
      <section className="grid grid-cols-3 gap-5 px-4 my-6">
        <IconCard title="Premium Information" icon="bar" isActive />
        <IconCard title="Policy Value" icon="sheet" />
        <IconCard title="Policy Information" icon="report" isUrgent />
      </section>
      <section className="flex flex-col items-center justify-start mt-6 px-4">
        <img src="images/activate.gif" className="h-4/5 w-auto" alt="Activate your account" />
        <h3 className="text-center text-dark text-xl font-bold mt-4 mb-2">Your account needs to be activated</h3>
        <h6 className="text-center text-dark text-sm font-normal mb-2">
          To continue using our services please submit required information
        </h6>
        <button
          className="flex flex-row items-center justify-center mt-4 px-6 py-2 h-12 w-full rounded-md bg-primary text-light hover:shadow-lg transition-shadow duration-150"
          onClick={() => setOverlayShow(true)}>
          Submit details
        </button>
        <button
          className="flex flex-row items-center justify-center w-full h-8 text-dark text-xs text-center"
          onClick={() => setCardShown(true)}>
          how we handle your data
        </button>
      </section>
    </div>
  );
}

export default App;
