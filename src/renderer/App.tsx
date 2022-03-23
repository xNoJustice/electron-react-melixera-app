import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function Melixera() {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    setTotal(numbers.reduce((prev, next) => prev + next, 0));
  }, [numbers]);

  const reset = () => {
    setNumbers([]);
  };

  const onChange = (index: number, val: number) => {
    const list = [...numbers];
    if (val < 0) {
      list[index] = 1;
    } else if (val > 200) {
      list[index] = 200;
    } else {
      list[index] = val;
    }
    setNumbers(list);
  };

  return (
    <div className="flex flex-col">
      <button
        type="button"
        onClick={() => reset()}
        className="py-2 px-4 w-32 mx-auto bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
      >
        Reset
      </button>
      <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
        <div className="py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-indigo-600 text-white border-b border-gray-200 text-center text-sm uppercase font-normal"
                  >
                    NPCs
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-indigo-600 text-white border-b border-gray-200 text-center text-sm uppercase font-normal"
                  >
                    Option 1
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-indigo-600 text-white border-b border-gray-200 text-center text-sm uppercase font-normal"
                  >
                    Option 2
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-indigo-600 text-white border-b border-gray-200 text-center text-sm uppercase font-normal"
                  >
                    Option 3
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-indigo-600 text-white border-b border-gray-200 text-center text-sm uppercase font-normal"
                  >
                    Option 4
                  </th>
                </tr>
              </thead>
              <tbody>
                {[0, 1, 2, 3, 4, 5].map((key: number, index: number) => (
                  <tr key={key} className="bg-gray-800">
                    <td className=" px-1 py-1 border-b border-gray-200 text-sm w-52">
                      <div className="flex relative ">
                        <span className="rounded-l-md inline-flex  items-center px-3 border-t text-white border-l border-b  border-gray-300 shadow-sm text-sm">
                          {index + 1}. NPC
                        </span>
                        <input
                          type="number"
                          value={numbers[key] || ''}
                          onChange={(e) => {
                            onChange(index, parseInt(e.target.value, 10));
                          }}
                          className="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-gray-900 text-white placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        />
                      </div>
                    </td>
                    <td className=" px-1 py-1 border-b border-gray-200 text-white text-sm text-center">
                      {Number.isNaN(total / numbers[key]) ||
                      !Number.isFinite(total / numbers[key])
                        ? ''
                        : Math.round(total / numbers[key])}
                    </td>
                    <td className=" px-1 py-1 border-b border-gray-200 text-white text-sm text-center">
                      {Number.isNaN(total - numbers[key])
                        ? ''
                        : total - numbers[key]}
                    </td>
                    <td className=" px-1 py-1 border-b border-gray-200 text-white text-sm text-center">
                      {Number.isNaN(total + numbers[key])
                        ? ''
                        : total + numbers[key]}
                    </td>
                    <td className=" px-1 py-1 border-b border-gray-200 text-white text-sm text-center">
                      {Number.isNaN(total * numbers[key])
                        ? ''
                        : total * numbers[key]}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className=" px-1 py-1 border-b border-gray-200 text-white text-lg">
                    Total {Number.isNaN(total) ? '' : total}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Melixera />} />
      </Routes>
    </Router>
  );
}
