// Importation des modules nécessaires
import { Modal, Button } from "react-bootstrap";
import logo192 from "../images/logo192.png"

export default function ProductDetails(props) {
  // Définition d'une fonction composant qui prend trois props: "product", "show" et "handleClose"
  const { product, show, handleClose } = props;

  return (
    <Modal show={show} onHide={handleClose} centered>
      {/* Création d'un composant de modale avec deux propriétés "show" et "onHide" */}
      <Modal.Header closeButton>
        <Modal.Title>   {/*Ajout d'un titre à la modale avec une image et le nom du produit*/}
          <img src={logo192} alt={product.name} width="50" height="50" style={{ marginRight: "10px" }} />
          {product.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body> {/*Ajout du contenu de la modale avec les détails du produit*/}
        <p>Qty: {product.qty}</p>
        <p>Description: {product.description}</p>
        <p>Categorie: {product.categorie}</p>
        <p>Prix: {product.prix}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close  {/*Ajout d'un bouton de fermeture */}
        </Button>
      </Modal.Footer>
    </Modal> /* Base sur https://react-bootstrap.github.io/components/modal/ */
  );
}
