import { ethers } from 'ethers'

// Components
// import Rating from './Rating'

const Section = ({ title, items, togglePop }) => {
    return (
        <div className='cards__section'>
            <h3 id={title}>{title}</h3>

            <hr />

            <div className='cards'>
                {items.map((item, index) => (
                    <div className='card' key={index} onClick={() => togglePop(item)}>
                        <div className='card__image'>
                            <img src={item.image} alt="Item"  />
                        </div>
                        <div className='card__info'>
                            <h4>{item.name}</h4>
                            {/* <Rating value={item.rating} /> */}
                            <p>{ethers.utils.formatUnits(item.cost.toString(), 'ether')} ETH</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Section;

// import React, { useEffect, useState } from 'react';
// import { ethers } from 'ethers';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const init = async () => {
//       // Connect to the Ethereum blockchain using ethers.js
//       if (window.ethereum) {
//         await window.ethereum.enable();
//       }

//       const provider = new ethers.providers.Web3Provider(window.ethereum);

//       // Contract ABI (Application Binary Interface)
//       const contractABI = [
//         {
//             "inputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "_id",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "buy",
//             "outputs": [],
//             "stateMutability": "payable",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "string",
//                     "name": "_name",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "_category",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "_image",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "_cost",
//                     "type": "uint256"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "_rating",
//                     "type": "uint256"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "_stock",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "list",
//             "outputs": [],
//             "stateMutability": "nonpayable",
//             "type": "function"
//         },
//         {
//             "inputs": [],
//             "stateMutability": "nonpayable",
//             "type": "constructor"
//         },
//         {
//             "anonymous": false,
//             "inputs": [
//                 {
//                     "indexed": false,
//                     "internalType": "address",
//                     "name": "buyer",
//                     "type": "address"
//                 },
//                 {
//                     "indexed": false,
//                     "internalType": "uint256",
//                     "name": "orderId",
//                     "type": "uint256"
//                 },
//                 {
//                     "indexed": false,
//                     "internalType": "uint256",
//                     "name": "itemId",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "Buy",
//             "type": "event"
//         },
//         {
//             "anonymous": false,
//             "inputs": [
//                 {
//                     "indexed": false,
//                     "internalType": "uint256",
//                     "name": "id",
//                     "type": "uint256"
//                 },
//                 {
//                     "indexed": false,
//                     "internalType": "string",
//                     "name": "name",
//                     "type": "string"
//                 },
//                 {
//                     "indexed": false,
//                     "internalType": "uint256",
//                     "name": "cost",
//                     "type": "uint256"
//                 },
//                 {
//                     "indexed": false,
//                     "internalType": "uint256",
//                     "name": "stock",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "List",
//             "type": "event"
//         },
//         {
//             "inputs": [],
//             "name": "withdraw",
//             "outputs": [],
//             "stateMutability": "nonpayable",
//             "type": "function"
//         },
//         {
//             "inputs": [],
//             "name": "getAllItems",
//             "outputs": [
//                 {
//                     "internalType": "uint256[]",
//                     "name": "ids",
//                     "type": "uint256[]"
//                 },
//                 {
//                     "internalType": "string[]",
//                     "name": "names",
//                     "type": "string[]"
//                 },
//                 {
//                     "internalType": "string[]",
//                     "name": "categories",
//                     "type": "string[]"
//                 },
//                 {
//                     "internalType": "string[]",
//                     "name": "images",
//                     "type": "string[]"
//                 },
//                 {
//                     "internalType": "uint256[]",
//                     "name": "costs",
//                     "type": "uint256[]"
//                 },
//                 {
//                     "internalType": "uint256[]",
//                     "name": "ratings",
//                     "type": "uint256[]"
//                 },
//                 {
//                     "internalType": "uint256[]",
//                     "name": "stocks",
//                     "type": "uint256[]"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [],
//             "name": "itemCounter",
//             "outputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "",
//                     "type": "uint256"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "items",
//             "outputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "id",
//                     "type": "uint256"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "name",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "category",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "image",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "cost",
//                     "type": "uint256"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "rating",
//                     "type": "uint256"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "stock",
//                     "type": "uint256"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "address",
//                     "name": "",
//                     "type": "address"
//                 }
//             ],
//             "name": "orderCount",
//             "outputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "",
//                     "type": "uint256"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "address",
//                     "name": "",
//                     "type": "address"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "orders",
//             "outputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "time",
//                     "type": "uint256"
//                 },
//                 {
//                     "components": [
//                         {
//                             "internalType": "uint256",
//                             "name": "id",
//                             "type": "uint256"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "name",
//                             "type": "string"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "category",
//                             "type": "string"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "image",
//                             "type": "string"
//                         },
//                         {
//                             "internalType": "uint256",
//                             "name": "cost",
//                             "type": "uint256"
//                         },
//                         {
//                             "internalType": "uint256",
//                             "name": "rating",
//                             "type": "uint256"
//                         },
//                         {
//                             "internalType": "uint256",
//                             "name": "stock",
//                             "type": "uint256"
//                         }
//                     ],
//                     "internalType": "struct Zordshop.Item",
//                     "name": "item",
//                     "type": "tuple"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [],
//             "name": "owner",
//             "outputs": [
//                 {
//                     "internalType": "address",
//                     "name": "",
//                     "type": "address"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         }
//     ];

//       // Contract address
//       const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'; // Replace with your actual contract address

//       // Create a contract instance
//       const contract = new ethers.Contract(contractAddress, contractABI, provider);

//       // Function to retrieve all products from the smart contract
//       const getAllItems = async () => {
//         const itemCount = await contract.itemCounter();
//         const items = [];

//         for (let i = 0; i < itemCount; i++) {
//           const item = await contract.items(i);
//           items.push(item);
//         }

//         return items;
//       };

//       // Fetch products and update state
//       const products = await getAllItems();
//       setProducts(products);
//     };

//     init();
//   }, []);

//   return (
//     <div>
//       {products.map((product, index) => (
//         <div key={index} className="card">
//           <h2>Item ID: {product.id.toNumber()}</h2>
//           <p>Name: {product.name}</p>
//           <p>Category: {product.category}</p>
//           <p>Image: {product.image}</p>
//           <p>Cost: {product.cost.toNumber()}</p>
//           <p>Rating: {product.rating.toNumber()}</p>
//           <p>Stock: {product.stock.toNumber()}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductList;
