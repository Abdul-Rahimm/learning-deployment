"use client";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  function EditWord(str) {
    let words = str.replace(/_/g, " ");
    words = words.charAt(0).toUpperCase() + words.slice(1);

    for (let i = 1; i < words.length; i++) {
      if (words[i] == " ") {
        const tem = words.slice(0, i) + " ";
        const tem2 = words.charAt(i + 1).toUpperCase();
        const tem3 = words.slice(i + 2);

        words = tem + tem2 + tem3;
        // i++; // skip the next character to avoid double-capitalization
      }
    }
    return words;
  }

  return (
    <div>
      <div className="w-3/4 mx-auto my-2 rounded-lg bg-sky-200 flex items-center justify-center p-4 gap-1">
        <label>Type here: </label>
        <input
          className="border px-2 py-1"
          type="text"
          placeholder="input here..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="border px-2 py-1 bg-blue-500 text-white"
          onClick={() => {
            setList([...list, EditWord(value)]);
            setValue("");
          }}
        >
          Save
        </button>
        <button
          className="border px-2 py-1 bg-blue-500 text-white"
          onClick={() => {
            setList([]);
            setValue("");
          }}
        >
          Clear
        </button>
      </div>

      <div className="flex flex-row w-2/3 mx-auto gap-2">
        <div className="bg-teal-200 p-3 mx-auto rounded-lg text-center">
          <p>Current value: {value}</p>
        </div>
        <div className="bg-teal-200 p-3 mx-auto rounded-lg text-center grow">
          <p>Current list</p>
          <ul>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
