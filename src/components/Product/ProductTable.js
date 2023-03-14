// Importation des modules nécessaires
import { Table, Button } from "react-bootstrap";
// On exporte par défaut une fonction appelée ProductTable, qui prend en argument un objet props.
export default function ProductTable(props) {
  const { products, increQty, decreQty, showDetails, updData  } = props; // On extrait les propriétés products, increQty et decreQty de l'objet props.

  return (
    <Table striped bordered hover variant="dark"> {/* On définit un composant Table. */}
      <thead>     {/* On définit les en-têtes de colonnes de la table. */}
        <tr>
          <th>ID</th>
          <th>Nom du produit:</th>
          <th>Prix</th>
          <th>Qty</th>
          <th>Options</th>
        </tr>
      </thead>

      <tbody>
        {products.map((item, index) => {
          return (
            <tr key={index}>
              <td>{index +1 }</td>
              <td>{item.name}</td>
              <td>{item.prix}{"$"}</td>
              <td>{item.qty}</td>
              <td>
                <Button 
                  variant="outline-danger"
                  onClick={(event) => {
                    decreQty(event);
                    updData(event);
                  }}
                  value={index}
                >  {/* Pour chaque élément du tableau products, on génère une rangée qui contient plusieurs cellules avec les données du produit. 
              On ajoute également des boutons pour augmenter et diminuer la quantité du produit, ainsi qu'un bouton pour voir les détails du produit.*/}
                  -
                </Button>{" "}
                <Button
                  variant="outline-primary"
                  onClick={(event) => {
                    increQty(event);
                    updData(event);
                  }}
                  value={index}
                >
                  +
                </Button>{" "}
                <Button variant="outline-info"
                 onClick={() => showDetails(item)}
                value={index}>
                  see details
                </Button>{" "}
              </td> 
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
