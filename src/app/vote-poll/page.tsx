"use client";
import React, { useState } from "react";

interface Poll {
  question: string;
  options: string[];
  correctOption: string;
}

const VotePage: React.FC = () => {
  const [polls, setPolls] = useState<Poll[]>([
    {
      question: "What is your favorite programming language?",
      options: ["JavaScript", "Python", "Java", "C++"],
      correctOption: "Python",
    },
  ]);

  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string | null }>({});
  const [votes, setVotes] = useState<{ [key: string]: number }>({});

  const handleSelect = (question: string, option: string) => {
    setSelectedOptions((prevSelected) => ({
      ...prevSelected,
      [question]: option,
    }));
  };

  const handleSubmit = (question: string) => {
    if (!selectedOptions[question]) return;
    const selectedOption = selectedOptions[question]!;
    setVotes((prevVotes) => ({
      ...prevVotes,
      [`${question}-${selectedOption}`]: (prevVotes[`${question}-${selectedOption}`] || 0) + 1,
    }));
  };

  return (
    <div className="bg-zinc-900 flex text-black justify-center items-center h-screen font-Montserrat">
      <div className="bg-zinc-800 border border-zinc-700 rounded-2xl p-10 py-12 flex flex-col items-center gap-6 shadow-lg w-[500px] max-w-full">
        <h2 className="text-gray-300 text-xl font-semibold mb-4">Vote on a Poll</h2>
        {polls.map((poll, index) => (
          <div key={index} className="bg-zinc-700 p-4 rounded-lg mb-3 w-full">
            <p className="text-lg font-bold p-2 text-gray-200">{poll.question}</p>
            <ul className="mt-2">
              {poll.options.map((opt, i) => (
                <li key={i} className="flex items-center p-2 rounded bg-zinc-600 text-gray-200 m-3">
                  <input
                    type="radio"
                    name={poll.question}
                    value={opt}
                    checked={selectedOptions[poll.question] === opt}
                    onChange={() => handleSelect(poll.question, opt)}
                    className="mr-2"
                  />
                  {opt} ({votes[`${poll.question}-${opt}`] || 0} votes)
                </li>
              ))}
            </ul>
            <button
              className="bg-zinc-50 hover:bg-zinc-500 mt-2 text-zinc-900 text-[15px] font-semibold rounded-lg py-2 px-6 w-full disabled:opacity-50"
              onClick={() => handleSubmit(poll.question)}
              disabled={!selectedOptions[poll.question]}
            >
              Submit Vote
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VotePage;
