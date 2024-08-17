import './Searchwrapper.css'
import search from '../../assets/images/Shape 2.png'
import { useState } from 'react'
function Searchwrapper({ onSearch }){
    const [username, setUsername] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(username);
    };
    return(
        <form onSubmit={handleSubmit}>
        <div id='searchbar'>
        <div id='search'>
            <img src={search}/> 
            <input
             value={username}
             onChange={(e) => setUsername(e.target.value)}
            placeholder='Search GitHub username…'/>
        </div>
        <button id='sbtn'>search</button>
        </div>
        </form>
    )
}
export default Searchwrapper