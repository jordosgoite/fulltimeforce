import React from "react";
import "./spinner.css";

export default function LoadingSpinner() {
  return (
    <section className="app-loader">
      <div className="bouncing-loader">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}
