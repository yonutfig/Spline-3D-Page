import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./modal.css";

function ModalButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        More Details
      </Button>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>About Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>Our History</h1>
          <p>
            With a legacy spanning 4 years, Elite Retreat has established itself
            as a hallmark of luxury hospitality across Europe. Founded by
            visionary entrepreneur Gabriel Firea, Elite Retreat embarked on a
            journey to redefine leisure and luxury, setting the stage for an
            unparalleled experience in some of Europe's most prestigious
            destinations.
          </p>
          <p>
            From the historic streets of Paris to the sun-kissed shores of the
            Mediterranean, Elite Retreat has left an indelible mark on the
            hospitality landscape, offering guests an escape into a world of
            opulence and refinement. Each location, carefully curated to reflect
            the unique charm and culture of its surroundings, invites guests to
            immerse themselves in an unforgettable journey of indulgence and
            relaxation.
          </p>
          <p>
            Driven by a commitment to excellence and a passion for creating
            memorable experiences, Elite Retreat has earned a reputation for
            unparalleled service and impeccable attention to detail. From the
            moment guests arrive, they are enveloped in an atmosphere of
            sophistication and hospitality, where every need is anticipated and
            every desire is fulfilled.
          </p>
          <p>
            As Elite Retreat continues to expand its presence across Europe, our
            dedication to providing an exceptional guest experience remains
            unwavering. With each new location, we seek to elevate the art of
            hospitality, ensuring that every visit to Elite Retreat is a
            celebration of luxury and indulgence.
          </p>
          <h3>
            Join us on a journey of discovery and delight as we continue to
            redefine leisure and luxury across Europe, one unforgettable
            experience at a time.
          </h3>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalButton;
