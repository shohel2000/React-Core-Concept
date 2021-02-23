import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var hero = ['Manna', 'Shakib', 'Shakil', 'Alomgir', 'bappy'];
  var heroin = ['Mousomi', 'Apu Islam', 'Popi', 'Sabana'];
  var products = [
    { name: 'PhotoShop', price: '$520' },
    { name: 'Illustrator', price: '$320' },
    { name: 'PDF Reader', price: '$220' }
  ]
  var products2 = [
    { name: 'PhotoShop', price: '$520' },
    { name: 'Illustrator', price: '$320' },
    { name: 'PDF Reader', price: '$220' }
  ]
  const productsName = products.map(items => items.name)
  console.log(productsName)

  return (
    <div className="App">
      <header className="App-header">
        <p>React Core Concept</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            hero.map(singleHero => <li>{singleHero}</li>)
          }
          {
            heroin.map(singleHeroin => <li>{singleHeroin}</li>)
          }
          {
            products.map(productItem => <li>{productItem.name}</li>)
          }
        </ul>
        <Person></Person>
        <Person></Person>
        <Person></Person>
        {/* dynamically call */}
        <FemousPerson nayok="Ferdous" nayika="Sabnur"></FemousPerson>
        <FemousPerson nayok="Riyaz" nayika="Pornima"></FemousPerson>
        <FemousPerson nayok={hero[3]} nayika={heroin[3]}></FemousPerson>
        {
          products.map(sinProduct => <Product product1={sinProduct}></Product>)
        }
        {
          products.map(pd => <Product2 product={pd}></Product2>)
        }
      </header>
    </div>
  );
}

function Person() {
  var personStyle = {
    height: '300px',
    width: '700px',
    border: '1px solid white',
    padding: '20px',
    backgroundColor: 'skyblue',
    margin: '20px'
  }

  return (
    <div style={personStyle}>
      <h1>Name: Md. Shohel Rana</h1>
      <h3>Post : Software Developer</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sequi fugit, rerum a magnam fugiat error in consequatur debitis reiciendis.</p>
      <button className="btn" style={{ padding: '5px', backgroundColor: 'green', border: 'none' }}>know more..</button>
    </div>
  )
}

function FemousPerson(props) {
  console.log(props)
  return (
    <div style={{ border: '1px solid #f1f1f1', margin: '10px', padding: '10px', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <h2>Nayok : {props.nayok}</h2>
      <h3>Hero of {props.nayika}</h3>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    width: '500px',
    backgroundColor: '#f1f1f1',
    color: 'black',
    margin: '10px',
    padding: '10px'
  }
  const { name, price } = props.product1;
  return (
    <div style={productStyle}>
      <h2>{props.product1.name}</h2>
      <h5>{props.product1.price}</h5>
      <button>Buy Now</button>
    </div>
  )
}
// full objects pass
function Product2(props) {
  const productStyle = {
    width: '500px',
    backgroundColor: 'gray',
    color: 'white',
    margin: '10px',
    padding: '10px'
  }
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h2>{props.product.name}</h2>
      <h5>{props.product.price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

// state hook
function Counter() {
  const [count, setCount] = useState(0)
  const handleIncrease = () => setCount(count + 1)
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={() => setCount(count - 1)}>DeCrease</button>
    </div>
  )
}

function Users() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUser(data))

  }, [])
  return (
    <div>
      <h3>Dynamic Users: {user.length}</h3>
      {
        user.map(userName => <li>{userName.name}</li>)
      }
    </div>
  )
}
export default App;
