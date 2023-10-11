import React, { useState } from 'react';

function Image(props) {
  // eslint-disable-next-line react/destructuring-assignment, react/prop-types
  const [src, setSrc] = useState(props.src);
  const errorHandler = () => {
    // eslint-disable-next-line react/destructuring-assignment, react/prop-types
    setSrc(`https://picsum.photos/${props.width ?? 200}/${props.height ?? 200}`);
  };
  return (
    // eslint-disable-next-line react/destructuring-assignment, react/prop-types
    <div style={{ width: `${props.width}px`, height: `${props.height}px` }}>
      <img
        onError={errorHandler}
        src={src}
        alt=""
        style={{ objectFit: 'cover', width: 'inherit', height: 'inherit' }}
      />
    </div>
  );
}
export default Image;
