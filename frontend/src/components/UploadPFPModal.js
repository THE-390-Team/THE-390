import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export const UploadPFPModal = () => {
  return (
      <div
        className="modal show"
        style={{ display: "block", position: "initial", width: "75%", margin: "auto"}}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Upload Profile Picture</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="text-center p-5" style={{border: "2px dashed #485785"}}>
              <p>Drop your picture here</p>
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
