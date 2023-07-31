import React from 'react';

const Picture = ({ src, isSelected, onClick }) => {
  const pictureStyle = {
    border: isSelected ? "5px solid Red" : "none"
  };

  return (
    <img
      src={src}
      alt="Option"
      style={pictureStyle}
      onClick={onClick}
    />
  );
};

export default Picture;