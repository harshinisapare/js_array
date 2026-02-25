
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


'use client';
import { useState } from 'react';

export default function Page() {

  const [name, setName] = useState('harshini');
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const [color, setColor] = useState('red');
  const [likes, setLikes] = useState(0);
  const [text, setText] = useState('');
  const [age,setAge]=useState('');
  const [password, setPassword] = useState('');
const [showPassword, setShowPassword] = useState(false);
const [status, setStatus] = useState(false);
const [counter, setCounter] = useState(0);

  const toggleColor = () => {
    setColor(color === 'lightpink' ? 'lightblue' : 'lightpink');
  };

  return (

    <div style={{ backgroundColor: color, padding: '20px' }}>

      <h3 style={{color: 'black'}}>Name </h3>

      {/* <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /> */}

      <h2>Hello, {name}</h2>

      <hr />

      <h3 style={{color: 'black'}}>Click Counter</h3>

      <button onClick={() => setCount(prev => prev + 1)}>
        Click Count: {count}
      </button>

      <hr />

      <h3 style={{color: 'black'}}>Show / Hide Message</h3>

      <button onClick={() => setShow(!show)}>
        Toggle Message
      </button>

      {show && <h2 style={{color: '#380df9'}}>Welcome Participants!</h2>}

      <hr />

      <h3 style={{color: 'black'}} >Change Background Color</h3>

      <button onClick={toggleColor}>
        Toggle Background Color
      </button>

      <hr />

      <h3 style={{color: 'black'}}>Like Button</h3>

      <button onClick={() => setLikes(prev => prev + 1)}>
        ❤️ Like
      </button>

      <h2 style={{color: 'red'}}>Likes: {likes}</h2>
      <textarea
       placeholder="Type something..."
       value={text}
       onChange={(e) => setText(e.target.value)}
      />

<h3>Characters: {text.length}</h3>

<input
  type="number"
  placeholder="Enter age"
   style={{color: 'black'}}
  value={age}
  onChange={(e) => setAge(e.target.value)}
/>

<h3>
  {age && (age >= 18 ? 'Adult' : 'Minor')}
</h3>

<input
  type={showPassword ? 'text' : 'password'}
  placeholder="Enter password"
  style={{color: 'black'}}
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>

<button onClick={() => setShowPassword(!showPassword)}>
  {showPassword ? 'Hide' : 'Show'}
</button>

<button onClick={() => setStatus(!status)}>
  Toggle
</button>

<h3>{status ? 'ON' : 'OFF'}</h3>

<button onClick={() => setCounter(counter + 1)}>Increase  </button>

<button onClick={() => setCounter(counter - 1)}>Decrease  </button>

<button onClick={() => setCounter(0)}>Reset</button>

<h3>Counter: {counter}</h3>
    </div>

  );

}
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