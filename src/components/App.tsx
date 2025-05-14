import Product from "./Product/Product";
import Mailbox from "./Mailbox/Mailbox";
import Bookcais from "./Book/Book";
import Button from "./Button/Button";
import UserMenu from "./UserMenu/UserMenu";
import { useState } from "react";

// function Product() {
//   return (
//     <div>
//       <h2>Cookies</h2>
//       <p>Price: 999 credits</p>
//     </div>
//   );
// }

export default function App() {
  const handleClick = () => {
    console.log("I'm a button!");
  };
  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.target);
  };
  const [clicks, setClicks] = useState(0);
  const handleClick3 = () => {
    setClicks(clicks + 1);
    console.log(clicks);
  };
  return (
    <>
      <UserMenu name="Kolotoon" />
      <button onClick={handleClick}>Click me!</button>
      <button onClick={handleClick2}>First button</button>
      <button
        onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
          console.log(event.target)
        }
      >
        Second button
      </button>
      <button onClick={handleClick3}>Current: {clicks}</button>
      <h1>Best selling</h1>
      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
        price={14.29}
      />
      <Product
        name="Fresh Milk"
        imgUrl="https://images.stockcake.com/public/e/1/f/e1f26bd7-b99b-40aa-a70b-391071b294ec_large/fresh-milk-outside-stockcake.jpg"
        price={4.99}
      />
      <Mailbox
        username="Serhii"
        unreadMessages={["Hello", "Buy", "See you", "Come together"]} //
      />
      <Bookcais />
      <Button variant="primary" text="Login" />
      <Button variant="secondary" text="Folow" />
    </>
  );
}
//
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
