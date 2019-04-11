import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white p-4 text-center">
      Copyright &copy; {new Date().getFullYear()} Blog
    </footer>
  );
}
