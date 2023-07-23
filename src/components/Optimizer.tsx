import React, { useState } from "react";

const Optimizer: React.FC = () => {
  const [result, setResult] = useState<string>("");
  const [input, setInput] = useState<string>("");
  return (
    <div className="-mt-20 flex space-x-20 !text-[#333333]">
      <div>
        <h3 className="mb-2 text-[21px] font-semibold">Input:</h3>
        <textarea
          cols={50}
          rows={19}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="resize-none border-[4px] border-[#0A1D37] p-1 outline-none"
        ></textarea>
      </div>
      <div className="flex flex-col justify-start">
        <h3 className="mb-2 text-[21px] font-semibold">Result:</h3>
        <textarea
          cols={50}
          rows={19}
          disabled
          value={result}
          className="resize-none border-[4px] border-[#0A1D37] bg-white px-2 outline-none"
        ></textarea>
        <button className="my-3 ml-auto rounded-[4px] bg-[#38A3D1] px-6 py-2">
          Optimize
        </button>
      </div>
    </div>
  );
};

export default Optimizer;
