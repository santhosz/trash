import React, { useState } from 'react';
import '../../assets/styles/Shop.css'
import lap from '../../assets/images/lap.avif';
import phone from '../../assets/images/phone.png';
import watch from '../../assets/images/smartw.avif';
import tablets from '../../assets/images/tablets.jpg';
import headphone from '../../assets/images/headphone.jpg';
import Camera from '../../assets/images/camera.jpg';
import Speaker from '../../assets/images/sp.jpg';
import moniter from '../../assets/images/moniter.jpg';
import Keyboard from '../../assets/images/keyboard.jpg';
import Mouse from '../../assets/images/mouse.jpg';
import Router from '../../assets/images/router.jpg';
import printer from '../../assets/images/printer.jpg';
import scanner from '../../assets/images/scanner.jpg';
import webcam from '../../assets/images/webcam.jpg';
import hardex from '../../assets/images/hardex.jpg';
import pendrive from '../../assets/images/pendrive.jpg';
import Memory from '../../assets/images/memory.jpg';
import Charger from '../../assets/images/charge.jpg';

const posts = [
    { productName: 'Laptop', link: 'https://vuejs.org/', coins: 300, img:lap },
    { productName: 'SmartPhone', link: 'https://facebook.github.io/react/', coins: 1000, img:phone },
    { productName: 'Smartwatch', link: 'https://angularjs.org/', coins: 200, img:watch},
    { productName: 'Tablet', link: 'http://emberjs.com/', coins: 400, img: tablets },
    { productName: 'Headphones', link: 'https://www.meteor.com/', coins: 150, img: headphone },
    { productName: 'Camera', link: 'http://aurelia.io/', coins: 600, img: Camera },
    { productName: 'Speaker', link: 'https://nodejs.org/en/', coins: 250, img: Speaker },
    { productName: 'Monitor', link: 'https://pusher.com/', coins: 300, img: moniter },
    { productName: 'Keyboard', link: 'http://feathersjs.com/', coins: 100, img:Keyboard },
    { productName: 'Mouse', link: 'http://feathersjs.com/', coins: 50, img: Mouse },
    { productName: 'Router', link: 'http://feathersjs.com/', coins: 120, img: Router },
    { productName: 'Printer', link: 'http://feathersjs.com/', coins: 250, img: printer },
    { productName: 'Scanner', link: 'http://feathersjs.com/', coins: 200, img: scanner },
    { productName: 'Webcam', link: 'http://feathersjs.com/', coins: 80, img: webcam },
    { productName: 'External Hard Drive', link: 'http://feathersjs.com/', coins: 150, img: hardex },
    { productName: 'Flash Drive', link: 'http://feathersjs.com/', coins: 20, img: pendrive },
    { productName: 'Memory Card', link: 'http://feathersjs.com/', coins: 30, img: Memory },
    { productName: 'Charger', link: 'http://feathersjs.com/', coins: 25, img: Charger },
  ];
  
  const Shop = () => {
    const [search, setSearch] = useState('');
  
    const filteredList = posts.filter(post => 
      post.productName.toLowerCase().includes(search.toLowerCase())
    );
  
    return (
      <div id="app">
        <div className="search-wrapper">
          <input 
            type="text" 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            placeholder="Search product name.." 
          />
          <label>Search product name:</label>
        </div>
        <div className="wrapper">
          {filteredList.map((post, index) => (
            <div className="card" key={index}>
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                <img src={post.img} alt={post.productName} />
                <small>Coins needed: {post.coins}</small>
                <p>{post.productName}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
  


  export default Shop;