"use client"
import React from 'react';

const Button = ({ children, onClick, type = "button", className = "", disabled = false }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`px-4 py-2 rounded bg-black text-white border border-black transition hover:bg-white hover:text-black disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        >
            {children}
        </button>
    );
}

export default Button;
