import React, { useState } from 'react';

const Note = ({ note, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(note.title);
    const [editContent, setEditContent] = useState(note.content);

    const handleSave = () => {
        if (editTitle.trim() === '' || editContent.trim() === '') {
            alert('Please fill in both title and content fields!');
            return;
        }
        onEdit(note.id, editTitle, editContent);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditTitle(note.title);
        setEditContent(note.content);
        setIsEditing(false);
    };

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            {isEditing ? (
                <div className="space-y-4">
                    <input
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-lg font-semibold"
                        placeholder="Note title..."
                    />
                    <textarea
                        value={editContent}
                        onChange={(e) => setEditContent(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none resize-none"
                        rows="4"
                        placeholder="Note content..."
                    />
                    <div className="flex gap-2">
                        <button
                            onClick={handleSave}
                            className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg text-sm"
                        >
                            💾 Save
                        </button>
                        <button
                            onClick={handleCancel}
                            className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg text-sm"
                        >
                            ❌ Cancel
                        </button>
                    </div>
                </div>
            ) : (
                <>
                    <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-gray-800 break-words">{note.title}</h3>
                        <div className="flex gap-2 ml-4">
                            <button
                                onClick={() => setIsEditing(true)}
                                className="p-2 text-blue-500 rounded-full"
                                title="Edit note"
                            >
                                ✏️
                            </button>
                            <button
                                onClick={() => onDelete(note.id)}
                                className="p-2 text-red-500 rounded-full"
                                title="Delete note"
                            >
                                🗑️
                            </button>
                        </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed break-words">{note.content}</p>
                    <div className="mt-4 text-xs text-gray-400">
                        Created: {new Date(note.createdAt).toLocaleDateString()}
                    </div>
                </>
            )}
        </div>
    );
};

export default Note;