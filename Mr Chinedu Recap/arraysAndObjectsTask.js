//1. Object: Student

let student = {
    name: "John Doe",
    age: 22,
    courses: ["Mathematics", "Physics", "Computer Science"],
    address: {
        city: "New York",
        zip: "10001"
    }
};

console.log(student.name); 
console.log(student.courses[1]);
console.log(student.address.zip);

//2. Update Object Properties
student.age = 23;
student.GPA = 3.8;
console.log(student);

function getDetails(student) {
    return `${student.name} is ${student.age} years old and has a GPA of ${student.GPA}.`;
}

console.log(getDetails(student));

//3. Object: Bank Account
let bankAccount = {
    owner: "Alice",
    balance: 500,
    deposit: function(amount) {
        this.balance += amount;
        console.log(`Deposited: $${amount}. New balance: $${this.balance}`);
    },
    withdraw: function(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew: $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Insufficient funds.");
        }
    }
};

bankAccount.deposit(200);
bankAccount.withdraw(1000);
console.log(bankAccount.balance);


//4. Object: Inventory Item
const inventory = {
    apple: 10,
    banana: 5,
    orange: 8,
    mango: 12
};

for (const fruit in inventory) {
    console.log(`${fruit}: ${inventory[fruit]}`);
}


//5. Object: Company
const company = {
    name: "TechCorp",
    location: "San Francisco",
    employees: [
        { id: "001", name: "Alice", department: "Engineering" },
        { id: "002", name: "Bob", department: "HR" },
        { id: "003", name: "Charlie", department: "Marketing" },
        { id: "004", name: "David", department: "Sales" }   
    ]

};

console.log(company.employees[2].name);

const { name, location } = company;
console.log(`Company Name: ${name}, Location: ${location}`);


for (const employee of company.employees) {
    console.log(`Employee Name: ${employee.name}, Department: ${employee.department}`);
}

//6. Object: Products
let products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 500},
    { id: 4, name: "Desktop", price: 700 }
];

function findExpensiveProducts(products, threshold){
    let expensiveProducts = [];
    for (const product of products) {
        if(product.price > threshold){
            expensiveProducts.push(product);
        }
    }
    return expensiveProducts;
}

console.log(findExpensiveProducts(products, 700));
