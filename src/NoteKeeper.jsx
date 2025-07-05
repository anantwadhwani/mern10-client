import React, { useState, useEffect } from 'react';
import AddNoteForm from './components/AddNoteForm';
import Alert from './components/Alert';
import Header from './components/Header';
import NotesGrid from './components/NotesGrid';

const KeeperApp = () => {
    const [notes, setNotes] = useState([]);
    const [alert, setAlert] = useState(null);

    useEffect(() => {
        const loadNotes = () => {
            const savedNotes = localStorage.getItem('keeper-notes');
            if (savedNotes) {
                setNotes(JSON.parse(savedNotes));
            }
        };
        loadNotes();
    }, []);

    useEffect(() => {
        localStorage.setItem('keeper-notes', JSON.stringify(notes));
    }, [notes]);

    const showAlert = (message, type = 'error') => {
        setAlert({ message, type });
    };

    const hideAlert = () => {
        setAlert(null);
    };

    const addNote = (title, content) => {
        if (title.trim() === '' || content.trim() === '') {
            showAlert('Please fill in both title and content fields!', 'error');
            return { success: false, message: 'Please fill in both title and content fields!' };
        }

        const newNote = {
            id: Date.now().toString(),
            title: title.trim(),
            content: content.trim(),
            createdAt: new Date().toISOString(),
        };

        setNotes(prevNotes => [newNote, ...prevNotes]);
        showAlert('Note added successfully!', 'success');
        return { success: true };
    };

    const deleteNote = (id) => {
        setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
        showAlert('Note deleted successfully!', 'success');
    };

    const editNote = (id, newTitle, newContent) => {
        setNotes(prevNotes =>
            prevNotes.map(note =>
                note.id === id
                    ? { ...note, title: newTitle, content: newContent }
                    : note
            )
        );
        showAlert('Note updated successfully!', 'success');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
            <Header />
            <AddNoteForm onAdd={addNote} />
            <NotesGrid notes={notes} onDelete={deleteNote} onEdit={editNote} />

            {alert && (
                <Alert
                    message={alert.message}
                    type={alert.type}
                    onClose={hideAlert}
                />
            )}
        </div>
    );
};

export default KeeperApp;