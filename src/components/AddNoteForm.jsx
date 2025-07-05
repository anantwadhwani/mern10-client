import React, { useState } from 'react';

const AddNoteForm = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = () => {
        if (title.trim() === '' || content.trim() === '') {
            return { success: false, message: 'Please fill in both title and content fields!' };
        }

        const result = onAdd(title, content);
        if (result.success) {
            setTitle('');
            setContent('');
        }
        return result;
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                    <div className="space-y-4">
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-lg font-semibold"
                            placeholder="Note title..."
                        />
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none resize-none"
                            rows="4"
                            placeholder="Take a note..."
                        />
                        <div className="flex justify-end">
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg shadow-md"
                            >
                                ➕ Add Note
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNoteForm;