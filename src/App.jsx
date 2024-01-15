import { useState } from "react";
import "./App.css";

let pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "assets/pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "assets/pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "assets/pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "assets/pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "assets/pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "assets/pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza.Co</h1>;
    </header>
  );
}
function Menu() {
  const numPizzas = pizzaData.length
  return (
    <main className="menu">
      <h2>Our Menu</h2>    
      <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious. </p>
      <ul className="pizzas">
        {numPizzas>0 ?pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          )):<p> we are still working on our menu</p>}
      </ul>
    </main>
  );
}
function Pizza({pizzaObj}) {
  return (
    <li className={`pizza ${pizzaObj.soldOut?"sold-out":""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div >
        <h3> {pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT":pizzaObj.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  if(!isOpen){
    return (<p>we are happy to welcome You between {openHour}:00 and {closeHour}:00.</p>)
  }
  return (
    <footer className="footer">
      {isOpen && (
       <Order closeHour={closeHour}/> )}

    </footer>
  );
}
function Order(props){
  return(<div className='order'>
  <p>we are open until {props.closeHour}:00. Come visit us or order online.</p>
  <button className='btn'>Order</button>
  </div>)
}

export default App;
