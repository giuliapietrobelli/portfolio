"use client"
import { useState } from 'react';

// function MyButton() {
//   return (
//     <button>
//       I'm a button
//     </button>
//   );
// }

// export default function MyApp() {
//   return (
//     <div className="flex flex-col items-center">
//       <h1>Welcome to my app</h1>
//       <MyButton />
//     </div>
//   );
// }

///////////////////////   *** AVATAR *** 

// const user = {
//   name: 'Hedy Lamarr',
//   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
// };

// export default function Profile() {
//   return (
//     <>
//       <h1>{user.name}</h1>
//       <img
//         className="avatar"
//         src={user.imageUrl}
//         alt={'Photo of' + user.name}
//         />
//     </>
//   );
// }

///////////////////////    *** LIST ITEMS & CONDITIONAL RENDERING *** 

// const products = [
//   { title: 'Cabbage', isFruit: false, id: 1 },
//   { title: 'Garlic', isFruit: false, id: 2 },
//   { title: 'Apple', isFruit: true, id: 3 },
// ];


// export default function ShoppingList() {
//   const listItems = products.map(product =>
//     <li
//       key={product.id}
//       style={{
//         color: product.isFruit ? 'magenta' : 'darkgreen'
//       }}
//     >
//       {product.title};
//     </li>
//     );

//     return (
//       <ul>{listItems}</ul>
//     );
// }


///////////////////////    *** RESPONDING TO EVENTS *** 


// function MyButton() {
//   const [count, setCount] = useState(0);
  
//   function handleClick() {
//     setCount(count +1);
//   }

//   return (
//     <button onClick={handleClick}>
//       Clicked {count} times
//     </button>
//   );
// }

// export default function MyApp() {
//   return (
//     <div className="flex flex-col items-center">
//       <h1>Welcome to my app</h1>
//       <MyButton />
//     </div>
//   );
// }

///////////////////////    *** Counters that update separately *** 

// function MyButton() {
//   const [count, setCount] = useState(0);
  
//   function handleClick() {
//     setCount(count +1);
//   }

//   return (
//     <button onClick={handleClick}>
//       Clicked {count} times
//     </button>
//   );
// }

// export default function MyApp() {
//   return (
//     <div className="flex flex-col items-center">
//       <h1>Counters that update separately</h1>
//       <MyButton />
//       <MyButton />
//     </div>
//   );
// }

///////////////////////    *** Sharing data between components  ***  

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="flex flex-col items-center">
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}


