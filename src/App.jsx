// import { useState } from "react";
import "./App.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Pizza() {
  return (
    <div>
      <h1> Pizza Spinaci</h1>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
      <img src="assets/pizzas/focaccia.jpg" alt="abc" />
    </div>
  );
}
function App() {
  return (
    <>
      <Header />
      <Menu />
      <Footer />
    </>
  );
}
function Header() {
  return <h1>Fast React Pizza.Co</h1>;
}
function Menu() {
  return (
    <>
      <h2>Our Menu</h2>
      <Pizza />
    </>
  );
}
function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const opeHour = 12;
  const closeHour = 22;
  const isOpen = hour >= opeHour && hour <= closeHour;
  console.log(isOpen); //true
  return <footer>{new Date().toLocaleDateString()} were currently open</footer>;
}

export default App;
