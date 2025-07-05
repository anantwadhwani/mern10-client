import React, { useEffect } from 'react';

const Alert = ({ message, type, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={`fixed top-4 right-4 z-50 flex items-center gap-3 px-6 py-4 rounded-lg shadow-lg border-l-4 ${type === 'error'
                ? 'bg-red-50 border-red-500 text-red-700'
                : 'bg-green-50 border-green-500 text-green-700'
            }`}>
            ⚠️
            <span className="font-medium">{message}</span>
            <button
                onClick={onClose}
                className="ml-2 text-gray-500"
            >
                ❌
            </button>
        </div>
    );
};

export default Alert;