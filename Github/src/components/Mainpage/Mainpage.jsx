import './Mainpage.css'
import sun from '../../assets/images/002-sun.svg'
import Searchwrapper from '../Searchwrapper/Searchwrapper'
//import avatar from '../../assets/images/Bitmap.png'
import location from '../../assets/images/003-pin.png'
import url from '../../assets/images/002-url.png'
import twitter from '../../assets/images/004-twitter.png'
import build from '../../assets/images/001-office-building.png'
import moon from '../../assets/images/moon.svg'
import { useTheme } from '../../ThemeContext'; 
import { useState } from 'react'
function Mainpage(){
    const { isDarkTheme, toggleTheme } = useTheme()
    const [userData, setUserData] = useState(null)
    const [error, setError] = useState(null)

    const handleSearch = (username) => {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('User not found')
                }
                return response.json();
            })
            .then(data => {
                setUserData(data)
                setError(null)
            })
            .catch(error => {
                console.error("Error fetching user data:", error)
                setUserData(null)
                setError(error.message)
            })
    }
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
            <Searchwrapper onSearch={handleSearch}></Searchwrapper>
            </div>
            <div id='content'>
                {error && <div id='error'><p>{error}</p></div>}
                {userData ? (
                    <div id='info'>
                        <div id='first'>
                            <div id='image'>
                                <img src={userData.avatar_url} className='avatar'  />
                                <div id='partone'>
                                    <h1 id='name'>{userData.name || 'The Octocat'}</h1>
                                    <label id='mention'>@{userData.login}</label>
                                </div>
                            </div>
                            <label id='date'>Joined {new Date(userData.created_at).toLocaleDateString()}</label>
                        </div>
                        <div id='middle'>
                            <label id='phrase'>{userData.bio || 'This profile has no bio'}</label>
                            <div id='middlepart'>
                                <div id='followers'>
                                    <div className='firstpart'>
                                        <label className='follower'>Repos</label>
                                        <label className='number'>{userData.public_repos}</label>
                                    </div>
                                    <div className='firstpart'>
                                        <label className='follower'>Followers</label>
                                        <label className='number'>{userData.followers}</label>
                                    </div>
                                    <div className='firstpart'>
                                        <label className='follower'>Following</label>
                                        <label className='number'>{userData.following}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id='footer'>
                            <div className='one'>
                                <label id='location'><img className='img' src={location} />{userData.location || 'Not Available'}</label>
                                <label id='url'><img className='img' src={url}  /><a href={userData.html_url} target="_blank">{userData.html_url}</a></label>
                            </div>
                            <div className='one'>
                                <label><img className='img' src={twitter}  />{userData.twitter_username || 'Not Available'}</label>
                                <label id='build'><img className='img' src={build}  />{userData.company || 'Not Available'}</label>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div id='info'>
                        <label id='phrase'>Search for a GitHub user to see their profile</label>
                    </div>
                )}
            </div>
        
        </div>
    )
}
export default Mainpage