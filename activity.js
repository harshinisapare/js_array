const products = [
  { id: 1, name: "Phone", price: 800 },
  { id: 2, name: "Mouse", price: 40 },
  { id: 3, name: "Laptop", price: 1200 }
];

const updatedProducts = products.map(product =>
  product.price > 500
    ? {
        ...product,
        discountedPrice: product.price * 0.8 
      }
    : product
);

console.log(updatedProducts);
console.log(products); 

const students = [
  { name: "Ali", marks: 75 },
  { name: "Sara", marks: 45 },
  { name: "John", marks: 90 }
];

const updatedStudents = students.map(student => ({
  ...student,
  status: student.marks >= 50 ? "Pass" : "Fail"
}));


console.log(students); 
console.log(updatedStudents);


const inventory = [
  { item: "Pen", quantity: 10 },
  { item: "Notebook", quantity: 5 },
  { item: "Pencil", quantity: 8 }
];

const updatedInventory = inventory.map(product => ({
  ...product,
  quantity: product.quantity + 2
}));


console.log(inventory); 
console.log(updatedInventory);

const users = [
  { firstName: "Ali", lastName: "Khan" },
  { firstName: "Sara", lastName: "Ahmed" }
];

const updatedUsers = users.map(user => ({
  ...user,
  fullName: `${user.firstName} ${user.lastName}`
}));

console.log(updatedUsers);
console.log(users);

const orders = [
  { id: 1, total: 250 },
  { id: 2, total: 80 },
  { id: 3, total: 150 }
];

const updatedOrders = orders.map(order => ({
  ...order,
  priority: order.total >= 200
}));

console.log(updatedOrders);
console.log(orders); 