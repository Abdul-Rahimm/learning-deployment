"use client";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

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
            setList([...list, value]);
            setValue("");
          }}
        >
          Save
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
