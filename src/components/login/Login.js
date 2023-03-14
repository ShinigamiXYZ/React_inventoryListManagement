// Importation des modules nécessaires
import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link, Navigate, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AddInventory from "../Product/ProductManagement";

// Importation des modules nécessaires
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // On utilise la méthode useState pour initialiser les états email et password.
// On utilise également la méthode useNavigate pour gérer la navigation entre les pages.
  const navigate = useNavigate();

  function validateForm() {// On définit une fonction validateForm qui renvoie true si les champs email et password ont une valeur.
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

   
/* Methode invalide, marche seulement pour le but de l'exercices */
    if (validateForm()) {
      if (email === "admin@gmail.com" && password === "admin123") {
         // Si les informations de connexion sont valides, on navigue vers la page Dashboard.
  
        navigate('/dashboard');
      }
      else{
        setEmail("");
        setPassword("");
        alert("Les informations entrées sont invalides");   // Si les informations de connexion sont invalides, on efface les champs email et password et on affiche une alerte.
      }
    }
  }

  return (
    <div className="Login">
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>// On retourne un formulaire de connexion avec des champs email et password, ainsi qu'un bouton Login.
  );
}

function Dashboard() { // On définit une fonction Dashboard qui sert de page d'accueil une fois connecté.
  return (
    <div className="Dashboard">
    <div className="container"> 
      <div className='text-end'> <Link to="/">Logout</Link> </div>
    </div>

     <AddInventory/>
      
    </div>
  );
}

function Routing() {
  return (// On définit une fonction Dashboard qui sert de page d'accueil une fois connecté.
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* On définit les routes de navigation : la route "/" mène à la page Login, et la route "/dashboard" mène à la page Dashboard. */}
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;

