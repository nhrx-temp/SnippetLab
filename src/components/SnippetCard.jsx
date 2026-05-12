import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const SnippetCard = ({ code, handleEdit, handleDelete }) => {
return (
    <Card className="mb-5 shadow-lg border-first overflow-hidden">
      <Card.Header className="bg-dark text-white py-3 d-flex justify-content-between align-items-center">
        <h5 className="mb-0 fw-bold" style={{ letterSpacing: '1px' }}>{code.title}</h5>
        <Badge bg="success" text="dark" className="px-3">{code.language.toUpperCase()}</Badge>
      </Card.Header>

      <Card.Body className="p-0 border-first">
        <SyntaxHighlighter
          language={code.language}
          style={atomOneDark}
          customStyle={{
            padding: '30px',
            margin: 0,
            fontSize: '1.3rem',
            lineHeight: '1.6',
            textAlign: 'left',
            backgroundColor: 'transparent',
            width: '100%',
            minHeight: '150px'
          }}
        >
          {code.content}
        </SyntaxHighlighter>
      </Card.Body>

      <Card.Footer className="bg-dark p-3 d-flex justify-content-between align-items-center">
        <div className="d-flex gap-2">
          {code.tags.map((tag, index) => (
            <Badge key={index} pill bg="secondary" className="px-3">{tag}</Badge>
          ))}
        </div>
        <div className="d-flex gap-2">
          <Button variant="outline-warning" size="sm" onClick={() => handleEdit(code)}>Düzenle</Button>
          <Button variant="danger" size="sm" className="px-4" onClick={() => handleDelete(code.id)}>Sil</Button>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default SnippetCard;
