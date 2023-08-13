// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Zordshop {
    address public owner;
    uint256 public itemCounter;
    struct Item {
         uint256 id;
         string name;
         string category;
         string image;
         uint256 cost;
         uint256 rating;
         uint256 stock;
    }

    struct Order{
         uint256 time;
         Item item;
    }

    mapping(uint256 => Item)public items;
    mapping(address => mapping(uint256 => Order))public orders;
    mapping(address => uint256)public orderCount;

    event Buy(address buyer,uint256 orderId, uint256 itemId);
    event List(string name,uint256 cost, uint256 quantity);

    modifier onlyOwner(){
        require(msg.sender==owner);
        _;
    }
    constructor() {
        owner =msg.sender;
    }

    function list(uint256 _id,string memory _name,string memory _category,string memory _image,uint256 _cost,uint256 _rating,uint256 _stock) public onlyOwner{
        Item memory item = Item(_id,_name,_category,_image,_cost,_rating,_stock);

       
        items[_id] =item;

      
        emit List(_name,_cost,_stock);
    }

    function buy(uint256 _id) public payable {
        Item memory item =items[_id];

        
        require(msg.value>=item.cost);
        require(item.stock>0);
        Order memory order = Order(block.timestamp,item);
        orderCount[msg.sender]++; 
        orders[msg.sender][orderCount[msg.sender]] =order;
         items[_id].stock=item.stock - 1;
        emit Buy(msg.sender, orderCount[msg.sender],item.id);
    }

    function withdraw() public onlyOwner {
        (bool success, ) =owner.call{value: address(this).balance}(" ");
        require(success) ;
    }
    function getAllItems() public view returns (uint256[] memory, string[] memory, string[] memory, string[] memory, uint256[] memory, uint256[] memory, uint256[] memory) {
    uint256 itemCount = itemCounter;
    uint256[] memory ids = new uint256[](itemCount);
    string[] memory names = new string[](itemCount);
    string[] memory categories = new string[](itemCount);
    string[] memory images = new string[](itemCount);
    uint256[] memory costs = new uint256[](itemCount);
    uint256[] memory ratings = new uint256[](itemCount);
    uint256[] memory stocks = new uint256[](itemCount);

    for (uint256 i = 0; i < itemCount; i++) {
        ids[i] = items[i].id;
        names[i] = items[i].name;
        categories[i] = items[i].category;
        images[i] = items[i].image;
        costs[i] = items[i].cost;
        ratings[i] = items[i].rating;
        stocks[i] = items[i].stock;
    }

    return (ids, names, categories, images, costs, ratings, stocks);
}

}





