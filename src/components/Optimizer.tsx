/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */

import React, { useState } from "react";
import ButtonAnimation from "./ButtonAnimation";
const Optimizer: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<string>("");
  const [input, setInput] = useState<string>("");
  const RunOptimizer = async () => {
    if (input !== "") {
      setLoading(true);
      setResult("");
      const res = await fetch("/api/Ask", {
        body: JSON.stringify({ code: input }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const data = await res.json();
      setLoading(false);
      setResult(data.results);
    }
  };
  return (
    <div className=" flex flex-col space-y-10 py-10 !text-[#333333] lg:-mt-20 lg:flex-row lg:space-x-20 lg:space-y-0 lg:py-0">
      <div className="flex flex-col justify-start">
        <h3 className="mb-2 text-[21px] font-semibold">Input:</h3>
        <textarea
          value={input}
          cols={50}
          rows={19}
          placeholder="Enter Your Code Here"
          onChange={(e) => setInput(e.target.value)}
          className="flex resize-none border-[4px] border-[#0A1D37] p-2 outline-none"
        />
      </div>
      <div className="flex flex-col justify-start">
        <h3 className="mb-2 text-[21px] font-semibold">Result:</h3>
        <textarea
          disabled
          value={result}
          cols={50}
          rows={19}
          className="flex resize-none flex-wrap border-[4px] border-[#0A1D37] bg-white p-2 outline-none"
        />
        <button
          onClick={RunOptimizer}
          disabled={loading}
          className={`my-3 ml-auto !min-w-[64.03px] rounded-[4px] bg-[#4abdee] px-6 py-2 hover:bg-[#38A3D1] ${
            loading ? "cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          {loading ? <ButtonAnimation /> : <p>Optimize</p>}
        </button>
      </div>
    </div>
  );
};

export default Optimizer;
