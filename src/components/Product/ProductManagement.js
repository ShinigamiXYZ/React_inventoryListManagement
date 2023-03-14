// Importation des modules nécessaires
import { createRef, Component } from "react";
import AddProductForm from "./AddProductForm";
import ProductTable from "./ProductTable";
import ProductDetails from "./ProductDetails";

export default class AddInventory extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      showDetails: false,
      selectedProduct: null,
      isDirty: false, // indicates whether the data has been modified by the user
    };
    this.formData = createRef();
  }

  /* lorsque la page est créer didMount  enclenchement de la methode */
  componentDidMount() {
    /* https://fr.reactjs.org/docs/react-component.html#componentdidMount */
    fetch(
      "http://localhost:8000/inventory/"
    ) /* Récupération des données à partir de l'URL */
      .then((response) =>
        response.json()
      ) /*  Conversion de la réponse en format JSON / */
      .then((data) => {
        this.setState({
          products:
            data /*  Mise à jour de l'état avec les données récupérées */,
        });
      })
      .catch((error) => console.error("Error:", error)); /* Gestion erreur */
  }

  // Définition de la méthode "add"
  add = (event) => {
    event.preventDefault();

    const newProduct = {
      name: this.formData.current.name.value,
      description: this.formData.current.description.value,
      prix: this.formData.current.prix.value,
      qty: Number(this.formData.current.qty.value),
      categorie: this.formData.current.categorie.value,
    }; /* Creation du nouveauProduit */

    const newProducts = [...this.state.products, newProduct];
    this.setState({
      products: newProducts, /* Ajout dans le tableau existant * niveau DOM */
    });

    /*  Ajout niveau Serveur */
    
    fetch("http://localhost:8000/inventory/", {
      method: "POST", 
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newProduct),   /* Envoie nouvel entre en JSON.stringify */
    })
    .catch((error) => console.error("Error:", error));
    


    this.formData.current.reset(); /* reinitialse le formulaire */
  };

  // Définition de la méthode "increQty + 1"
  increQty = (event) => {
    const indexOfArray = event.target.value;
    const products = [...this.state.products];
    products[indexOfArray].qty = products[indexOfArray].qty + 1;
    this.setState({
      products: products,
    });
  };

  // Définition de la méthode "decreQty - 1"
  decreQty = (event) => {
    const indexOfArray = event.target.value;
    const products = [...this.state.products];
    products[indexOfArray].qty = products[indexOfArray].qty - 1;
    if (products[indexOfArray].qty <= 0) {
      products.splice(indexOfArray, 1); /* Enlever du DOM */

      /*  Supprimer sur le serveur  */

      fetch(`http://localhost:8000/inventory/${event.target.value}`, {
        method: "DELETE",
      }).catch((error) => console.error("Error:", error));
    }
    this.setState({
      products: products,
    });
  };

  // Définition de la méthode "handleShowDetails"
  handleShowDetails = (product) => {
    this.setState({
      showDetails: true,
      selectedProduct: product,
    });
  };

  updDataCount = (event) => {
     /* console.log(event.target.value)
    console.log(JSON.stringify(this.state.products[event.target.value]))  */

  fetch(`http://localhost:8000/inventory/${event.target.value}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(this.state.products[event.target.value]),
    }).catch((error) => console.error("Error:", error)); 
  };

  render() {
    return (
      <div>
        <AddProductForm add={this.add} formData={this.formData} />
        <ProductTable
          products={this.state.products}
          increQty={this.increQty}
          decreQty={this.decreQty}
          updData={this.updDataCount}
          showDetails={this.handleShowDetails}
        />
        {this.state.showDetails && (
          <ProductDetails
            product={this.state.selectedProduct}
            show={this.state.showDetails}
            handleClose={() =>
              this.setState({ showDetails: false, selectedProduct: null })
            }
          />
        )}
      </div>
    );
  }
}
