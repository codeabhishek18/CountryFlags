import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Countries.module.css';

const Countries = () =>
{
    const [data, setData] = useState([]);

    useEffect(() =>
    {
        getCountries();
    },[]);

    const getCountries = async () =>
    {
        const url = 'https://restcountries.com/v3.1/all';
        const response = await axios.get(url);
        setData(response.data);
    }

    console.log(data);

    return(
        <div className={styles.container}>
            {data.map((country)=>
            (
                <div className={styles.country} key={country.name.common}>
                    <img src={country.flags.png} alt={country.flags.alt}/>
                    <p>{country.name.common}</p>
                </div>
            ))}
        </div>
    )
}

export default Countries