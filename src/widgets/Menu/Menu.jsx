import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../main.css";
import data from "./menuItems";
import axios from 'axios';
//import jwt from 'jsonwebtoken';

function Menu({ actionProvider, orderedItems, setState }) {
  const [index, setIndex] = useState(0);
  const [submit, setSubmit] = useState(false);
  const [count, setCount] = useState(0);

  //enable the add to cart button if atleast one item is added
  const [enable, setEnable] = useState(false);
  const [menu, setMenu] = useState(data);
  const [items, setItems] = useState([]);

  //destructuring
  const { id, text, img, desc, price, qty } = menu[index];
  const addNewItem=(e) =>{
    if (count > 0) {
      setEnable(true);
      const newMenu = [...menu];
      newMenu[index].added = true;
      setMenu(newMenu);
      menu[index].qty = count;


      const newItem = {
        //id: e.target.id,
        itemName: e.target.value,
        quantity: count,
        price:count*price
      };

      

      const newItems =[...items, newItem];

      setItems(newItems);
      //console.log(items);
      console.log(newItems);
    }
    setCount(0);
  }
  /**counter */
  const increase=()=> {
    setCount(count + 1);
  }

  const decrease=()=>{
    if (count >= 1) {
      setCount(count - 1);
    }
  }
  const checkBoundary=(index) => {
    if (index < 0) setIndex(data.length - 1);
    else if (index >= data.length) setIndex(0);
    else setIndex(index);
    setCount(0);
  }
 const nextItem=() =>{
    const newIndex = index + 1;
    checkBoundary(newIndex);
  }
  const prevItem=()=> {
    const newIndex = index - 1;
    checkBoundary(newIndex);
  }

  const handleSubmit=()=>{
    setSubmit(!submit);
    setState((state) => ({
      ...state,
      orderedItems: [...items]
    }));
    actionProvider.handleToppings();
  }


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  // console.log(items);
  // //console.log(newItems);
  //   try {
  //     const response = await axios.post(
  //       `${process.env.REACT_APP_BASE_URL}/items/details`,
  //       { title : items },
  //       {
  //         headers: {
  //           accesstoken: localStorage.getItem("token"),
  //         },
  //       }
  //     );
  //     console.log(response.data);
  //     setState((state) => ({
  //       ...state,
  //       orderedItems: [...items],
  //     }));
  //     setSubmit(true);
  //     actionProvider.handleToppings();
  //   } catch (error) {
  //     console.log("Error:", error);
  //   }
  // };
  
    
    return (
      <main>
        <div className="card-deck">
          <div className="card-wrapper">
            <div className="card-main" key={id}>
              <img className="card-img-top" src={img} alt="food" />
  
              <div className="card-block">
                <h4 className="card-title">{text}</h4>
                <p>{desc}</p>
              </div>
              <div>
                {menu[index].added === false && (
                  <div>
                    <div class="counter-deck">
                    <button className="counter" onClick={decrease}>
                      -
                    </button>
                    <p className="counter">{count}</p>
                    <button className="counter" onClick={increase}>
                      +
                    </button>
                    <p>PRICE: ${price * count}</p>
                    </div>
                  </div>
                )}
                {menu[index].added === true && (
                  <p>
                    {menu[index].qty} {text} added
                  </p>
                )}
              </div>
            </div>
  
            <div className="card-footer">
              {menu[index].added === false && (
                <button onClick={addNewItem} id={id} value={text}>
                  Add +
                </button>
              )}
              {menu[index].added === true && (
                <button disabled={true}>Added ✓</button>
              )}
            </div>
  
            <button className="prev-btn" onClick={() => prevItem()}>
              <FaChevronLeft />
            </button>
            <button className="next-btn" onClick={() => nextItem()}>
              <FaChevronRight />
            </button>
          </div>
          {!submit && (
            <button disabled={!enable} onClick={handleSubmit}>
              Order Now
            </button>
          )}
          {submit && <button disabled={true}>✓ Added to Cart</button>}
        </div>
      </main>
    );
  
  




  }

  export default Menu;
  //console.log(items);

  

  