import { Modal, Button } from "react-bootstrap";

const CustomModal = ({ show, onHide, title, result, move }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{result}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          닫기
        </Button>
        <Button variant="primary" onClick={move}>
          확인
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
