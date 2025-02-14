import React, { useState } from 'react';
import './Paragraph.css';

const Paragraph = ({ text, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleSave = () => {
    onEdit(editedText);
    setIsEditing(false);
  };

  return (
    <div className="paragraph-container">
      {isEditing ? (
        <div className="edit-mode">
          <textarea
            className="edit-textarea"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            autoFocus
          />
          <div className="edit-controls">
            <button className="save-btn" onClick={handleSave}>
              Salvar
            </button>
            <button 
              className="cancel-btn"
              onClick={() => setIsEditing(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      ) : (
        <div className="view-mode">
          <p className="paragraph-text">{text}</p>
          <div className="paragraph-controls">
            <button 
              className="edit-btn"
              onClick={() => setIsEditing(true)}
            >
              Editar
            </button>
            <button 
              className="delete-btn"
              onClick={onDelete}
            >
              Excluir
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Paragraph;