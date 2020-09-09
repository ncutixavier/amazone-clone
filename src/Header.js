import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from 'react-router-dom'
import {useStateValue } from './StateProvider'

function Header() {
    const [{basket}, dispatch] = useStateValue()
    
    return (
        <div className="header">
            <Link to="/">
                <img alt="Amazon Logo White" src="https://www.nicepng.com/png/full/228-2281836_vault-logo-available-amazon-app-store.png" className="header__logo" />
            </Link>
            <div className="header__search">
                <input type="search" className="header__searchInput" />
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Hello Guest
                    </span>
                    <span className="header__optionLineTwo">
                        Sign In
                    </span>
                </div>
                <div className="header__option">
                <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLineTwo">
                        &amp; Orders
                    </span>
                </div>
                <div className="header__option">
                <span className="header__optionLineOne">
                       Your 
                    </span>
                    <span className="header__optionLineTwo">
                        prime
                    </span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
