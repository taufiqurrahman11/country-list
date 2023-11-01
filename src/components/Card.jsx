import cardStyle from '../style/card.module.scss'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { callAPI } from '../domain/api.jsx';

const Card = ({ searchKeyword }) => {
    const [countries, setCountries] = useState()
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await callAPI({ endpoint: 'https://restcountries.com/v3.1/all', method: 'GET' });
                setCountries(response);
            } catch (error) {
                console.log(error);
            }   
        }
    
        fetchData();
    }, []);
    
    useEffect(() => {
        if (searchKeyword && countries) {
            const filtered = countries.filter((country) => {
                return country.name.common.toLowerCase().includes(searchKeyword.toLowerCase());
            });
            setFilteredCountries(filtered);
        } else {
            setFilteredCountries(countries);
        }
    }, [searchKeyword, countries]);

    const toggleFavorite = (countryName) => {
        if (favorites.includes(countryName)) {
          const updatedFavorites = favorites.filter((name) => name !== countryName);
          setFavorites(updatedFavorites);
          localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        } else {
          const updatedFavorites = [...favorites, countryName];
          setFavorites(updatedFavorites);
          localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        }
      };

    return (
        <div className={cardStyle.content}>
            {
                countries?.map((el) => (
                    <div className={cardStyle.card} key={el.name.common}>
                        <img src={el.flags?.png} className={cardStyle.cardImage} alt="Flags" />
                        <div className={cardStyle.cardBody}>
                            <h5 className={cardStyle.cardTitle}>{el.name?.common}</h5>
                            <p className={cardStyle.cardText}>Population: {el.population}</p>
                            <p className={cardStyle.cardText}>Region: {el.region}</p>
                            <p className={cardStyle.cardText}>Capital: {el.capital}</p>
                            <Link to={`/country/${el.name.common}`}>
                            <button>Detail</button>
                            </Link>
                            <button onClick={() => toggleFavorite(el.name.common)}>
                            {favorites.includes(el.name.common) ? 'Remove from Favorites' : 'Add to Favorites'}
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}


export default Card