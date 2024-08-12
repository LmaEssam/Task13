import './Mainpage.css'
import sun from '../../assets/images/002-sun.svg'
import Searchwrapper from '../Searchwrapper/Searchwrapper'
import avatar from '../../assets/images/Bitmap.png'
import location from '../../assets/images/003-pin.png'
import url from '../../assets/images/002-url.png'
import twitter from '../../assets/images/004-twitter.png'
import build from '../../assets/images/001-office-building.png'
import moon from '../../assets/images/moon.svg'
import { useTheme } from '../../ThemeContext'; 
function Mainpage(){
    const { isDarkTheme, toggleTheme } = useTheme();
    return(
        <div id='mainpage' className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
            <div id='headersearch'>
            <div id='header'>
                <label id='intro'>devfinder</label>
                <button id='Theme' onClick={toggleTheme}>
                {isDarkTheme ? 'Light' : 'Dark'}
                   
                    <img src={isDarkTheme ? sun : moon}/>
                </button>
            </div>
            <Searchwrapper></Searchwrapper>
            </div>
            <div id='content'>
                
                
               
                <div id='info'>
                    <div id='first'>
                    <div id='image'>

                    <img src={avatar} id='avatar'/>
                        <div id='partone'>
                        <h1 id='name'>The Octocat</h1>
                        <label id='mention'>@octocat </label>
                        </div>
                        </div>

                        <label id='date'>Joined 25 Jan 2011</label>
                    </div>
                    <div id='middle'>
                        <label id='phrase'>This profile has no bio</label>
                        <div id='middlepart'>
                            <div id='followers'>
                                <div className='firstpart'>
                                <label className='follower'>Reposts</label>
                                <label className='number'>8</label>
                                </div>
                                <div className='firstpart'>
                                <label className='follower'>Followers</label>
                                <label className='number'>3938</label>
                                </div>
                                <div className='firstpart'>
                                <label className='follower'>Following</label>
                                <label className='number'>9</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='footer'>
                        <div className='one'>
                            <label id='location' ><img className='img' src={location}/>San Francisco</label>
                            <label id='url'><img className='img' src={url}/>https://github.blog</label>
                        </div>
                        <div className='one'>
                            <label ><img className='img' src={twitter}/>Not Available</label>
                            <label id='build'><img className='img' src={build }/>@github</label>
                        </div>

                    </div>

                </div>

            </div>
        
        </div>
    )
}
export default Mainpage