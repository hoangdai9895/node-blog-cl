import React from "react";
import loading from "./loading.gif";

export default function Loading() {
  return (
    <div className="text-center w-100">
      <img
        src={loading}
        alt="loading..."
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </div>
  );
}
