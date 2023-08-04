import { useEffect, useState } from "react";
import callToActionData from "../data/CallToAction.json";
import CallToAction from "./CallToAction";

const Banner = () => {
  const [callToAction, setCallToAction] = useState(callToActionData[0]);
  const [index, setIndex] = useState(0);

  const getRandomCallToAction = () => {
    let nuevoIndex;
    do {
      nuevoIndex = Math.floor(Math.random() * callToActionData.length);
    } while (nuevoIndex === index);
    setCallToAction(callToActionData[nuevoIndex]);
    setIndex(nuevoIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getRandomCallToAction();
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div>
      <div className="bg-white p-5 text-center">
        <CallToAction
          key={callToAction.id}
          title={callToAction.title}
          subtitle={callToAction.subtitle}
        />
      </div>
    </div>
  );
};

export default Banner;
