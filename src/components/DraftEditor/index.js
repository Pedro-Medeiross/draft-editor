import React from 'react';
import Paragraph from '../Paragraph';
import './DraftEditor.css';

const DraftEditor = ({ darkMode, onToggleDarkMode }) => {
  const [paragraphs, setParagraphs] = React.useState([]);
  const [inputText, setInputText] = React.useState('');
  const [drafts, setDrafts] = React.useState([]);
  const [showDrafts, setShowDrafts] = React.useState(false);
  const [loadedDraftId, setLoadedDraftId] = React.useState(null);

  const addParagraph = () => {
    if (inputText.trim()) {
      setParagraphs([...paragraphs, {
        id: Date.now(),
        text: inputText
      }]);
      setInputText('');
    }
  };

  const handleSaveNew = () => {
    if (paragraphs.length === 0) return;

    const newDraft = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      content: [...paragraphs]
    };
    
    setDrafts([...drafts, newDraft]);
    setLoadedDraftId(null);
    alert('Novo rascunho criado!');
  };

  const handleOverwrite = () => {
    if (!loadedDraftId || paragraphs.length === 0) return;

    setDrafts(drafts.map(draft => 
      draft.id === loadedDraftId 
        ? { ...draft, content: [...paragraphs], date: new Date().toLocaleString() }
        : draft
    ));
    alert('Rascunho atualizado!');
  };

  const editParagraph = (id, newText) => {
    setParagraphs(paragraphs.map(p => 
      p.id === id ? {...p, text: newText} : p
    ));
  };

  const loadDraft = (draft) => {
    setParagraphs(draft.content);
    setLoadedDraftId(draft.id);
    setShowDrafts(false);
  };

  const clearEditor = () => {
    setParagraphs([]);
    setInputText('');
    setLoadedDraftId(null);
  };

  const deleteParagraph = (id) => {
    setParagraphs(paragraphs.filter(p => p.id !== id));
  };

  const deleteDraft = (draftId) => {
    if (window.confirm('Excluir rascunho permanentemente?')) {
      setDrafts(drafts.filter(d => d.id !== draftId));
      if (loadedDraftId === draftId) setLoadedDraftId(null);
    }
  };

  return (
    <div className="editor-container">
      <div className="toolbar">
        <h1 className="editor-title">Editor de Redação</h1>
        <div className="controls-right">
          <button 
            className="dark-mode-toggle"
            onClick={onToggleDarkMode}
            aria-label="Alternar tema"
          >
            {darkMode ? '🌞' : '🌙'}
          </button>
          <button 
            className="drafts-toggle"
            onClick={() => setShowDrafts(!showDrafts)}
          >
            {showDrafts ? 'Fechar' : 'Rascunhos'}
          </button>
        </div>
      </div>

      {showDrafts ? (
        <div className="drafts-panel">
          <h3>Rascunhos Salvos</h3>
          {drafts.length === 0 ? (
            <p>Nenhum rascunho encontrado</p>
          ) : (
            drafts.map(draft => (
              <div key={draft.id} className="draft-item">
                <div className="draft-info">
                  <span className="draft-date">{draft.date}</span>
                  <span className="draft-length">
                    {draft.content.length} parágrafo(s)
                  </span>
                </div>
                <div className="draft-controls">
                  <button 
                    className="button load-button"
                    onClick={() => loadDraft(draft)}
                  >
                    Abrir
                  </button>
                  <button 
                    className="button delete-button"
                    onClick={() => deleteDraft(draft.id)}
                  >
                    Excluir
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      ) : (
        <>
          <div className="paper-container">
            {paragraphs.map((p) => (
              <Paragraph
                key={p.id}
                text={p.text}
                onEdit={(newText) => editParagraph(p.id, newText)}
                onDelete={() => deleteParagraph(p.id)}
              />
            ))}
          </div>

          <div className="editor-controls">
            <textarea
              className="editor-textarea"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Digite seu novo parágrafo..."
              rows="4"
            />
            <div className="button-container">
              <button 
                onClick={addParagraph} 
                className="button primary-button"
              >
                ➕ Adicionar
              </button>
              
              <button 
                onClick={handleSaveNew} 
                className="button save-button"
              >
                💾 {loadedDraftId ? 'Novo' : 'Salvar'}
              </button>

              {loadedDraftId && (
                <button 
                  onClick={handleOverwrite} 
                  className="button overwrite-button"
                >
                  🔄 Atualizar
                </button>
              )}

              <button 
                onClick={clearEditor} 
                className="button clear-button"
              >
                🧹 Limpar
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DraftEditor;