const Amazon = [
  {name: "Lenovo legon", company: "Lenovo", price: 80000, rating: 4.5,card:true,publishedYear: 2021},

  {name: "Dell Inspiron", company: "Dell", price: 70000, rating: 4.0,card:true,publishedYear: 2020},
  {name: "HP Pavilion", company: "HP", price: 60000, rating: 3.5,card:false,publishedYear: 2019},
  {name: "Asus Zenbook", company: "Asus", price: 90000, rating: 4.8,card:true,publishedYear: 2022},
  {name: "Acer Aspire", company: "Acer", price: 50000, rating: 3.8,card:false,publishedYear: 2018},
  {name: "Lenovo ThinkPad", company: "Lenovo", price: 85000, rating: 4.2,card:true,publishedYear: 2021},
  {name: "Dell XPS", company: "Dell", price: 95000, rating: 4.6,card:true,publishedYear: 2022},
  {name:"Lenovo IdeaPad", company:"Lenovo", price: 40000, rating: 3.9, card:false, publishedYear:2017},
  {name: "HP Envy", company: "HP", price: 75000, rating: 4.1,card:true,publishedYear: 2020},
  {name:"Lenovo Yoga", company:"Lenovo", price: 92000, rating: 4.7, card:true, publishedYear:2022},

];
//task: find all lenovo laptops with rating >4 and price <90000 and having card true


let newamazon = Amazon.filter((laptops) => {
  return laptops.company === "Dell" && laptops.rating > 0 && laptops.price > 0 && laptops.card === true
})
const sum = newamazon.reduce((acc, laptop) => {
    return acc + laptop.price
}, 0)

const usdprice = newamazon.map((laptop) => {
    return laptop.price / 140
})
console.log(newamazon)
console.log(sum)
console.log(usdprice)