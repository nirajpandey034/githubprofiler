import React, { useState, useContext } from 'react'
import Card from './Card'
import axios from 'axios';

import '../Stylesheets/Card.css'

import { Context } from './Store';

function Dashboard() {
    const [userName, setUserName] = useState('');

    const [state, dispatch] = useContext(Context);

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    }

    const getDetails = () => {
        //make request to git api
        if (userName !== '') {
            let profile_url = `https://api.github.com/users/${userName}`;
            axios.get(profile_url)
                .then((data) => {
                    let dat = [];
                    dat = [<Card key={data.data.id} avatar_url={data.data.avatar_url}
                        name={data.data.name} location={data.data.location}
                        followers={data.data.followers} bio={data.data.bio} delete={deleteCard} profile={data.data.login} />]
                    dispatch({ type: 'ADD_CARDS', payload: dat });
                    setUserName('');
                })
                .catch((err) => {
                    alert("Some error occurred, please try again")
                })
        }
        else {
            alert('Kindly provide correct username')
        }
    }
    const deleteCard = (name) => {
        dispatch({ type: 'DELETE_CARDS', payload: name })
    }

    const sortByName = () => {
        dispatch({ type: 'SORT_CARDS_BY_NAME' })
    }

    const sortByFollowers = () => {
        dispatch({ type: 'SORT_CARDS_BY_FOLLOWERS' })
    }
    const sortByLocation = () => {
        dispatch({ type: 'SORT_CARDS_BY_LOCATION' })
    }
    return (
        <div>
            <div style={{ display: 'flex', marginRight: 'auto', marginTop: '10px', marginLeft: '10px' }}>
                <input type="text" onChange={handleUserNameChange}
                    value={userName} placeholder="github login"></input>
                &emsp;
                <button onClick={getDetails} style={{ "backgroundColor": "#4169E1" }}>Add</button>
            </div>
            <br />
            <div style={{ display: 'flex' }} className="sort-body">
                <p><strong>Sort By:</strong></p>
                <p onClick={sortByName} id='sorter-name'>Name</p>
                <p onClick={sortByFollowers} id='sorter-followers'>Followers</p>
                <p onClick={sortByLocation} id='sorter-location'>Location</p>
            </div>
            <div className="card-container">
                {state.cards}
            </div>
        </div>
    )
}

export default Dashboard
