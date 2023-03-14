// Importation des modules nécessaires
import { Form, Button } from "react-bootstrap";

// Définition d'une fonction composant qui prend deux props: "add" et "formData"
export default function AddProductForm(props) {
  const { add, formData } = props;

  return (
    /* Création d'un formulaire avec la méthode "onSubmit" et une référence "formData */
    <Form onSubmit={add} ref={formData}>
      <Form.Group className="mb-3">
        <Form.Label>Nom du Produit</Form.Label>
         {/*Création d'un groupe de formulaire avec une étiquette pour le nom du produit*/}
        <Form.Control
          type="text"
          placeholder="nom du produit"
          name="name"
        />  {/*Création d'un champ de saisie pour le nom du produit avec un nom d'attribut "name"*/}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description du produit</Form.Label>
        <Form.Control
          type="text"
          placeholder="description"
          name="description"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Prix du produit</Form.Label>
        <Form.Control type="text" placeholder="prix en CAD" name="prix" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Quantité</Form.Label>
        <Form.Control type="number" placeholder="1" min="1" name="qty" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Catégorie</Form.Label>
        <Form.Select name="categorie">
          <option>Électronique</option>
          <option>Produit brute</option>
          <option>Liquide</option>
        </Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit">
        Add to Inventory  {/*Création d'un bouton de soumission avec un libellé "Add to Inventory"*/}
      </Button>
    </Form>
  );
}
