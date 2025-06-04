import React from 'react';

const Error = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center px-4">
            <h1 className="text-6xl font-bold text-black mb-4">404</h1>
            <p className="text-xl text-black mb-6">Oops! The page you're looking for doesn't exist.</p>
            <a
                href="/"
                className="relative inline-block px-6 py-3 text-white font-semibold rounded overflow-hidden group"
            >
                <span className="absolute inset-0 bg-[rgb(255,98,84)] transition-all duration-300 ease-out group-hover:translate-y-[-100%] group-hover:opacity-0"></span>
                <span className="absolute inset-0 bg-gradient-to-t from-[rgb(255,98,84)] to-red-600 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in"></span>
                <span className="relative z-10">Go Home</span>
            </a>
        </div>
    );
};

export default Error;
