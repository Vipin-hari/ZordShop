import { ethers } from 'ethers';
import SearchIcon from '@mui/icons-material/Search';

const Navigation = ({ account, setAccount }) => {
    const connectHandler = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = ethers.utils.getAddress(accounts[0])
        setAccount(account);
    }

    return (
        <nav>
            <div className='nav__brand'>
                <h1 style={{color:"black"}}><b>Z</b>ordshop</h1>
            </div>
            {/* <div className='icon-search'>
            <span class="material-symbols-outlined">search</span>
            <input
            
                type="text"
                className="nav__search"
                placeholder='      Search here'
            />
            </div> */}

            {account ? (
                <button
                    type="button"
                    className='nav__connect'
                >
                    {account.slice(0, 6) + '...' + account.slice(38, 42)}
                </button>
            ) : (
                <button
                    type="button"
                    className='nav__connect'
                    onClick={connectHandler}
                >
                LOGIN
                </button>
            )}

            <ul className='nav__links'>
                <li><a href="#Men">Men</a></li>
                <li><a href="#Women">Women</a></li>
                <li><a href="#Accessories">Accessories</a></li>
                <div className='icon-search'>
                <button className='searchbtn'><SearchIcon className='searchIcon'/></button>
            <input
            
                type="text"
                className="nav__search"
                placeholder='      Search here'
            />
            </div>
            </ul>
        </nav>
    );
}

export default Navigation;