import React from "react";

export default function Redirect(props) {
  const handleRedirect = () => {
    const { history } = props;
    if (history) history.push("/");
    else console.log(`History not found in props`);
  };
  return (
    <div className="routeData">
      <button onClick={handleRedirect} className="redirectButton">
        Redirect to main page
      </button>
    </div>
  );
}
