// // let num=2
// // let num1="hello"
// // console.log(num);
// // const num6=10
// // console.log(num1);

// // let num1=100
// // let num2=200
// // if(num2>num1){ //undefined if <
// //     var msg="done" //cant use let instead of var it will give reference error since we r declarinlg it inside {}
// //     // console.log("success!!");
// // }
// // console.log(msg);

// //function in js:

// // function sum(a,b){
// //     return a+b
// // }
// // ans=sum(2,3)
// // console.log(ans)

// //arrow func explicit reurn
// const addArrow=(a,b)=>{
//     return a+b;
// };


// //arrow functions (implicit return-great for single line react components)
// const multiply=(a,b)=>a*b;

// const greetUser=(name)=>{
//     return `hello,${name}! welcome to react`;
// }

// const calculateTotal=(price,tax)=> price+(price*tax);

// //arrays:
// let arr=[]

// //object:

// // let obj={  //key value pair
// //     id:1,
// //     name:"ram",
// //     address:{
// //         city:"delhi",
// //     },
// //     isActive:true
// // }
// // // console.log(obj.address)
// // // console.log(obj.name)

// // let{name,address}=obj
// // console.log(name,address)

// // const userProfile={
// //     id:402,
// //     username:"react_ninja",
// //     email:"ninja@ex.com",
// //     address:{
// //         city:"san francisco",
// //         zip:"9036"
// //     }
// // };
// // let{username,email,address}=userProfile
// // console.log(username,email,address.city)

// //spread operator ...
// // let arr1=[1,2,3]
// // let arr2=[...arr1,4,5]
// // // let arr3=[...arr1,...arr2,...obj]
// // let obj={name:"harsh",
// //     roll:2
// // }
// // let arr3=[...arr1,...arr2,...obj]
// // console.log(arr3,obj);
// let originalArray=[1,2,3]
// const newArray=[...originalArray,5];
// console.log("new array:",newArray);

// //update obj imutably
// const userState={
//     name:"rahul",
//     role:"dev"

// };

// const updatedUser={
//     ...userState,
//     role:"admin"
//     };

//     console.log("original state:",userState);
//     console.log("updated state:",updatedUser)


//     // a react style scanario transforming strings to ui

//     const names=["alice","john","charlie"];
//     const userCards=names.map((name)=>{
//         return `<Card name="${name}" />`;
//     });
//     console.log(userCards);


//     const numbers=[1,2,3,4];
//     const doubled=numbers.map

//     //task1

//     const products = [
//    { id: 1, name: "Phone", price: 800 },
//   { id: 2, name: "Mouse", price: 40 },
//   { id: 3, name: "Laptop", price: 1200 }
//  ];

//  const updateProducts=products.map((product)=>

//     products.price>500
//     ?{
//         ...products,
//         discountPrice: products.price * 0.8
//     }
//     :product
//  );
//  console.log(updateProducts);
//  console.log(products);

// //  const students = [
// //    { name: "Ali", marks: 75 },
// //   { name: "Sara", marks: 45 },
// //      { name: "John", marks: 90 }
// //  ];

// const students = [
//   { name: "Ali", marks: 75 },
//   { name: "Sara", marks: 45 },
//   { name: "John", marks: 90 }
// ];

// const updatedStudents = students.map(student => ({
//   ...student,
//   status: student.marks >= 50 ? "Pass" : "Fail"
// }));

// console.log(updatedStudents);
// console.log(students); 
    

// const inventory = [
//   { item: "Pen", quantity: 10 },
//   { item: "Notebook", quantity: 5 },
//   { item: "Pencil", quantity: 8 }
// ];

// const updatedInventory = inventory.map(product => ({
//   ...product,
//   quantity: product.quantity + 2
// }));

// console.log(updatedInventory);
// console.log(inventory); 




