
// function BookCard({ title, author }) {
//   return (
//     <div style={{
//       backgroundColor: "#50977c",
//       padding: "10px",
//       margin: "10px",
//       borderRadius: "5px"
//     }}>
//       <h3>Title: {title}</h3>
//       <p>Author: {author}</p>
//     </div>
//   );
// }

// export default function Page() {

//   const books = [
//     { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
//     { title: "1984", author: "George Orwell" },
//     { title: "To Kill a Mockingbird", author: "Harper Lee" }
//   ];

//   return (
//     <div style={{ padding: "20px" }}>

//       <h1 style={{fontweight:"bold"}}> Book List</h1>

//       {books.map((book, index) => (
//         <BookCard
//           key={index}
//           title={book.title}
//           author={book.author}
//         />
//       ))}

//     </div>
//   );
// }

//use state

// 'use client'; //imp line
//  import {useState} from 'react';

//  export default function page(){
//   // const [txt,setTxt]=useState('hello') 
//   const [color, setColor] = useState('white');
//   // const [count, setCount] = useState('0'); //syntax
//   const changeColor=()=>{
//     // setTxt('hiii!!!!!')
//     setColor('red')
//     setCount('')
//   }
//   return (
//      <div atyle={{backgroundColor:color,padding:"20px"}}>
//       <button onclick={()=>setColor("yellow")}></button>
     
      
//        </div>
//   )
//  }

// 'use client';
// import { useState } from 'react';

// export default function Page() {

//   const [count, setCount] = useState(0);

//   const increaseCount = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <h2 onClick={increaseCount} style={{ cursor: 'pointer' }}>
//         count: {count}
//       </h2>
//     </div>
//   );
// }

// 'use client';
// import {useState} from 'react';
// export default function Page(){
// const [name,setName]=useState('harsh');
//  const [count, setCount] = useState(0);

//  const increaseCount = () => {
//     setCount(count + 1);
//   };

// return (
//   <div>
//     <h2>hello, {name}</h2>
//      <button onClick={increaseCount} style={{ cursor: 'pointer' }}>
//          count: {count}
//       </button>
//   </div>


// 'use client';
// import { useState } from 'react';

// export default function Page() {

//   const [name, setName] = useState('harshini');
//   const [count, setCount] = useState(0);
//   const [show, setShow] = useState(false);
//   const [color, setColor] = useState('red');
//   const [likes, setLikes] = useState(0);
//   const [text, setText] = useState('');
//   const [age,setAge]=useState('');
//   const [password, setPassword] = useState('');
// const [showPassword, setShowPassword] = useState(false);
// const [status, setStatus] = useState(false);
// const [counter, setCounter] = useState(0);

//   const toggleColor = () => {
//     setColor(color === 'lightpink' ? 'lightblue' : 'lightpink');
//   };

//   return (

//     <div style={{ backgroundColor: color, padding: '20px' }}>

//       <h3 style={{color: 'black'}}>Name </h3>

//       {/* <input
//         type="text"
//         placeholder="Enter your name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       /> */}

//       <h2>Hello, {name}</h2>

//       <hr />

//       <h3 style={{color: 'black'}}>Click Counter</h3>

//       <button onClick={() => setCount(prev => prev + 1)}>
//         Click Count: {count}
//       </button>

//       <hr />

//       <h3 style={{color: 'black'}}>Show / Hide Message</h3>

//       <button onClick={() => setShow(!show)}>
//         Toggle Message
//       </button>

//       {show && <h2 style={{color: '#380df9'}}>Welcome Participants!</h2>}

//       <hr />

//       <h3 style={{color: 'black'}} >Change Background Color</h3>

//       <button onClick={toggleColor}>
//         Toggle Background Color
//       </button>

//       <hr />

//       <h3 style={{color: 'black'}}>Like Button</h3>

//       <button onClick={() => setLikes(prev => prev + 1)}>
//         ❤️ Like
//       </button>

//       <h2 style={{color: 'red'}}>Likes: {likes}</h2>
//       <textarea
//        placeholder="Type something..."
//        value={text}
//        onChange={(e) => setText(e.target.value)}
//       />

// <h3>Characters: {text.length}</h3>

// <input
//   type="number"
//   placeholder="Enter age"
//    style={{color: 'black'}}
//   value={age}
//   onChange={(e) => setAge(e.target.value)}
// />

// <h3>
//   {age && (age >= 18 ? 'Adult' : 'Minor')}
// </h3>

// <input
//   type={showPassword ? 'text' : 'password'}
//   placeholder="Enter password"
//   style={{color: 'black'}}
//   value={password}
//   onChange={(e) => setPassword(e.target.value)}
// />

// <button onClick={() => setShowPassword(!showPassword)}>
//   {showPassword ? 'Hide' : 'Show'}
// </button>

// <button onClick={() => setStatus(!status)}>
//   Toggle
// </button>

// <h3>{status ? 'ON' : 'OFF'}</h3>

// <button onClick={() => setCounter(counter + 1)}>Increase  </button>

// <button onClick={() => setCounter(counter - 1)}>Decrease  </button>

// <button onClick={() => setCounter(0)}>Reset</button>

// <h3>Counter: {counter}</h3>
//     </div>

//   );

// }
// tailwind css card 


// 'use client';
// import { useState } from "react";

// export default function Page() {
//   const [liked, setLiked] = useState(false);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">

//       <div className="max-w-sm rounded-xl shadow-lg bg-white p-6">

//         {/* Image */}
//         <img
//           src="https://th.bing.com/th/id/OIP.8txPISBrcaXrpUFAl4w95wHaIM?w=151&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
//           alt="SUNFLOWER"
//           className="w-full h-80 object-cover rounded-lg mb-4"
//         />

//         {/* Title */}
//         <h2 className="text-2xl font-bold mb-2 text-blue-600">
//           🌻 SUNFLOWER
//         </h2>

//         {/* Description */}
//         <p className="text-gray-600 mb-4">
//           This is a beautiful sunflower that symbolizes happiness and positivity.
//         </p>

//         {/* Like button */}
//         <button
//           onClick={() => setLiked(!liked)}
//           className="flex items-center gap-2 bg-pink-100 hover:bg-pink-200 px-4 py-2 rounded-lg transition"
//         >
//           <span className="text-3xl">
//             {liked ? "❤️" : "🤍"}
//           </span>
//           <span className="text-gray-700 font-medium">
//             {liked ? "Liked" : "Like"}
//           </span>
//         </button>

//       </div>

//     </div>
//   );
// }
//to do list 

// 'use client';
// import { useState } from "react";

// export default function Level3() {

//   const [task, setTask] = useState("");
//   const [tasks, setTasks] = useState([]);

 
//   const addTask = () => {
//     if (task.trim() === "") return;
//     setTasks([...tasks, task]);
//     setTask("");
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">

//       <div className="bg-white shadow-lg rounded-xl p-6 w-96">

//         <h1 className="text-2xl font-bold mb-4 text-indigo-600">
//           📝 To-Do List
//         </h1>

       
//         <div className="flex gap-2 mb-4">
//           <input
//             type="text"
//             placeholder="Enter task..."
//             value={task}
//             onChange={(e) => setTask(e.target.value)}
//             className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           />

//           <button
//             onClick={addTask}
//             className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
//           >
//             Add
//           </button>
//         </div>

       
//         <ul className="space-y-2">
//           {tasks.map((t, index) => (
//             <li
//               key={index}
//               className="bg-black-100 px-3 py-2 rounded-lg"
//             >
//               ✅ {t}
//             </li>
//           ))}
//         </ul>

//       </div>

//     </div>
//   );
// }

//add to cart quantity
// 'use client';
// import { useState } from "react";

// export default function CartQuantity() {

//   const [quantity, setQuantity] = useState(0);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">

//       <div className="bg-white p-6 rounded-xl shadow-lg w-80 text-center">

      
//         <h2 className="text-2xl font-bold text-indigo-600 mb-4">
//           🛒 Product: Shoes
//         </h2>

        
//         <p className="text-lg mb-4">
//           Quantity:<span className="font-bold text-indigo-700 text-xl">
//   {quantity}
// </span>
//         </p>

       
//         <div className="flex justify-center gap-4">

//           <button
//             onClick={() => setQuantity(quantity - 1)}
//             className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
//           >
//             −
//           </button>

//           <button
//             onClick={() => setQuantity(quantity + 1)}
//             className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
//           >
//             +
//           </button>

//         </div>

//       </div>

//     </div>
//   );
// }

//theme togglle

// 'use client';
// import { useState } from "react";

// export default function ThemeToggle() {

//   const [darkMode, setDarkMode] = useState(false);

//   return (
//     <div className={darkMode
//       ? "min-h-screen flex items-center justify-center bg-gray-900 text-white"
//       : "min-h-screen flex items-center justify-center bg-gray-100 text-black"
//     }>

//       <div className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800">

//         <h2 className="text-2xl font-bold mb-4">
//           Theme Toggle
//         </h2>

//         <button
//           onClick={() => setDarkMode(!darkMode)}
//           className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
//         >
//           {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
//         </button>

//       </div>

//     </div>
//   );
// }

//quiz

// 'use client';
// import { useState } from "react";

// export default function SimpleQuiz() {

//   const [result, setResult] = useState("");

//   const checkAnswer = (answer) => {
//     if (answer === "sunflower") {
//       setResult("✅ Correct!");
//     } else {
//       setResult("❌ Wrong!");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">

//       <div className="bg-white p-6 rounded-xl shadow-lg w-96 text-center">

//         {/* Question */}
//         <h2 className="text-xl font-bold mb-4 text-indigo-600">
//           🌼 Which flower is yellow and follows the sun?
//         </h2>

//         {/* Options */}
//         <div className="flex flex-col gap-3 mb-4">

//           <button
//             onClick={() => checkAnswer("rose")}
//             className="bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
//           >
//             Rose
//           </button>

//           <button
//             onClick={() => checkAnswer("sunflower")}
//             className="bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600"
//           >
//             Sunflower
//           </button>

//         </div>

//         {/* Result */}
//         {result && (
//           <p className="text-lg font-bold">
//             {result}
//           </p>
//         )}

//       </div>

//     </div>
//   );
// }

//multiple counters
'use client';
import { useState } from "react";

export default function MultipleCounters() {

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">

      <div className="bg-blue-50 p-6 rounded-xl shadow-lg w-96">

        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
          Multiple Counters
        </h2>

        {/* Counter 1 */}
        <div className="flex justify-between items-center mb-4">
          <span className="font-semibold text-black text-lg">
            Counter 1: {count1}
          </span>

          <button
            onClick={() => setCount1(count1 + 1)}
            className="bg-blue-500 text-white px-3 py-1 rounded-lg"
          >
            +
          </button>
        </div>

        {/* Counter 2 */}
        <div className="flex justify-between items-center mb-4">
          <span className="font-semibold text-black text-lg">
            Counter 2: {count2}
          </span>

          <button
            onClick={() => setCount2(count2 + 1)}
            className="bg-green-500 text-white px-3 py-1 rounded-lg"
          >
            +
          </button>
        </div>

        {/* Counter 3 */}
        <div className="flex justify-between items-center">
          <span className="font-semibold text-black text-lg">
            Counter 3: {count3}
          </span>

          <button
            onClick={() => setCount3(count3 + 1)}
            className="bg-purple-500 text-white px-3 py-1 rounded-lg"
          >
            +
          </button>
        </div>

      </div>

    </div>
  );
}