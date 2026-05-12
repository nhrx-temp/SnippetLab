import { Container, Row, Col } from 'react-bootstrap';
import SnippetForm from '../components/SnippetForm';

const CreateSnippet = ({ formState, setters, actions }) => {
  return (
    <Container className="py-2">
      <Row className="justify-content-center">
        <Col lg={11} xl={10} className="mb-5">
          <SnippetForm
            titleValue={formState.titleValue}
            tagValue={formState.tagValue}
            contentValue={formState.contentValue}
            languageValue={formState.languageValue}
            editingId={formState.editingId}
            setTitleValue={setters.setTitleValue}
            setTagValue={setters.setTagValue}
            setContentValue={setters.setContentValue}
            setLanguageValue={setters.setLanguageValue}
            handleSubmit={actions.handleSubmit}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CreateSnippet;
