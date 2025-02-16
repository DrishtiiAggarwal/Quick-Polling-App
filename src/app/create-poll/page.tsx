"use client";

import React, { useState } from "react";

const Page: React.FC = () => {
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState<string[]>([]);
  const [polls, setPolls] = useState<{ title: string; question: string; options: string[] }[]>([]);

  const handleOptionCount = () => {
    const count = parseInt(prompt("How many options?") || "0", 10);
    if (!isNaN(count) && count > 0) {
      setOptions(Array(count).fill(""));
    }
  };

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = () => {
    if (!title || !question || options.length === 0) {
      alert("Please fill in all fields before submitting.");
      return;
    }
    setPolls([...polls, { title, question, options }]);
    setTitle("");
    setQuestion("");
    setOptions([]);
  };

  return (
    <div className="bg-zinc-900 flex text-black justify-center items-center h-screen font-Montserrat">
      <div className="bg-zinc-800 border border-zinc-700 rounded-2xl p-10 py-12 flex flex-col items-center gap-6 shadow-lg w-[500px] max-w-full">
        <div className="text-gray-300 font-normal text-[28px]">Create a Poll</div>
        <p className="text-gray-400 text-sm text-center">Enter your poll details</p>

        {/* Title Input */}
        <input
          className="placeholder-zinc-500 bg-zinc-800 border border-zinc-700 rounded-lg py-3 px-6 focus:outline-none w-full text-zinc-200"
          placeholder="Enter poll title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Question Input */}
        <input
          className="placeholder-zinc-500 bg-zinc-800 border border-zinc-700 rounded-lg py-3 px-6 focus:outline-none w-full text-zinc-200"
          placeholder="Enter your question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        {/* Set Number of Options */}
        <button
          className="bg-zinc-700 hover:bg-zinc-600 text-gray-300 font-semibold rounded-lg py-2 px-4 w-full"
          onClick={handleOptionCount}
        >
          How many options?
        </button>

        {/* Options Input Fields */}
        {options.map((option, index) => (
          <input
            key={index}
            className="placeholder-zinc-500 bg-zinc-800 border border-zinc-700 rounded-lg py-3 px-6 focus:outline-none w-full text-zinc-200"
            placeholder={`Option ${index + 1}`}
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
          />
        ))}

        {/* Submit Button */}
        <button
          className="bg-zinc-50 hover:bg-zinc-500 mt-2 text-zinc-900 text-[15px] font-semibold rounded-lg py-3 px-12 w-full"
          onClick={handleSubmit}
        >
          Submit Poll
        </button>
      </div>

      {/* Display Created Polls */}
      {polls.length > 0 && (
        <div className="mt-6 ml-4 w-96">
          <h2 className="text-gray-300 text-xl font-semibold mb-4">Created Polls</h2>
          {polls.map((poll, index) => (
            <div key={index} className="bg-zinc-700 p-4 rounded-lg mb-3">
              <p className="text-lg font-bold text-gray-200">{poll.title}</p>
              <p className="text-md text-gray-300">{poll.question}</p>
              <ul className="mt-2">
                {poll.options.map((opt, i) => (
                  <li key={i} className="p-2 rounded mb-3 bg-zinc-600 text-gray-200">
                    {opt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
