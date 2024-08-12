import './Searchwrapper.css'
import search from '../../assets/images/Shape 2.png'
function Searchwrapper(){
    return(
        <div id='searchbar'>
        <div id='search'>
            <img src={search}/> 
            <input placeholder='Search GitHub username…'/>
        
        </div>
        <button id='sbtn'>search</button>
        </div>
    )
}
export default Searchwrapper