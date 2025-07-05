import React from 'react';

const Header = () => (
    <header className="bg-gradient-to-r from-orange-500 to-yellow-500 shadow-lg">
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-4xl font-bold text-white text-center tracking-wide">
                📝 Keeper
            </h1>
            <p className="text-center text-orange-100 mt-2">
                Your digital note-taking companion
            </p>
        </div>
    </header>
);

export default Header;