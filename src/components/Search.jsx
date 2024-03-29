// ** React Imports
import React, { useState } from 'react'

// ** Custom Styles Imports
import '../styles/search.css'

// ** react-router-dom Imports
import { Link, useNavigate } from 'react-router-dom'

const Search = () => {

    // ** states
    const [searchValue, setSearchValue] = useState('');

    // ** react-router-dom hooks
    const navigate = useNavigate();

    // ** handling search functionality and redirecting to deatils page
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/pokemon/${searchValue.trimStart()}`)
    }

    return (
        <section className='search-main'>
            <div className="search">
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" placeholder='Entrer le nom ou Numéro de Pokemon' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                    <button type='submit'>Chercher</button>
                </form>
                <div className='search-example'>
                    <p id='eg'>Ex: </p>
                    <Link to='/pokemon/bulbasaur'><p>bulbasaur,</p></Link>
                    <Link to='/pokemon/ivysaur'><p>ivysaur,</p></Link>
                    <Link to='/pokemon/venusaur'><p>venusaur,</p></Link>
					 <Link to='/pokemon/venusaur'><p>3</p></Link>
                </div>
            </div>
        </section>
    )
}

export default Search