import detailStyle from '../style/detail.module.scss'
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { callAPI } from '../domain/api.jsx';
import Navbar from './Navbar';

const Detail = () => {
    const { nameCountry } = useParams();
    const [countryDetail, setCountryDetail] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await callAPI({
                    endpoint: `https://restcountries.com/v3.1/name/${nameCountry}`,
                    method: 'GET',
                });

                if (Array.isArray(response) && response.length > 0) {
                    setCountryDetail(response[0]);
                } else {
                    console.log('Country not found');
                }
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [nameCountry]);
    console.log(countryDetail)
    return (
        <>
        <Navbar />
        
        <div className={detailStyle.container}>
            <Link to="/" className={detailStyle.back} style={{ textDecoration: 'none' }}>
                Back
            </Link>
            {countryDetail && (
                <div className={detailStyle.detailContainer}>
                    <img src={countryDetail.flags.png} alt={countryDetail.name.common} />
                    <div className={detailStyle.left}>
                        <h2>{countryDetail.name.common}</h2>
                        <p><b>Native Name:</b> {countryDetail.altSpellings[1]}</p>
                        <p><b>Population:</b> {countryDetail.population}</p>
                        <p><b>Region:</b> {countryDetail.region}</p>
                        <p><b>Subregion:</b> {countryDetail.subregion}</p>
                        <p><b>Capital:</b> {countryDetail.capital}</p>
                    </div>
                    <div className={detailStyle.right}>
                        <p><b>Top Level Domain:</b> {countryDetail.tld}</p>
                        <p><b>Currencies:</b> EUR</p>
                        <p><b>Languages:</b> {Object.values(countryDetail.languages).join(', ')}</p>
                    </div>
                    <div className={detailStyle.footer}>
                        <p><b>Border Countries:</b> {countryDetail.borders.join(', ')}</p>
                    </div>
                </div>
            )}
        </div>
        </>
    );
};

export default Detail;
