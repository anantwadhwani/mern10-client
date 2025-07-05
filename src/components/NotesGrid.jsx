import React from 'react';
import Note from './Note';

const NotesGrid = ({ notes, onDelete, onEdit }) => (
    <div className="container mx-auto px-4 pb-8">
        {notes.length === 0 ? (
            <div className="text-center py-16">
                <h3 className="text-2xl font-semibold text-gray-600 mb-2">No notes yet</h3>
                <p className="text-gray-500">Start by adding your first note above!</p>
            </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {notes.map((note) => (
                    <Note
                        key={note.id}
                        note={note}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />
                ))}
            </div>
        )}
    </div>
);

export default NotesGrid;