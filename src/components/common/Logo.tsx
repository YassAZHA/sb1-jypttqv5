import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <div className="flex flex-col">
        <span className="text-lg font-display tracking-wider text-secondary">
          MEDIMMO
        </span>
        <span className="text-xl font-display font-light tracking-[0.2em] text-primary">
          SECRET
        </span>
      </div>
    </Link>
  );
}