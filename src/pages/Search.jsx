import React, { useEffect, useState } from "react";
import IconPizza from "../assets/icons/pizza.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Button, Form } from "react-bootstrap";
import { getPizzas } from "../services/getPizzas";
import Header from "../components/home/header/header";
import Footer from "../components/home/footer/footer";
import Carrousel from "../components/home/carousel/Carrousel";

const Search = () => {
  const [pizzas, setPizzas] = useState([]);
  const [searchPizzas, setSearchPizzas] = useState("");
  const [foundPizzas, setFoundPizzas] = useState([]);

  useEffect(() => {
    getPizzas().then((response) => {
      console.log(response);
      setPizzas(response);
    });
  }, []);

  const handleSearchPizza = (event) => {
    setSearchPizzas(event.target.value);
  };

  useEffect(() => {
    if (searchPizzas.trim() === "") {
      setFoundPizzas([]);
      return;
    }

    const filteredPizzas = pizzas.filter((item) =>
      item.name.toLowerCase().includes(searchPizzas.toLowerCase())
    );
    setFoundPizzas(filteredPizzas);
  }, [pizzas, searchPizzas]);

  return (
    <div className="search">
      <Header />
      <div className="search__bar">
        <Form className="search__form">
          <Form.Control
            type="text"
            placeholder="Pizza de pepperoni, mexicana, hawaiana..."
            className="me-2 search__input"
            aria-label="Search"
            value={searchPizzas}
            onChange={handleSearchPizza}
          />
          <button
            type="submit"
            variant="outline-success"
            className="search__button"
          >
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "#d0758e", height: "65%" }}
            />
          </button>
        </Form>
      </div>
      <div style={{height: "100vh"}}>
        <div className="search__results">
          <span>{foundPizzas.length} Resultados</span>
        </div>
        {foundPizzas.length ? (
          <div className="body__results">
            <Carrousel data={foundPizzas} />
          </div>
        ) : (
          searchPizzas.trim() !== "" && (
            <div className="search__pizza body">
              <figure className="search__figure">
                <img
                  src={IconPizza}
                  alt="Icono Pizza"
                  className="search__icon"
                />
              </figure>
              <p>Busca la Pizza que más te gusta</p>
            </div>
          )
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Search;