import React, { useState } from "react";

function ConfirmButton(props) {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () =>
    setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);

  return (
    <button onClick={handleConfirm} disabled={isConfirmed}>
      {isConfirmed ? "확인완료" : "확인하기"}
    </button>
  );
}

export default ConfirmButton;
