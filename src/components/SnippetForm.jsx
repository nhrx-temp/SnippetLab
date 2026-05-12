import { Form, Row, Col, Card, Button } from 'react-bootstrap';

import { langs } from '../data/languages';

const SnippetForm = ({ 
  titleValue, setTitleValue, 
  tagValue, setTagValue, 
  contentValue, setContentValue, 
  languageValue, setLanguageValue, 
  editingId, handleSubmit 
}) => {
  return (
    <Card className={`shadow-lg border-first bg-dark ${editingId ? 'border-warning' : ''}`}>
      <Card.Header className={`${editingId ? 'text-warning' : 'text-success'} fw-bold`}>
      {editingId ? "Kod Parçaçığını Düzenle" : "Yeni Kod Parçacığı Ekle"}
      </Card.Header>
      <Card.Body className="p-4">
        <Form>
          <Row>
            <Col md={8}>
              <Form.Group className="mb-3">
                <Form.Label>Başlık</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Bu kod ne işe yarıyor?"
                  value={titleValue}
                  onChange={(e) => setTitleValue(e.target.value)}
                  className="bg-dark text-white border-first"
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Programlama Dili</Form.Label>
                <Form.Select 
                  value={languageValue}
                  onChange={(e) => setLanguageValue(e.target.value)}
                  className="bg-dark text-white border-first"
                >
                  {langs.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group className="mb-3">
                <Form.Label className="text-success small fw-bold">ETİKETLER (virgülle ayırın)</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="js, frontend, logic" 
                  value={tagValue}
                  onChange={(e) => setTagValue(e.target.value)}
                  className="bg-dark text-white border-first"
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Kod İçeriği</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={4} 
              placeholder="Kodunuzu buraya yapıştırın..."
              value={contentValue}
              onChange={(e) => setContentValue(e.target.value)}
              className="bg-dark text-white border-first font-monospace"
              style={{ fontSize: '0.9rem' }}
            />
          </Form.Group>

          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <Button 
              variant={editingId ? "warning" : "success"}
              className="px-5 fw-bold"
              onClick={handleSubmit}
            >
              {editingId ? "Güncelle" : "Koleksiyona Ekle"}
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default SnippetForm;
