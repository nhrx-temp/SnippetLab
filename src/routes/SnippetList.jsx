import { Container, Row, Col } from 'react-bootstrap';
import SnippetCard from '../components/SnippetCard';

const SnippetList = ({ snippets, actions }) => {
  return (
    <Container className="py-2">
      <Row className="justify-content-center">
        <Col lg={11} xl={10}>
          {snippets.map(code => (
            <SnippetCard
              key={code.id}
              code={code}
              handleEdit={actions.handleEdit}
              handleDelete={actions.handleDelete}
            />
          ))}
          {snippets.length === 0 && (
            <p className="text-center text-muted mt-5">Henüz hiç kod parçacığı eklenmemiş.</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SnippetList;
