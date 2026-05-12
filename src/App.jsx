import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import CreateSnippet from './routes/CreateSnippet';
import SnippetList from './routes/SnippetList';
import { useSnippets } from './hooks/useSnippets';

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { javascript, cpp, python, csharp, go, css, xml } from 'react-syntax-highlighter/dist/esm/languages/hljs';

SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('cpp', cpp);
SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('csharp', csharp);
SyntaxHighlighter.registerLanguage('go', go);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('html/xml', xml);

function App() {
  const { snippets, formState, setters, actions } = useSnippets();
  const [view, setView] = useState('list'); 

  // Düzenleme işlemi seçildiğinde formu doldurur ve sayfayı yönlendirir
  const handleEditWithRedirect = (snippet) => {
    actions.handleEdit(snippet);
    setView('create');
  };
  
  // Form gönderildikten sonra otomatik olarak liste ekranına döner
  const wrappedHandleSubmit = () => {
    actions.handleSubmit();
    setView('list');
  };

  return (
    <div data-bs-theme="dark" className="min-vh-100 bg-dark text-light">
      <Navigation setView={setView} />

      <main>
        {view === 'create' ? (
          <CreateSnippet 
            formState={formState} 
            setters={setters} 
            actions={{...actions, handleSubmit: wrappedHandleSubmit}} 
          />
        ) : (
          <SnippetList 
            snippets={snippets} 
            actions={{...actions, handleEdit: handleEditWithRedirect}} 
          />
        )}
      </main>
    </div>
  );
}

export default App;
