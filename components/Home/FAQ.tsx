"use client";

import { useRef, useState } from "react";

const FaqsCard = (props) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b"
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="text-gray-500">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

export const FAQ = () => {
  const faqsList = [
    {
      q: "What is My Business Union platform?",
      a: "My Business Union Platform is a platform where you will be able to enhance your performance through learning As you show your talents on Facebook, Instagram and tiktok etc like that you could able to show your talents in Yesnet Digital E-learning Platform as it is a digital marketing platform where you can learn. Besides learning you will be able to improve your work ability or performance.",
    },
    {
      q: "Do we need any admission fees ?",
      a: "Yes you need to pay admission fees for taking the course , product or services",
    },
    {
      q: "Can we do this from the comfort of our home ?",
      a: "Yes you can take this course or services from your home only because it's is a online process",
    },
    {
      q: "What kind of documents and gadgets do we need to do this Course ?",
      a: "There's not much requirements you will need for doing this Courses you just need an electronic device like a mobile or a laptop, a steady internet connection.",
    },
    {
      q: "Is this a part-time or a full-time Work?",
      a: "It's not a work or its not a job it's only a learning and earning process you need to join here as a learner besides of learning you will be able to earn selling some courses goods or services",
    },
  ];

  return (
    <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl text-gray-800 font-semibold">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto text-lg">
          Answered all frequently asked questions, Still confused? feel free to
          contact us.
        </p>
      </div>
      <div className="mt-14 max-w-2xl mx-auto">
        {faqsList.map((item, idx) => (
          <FaqsCard key={idx} faqsList={item} />
        ))}
      </div>
    </section>
  );
};
