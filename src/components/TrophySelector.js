import React from "react";

const TrophySelector = ({ current, onChange }) => {
  const ranges = [
    "0–999", "1000–1999", "2000–2999", "3000–3999",
    "4000–4999", "5000–5999", "6000–6999", "7000+"
  ];

  return (
    <div className="p-4">
      <label className="block text-sm font-medium mb-2">Trophy Range</label>
      <select
        value={current}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border rounded px-3 py-2"
      >
        {ranges.map((range) => (
          <option key={range} value={range}>{range}</option>
        ))}
      </select>
    </div>
  );
};

export default TrophySelector;
