import React from "react";

export const Alert = ({ error, mensaje, color }) => {
  return (
    <div className={`alert alert-${color}`}>
      {error ? <p>{mensaje}</p> : <strong>{mensaje}</strong>}
    </div>
  );
};
