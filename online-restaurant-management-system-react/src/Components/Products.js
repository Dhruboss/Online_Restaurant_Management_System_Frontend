import React from "react";
import ReactDOM from 'react-dom';


const Products = () => {

    
    
    function Prolist(props) {
      return <li>{ props.name }</li>;
    }
    
    function List() {
      const lists = [
        {id: 1, name: 'Burger'},
        {id: 2, name: 'Sandwitch'},
        {id: 3, name: 'Milkshake'}
      ];
      return (
          <div> 
            <h1>Products</h1>
            <ul>
            {lists.map((list) => <Prolist key={list.id} name={list.name} />)}
          </ul>
          </div>
      );
    }
    
      ReactDOM.render(<List />, document.getElementById('root'));
}
export default Products; 