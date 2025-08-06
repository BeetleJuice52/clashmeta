import React from "react";

const CardImage = ({ name }) => {
  const formatName = name.toLowerCase().replace(/[^a-z0-9]/g, '-');
  const src = `https://royaleapi.com/static/img/cards/${formatName}.png`;

  return (
    <img
      src={src}
      alt={name}
      title={name}
      className="w-10 h-10 object-contain border rounded bg-white shadow-sm"
      onError={(e) => { e.target.style.display = 'none'; }}
    />
  );
};

export default CardImage;
