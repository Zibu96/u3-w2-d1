import Alert from "react-bootstrap/Alert";
import CloseButton from "react-bootstrap/CloseButton";

const Welcome = function () {
  return (
    <div>
      <Alert variant="info">
        Ricorda di controllare la disponibilità del libro selezionato{" "}
        <CloseButton />
      </Alert>
      <h3>Qui trovi la lista dei libri accuratamente selezionati da noi</h3>
    </div>
  );
};

export default Welcome;
