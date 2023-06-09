import React, { useEffect, useState } from 'react';
import '../components/search/styleSearch.scss'
import IconPizza from '../assets/icons/pizza.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Button, Form } from 'react-bootstrap';
import { getPizzas } from '../services/getPizzas';


const Search = () => {

  const [pizzas, setPizzas] = useState([]);
  const [searchPizzas, setSearchPizzas] = useState("");


  useEffect(() => {
    getPizzas().then((response)=>{
      console.log(response)
      setPizzas(response)
    })
  }, [])

  const handleSearchPizza = (event) => {
    event.preventDefault();
    setSearchPizzas(event.target.value);
    console.log(searchPizzas)
    const filteredPizzas = pizzas.filter((pizza) =>
      pizza.name.toLowerCase().includes(searchPizzas.toLowerCase())
    );
    console.log(filteredPizzas)
  }
  return (
    <div className='search'>
      <div className='search__header'>
        <div className='search__left'>
          <h2>Home</h2>
          <p>¡Qué bueno verte Cris!</p>
        </div>
        <div className='search__image'></div>
      </div>
      <div className="search__bar">
        <Form className="search__form"  onSubmit={handleSearchPizza} >
            <Form.Control
              type="text"
              placeholder="Pizza de peperoni, mexicana, hawaiana..."
              className="me-2 search__input"
              aria-label="Search"
              onChange={handleSearchPizza}
            />
          <Button type="submit" variant="outline-success" className='search__button'><FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#d0758e", height: "65%"}} /></Button>
        </Form>  
      </div>
      <div className="search__pizza">
        <figure className='search__figure'>
            <img src={IconPizza} alt="Icon Pizza" className='search__icon'/>
        </figure>
        <p>Busca la Pizza que más te gusta</p>
      </div>
    </div>
  )
}

export default Search