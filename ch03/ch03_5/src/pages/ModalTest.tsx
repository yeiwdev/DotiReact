import { Subtitle, Title } from "../components";
import * as D from "../data";
import { Button, Modal, ModalAction, ModalContent } from "../theme/daisyui";

export default function ModalTest() {
  const open = true;
  const closeClicked = () => alert(`close`);
  const acceptClicked = () => alert(`accept`);

  return (
    <section className="mt-4">
      <Title>ModalTest</Title>
      <Modal open={open}>
        <ModalContent onCloseIconClicked={closeClicked}>
          <Subtitle>Modal</Subtitle>
          <p className="mt-4 text-justify">{D.randomParagraphs()}</p>
          <ModalAction>
            <Button className="w-24 btn-primary btn-sm" onClick={acceptClicked}>
              Accept
            </Button>
            <Button className="w-24 btn-sm" onClick={closeClicked}>
              Close
            </Button>
          </ModalAction>
        </ModalContent>
      </Modal>
    </section>
  );
}
