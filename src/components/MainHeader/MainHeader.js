import logo from '../../Spotify_Logo_CMYK_Black.png'
import './MainHeader.css';

const MainNav = () => {
    return (
        <header>
            <div className='img'>
                <img src={logo} />
            </div>
            <div className='content'>
                <div className='header-title'>
                    <h1></h1>
                </div>
                <div className='header-text'>
                    <p>
                        
                    </p>
                </div>
            </div>
        </header>
    );
};

export default MainNav;