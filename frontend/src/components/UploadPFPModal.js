import React from "react";
import { Modal, Button } from "react-bootstrap";

export const UploadPFPModal = () => {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Upload Profile Picture</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="text-center">
          <p>Upload Profile Picture</p>
          <p>Supported format: .jpeg .png</p>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">close</Button>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};
