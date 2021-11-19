import * as React from "react";
import {NavLink} from "react-router-dom";
import style from "./style.scss";
import logo from "./assets/logo.svg";

export interface HeaderProps {}

export default function Header(props: HeaderProps): React.ReactElement {
    return <header className={style.main}>
        <div className="container">
            <div className="left">
                <NavLink to="/">
                    <svg className="logo">
                        <path d="M38.108 12.713H27.6l5.254 9.192 5.254-9.192zm-11.822.767l-5.254 9.191H31.54l-5.254-9.191zm18.39 9.191l-5.254-9.191-5.254 9.191h10.508zm-10.508 1.53l5.254 9.189 5.254-9.188H34.168zm-13.136 0l5.254 9.189 5.254-9.188H21.032zm-6.567 9.953H24.97l-5.253-9.187-5.253 9.187zm36.778 0l-5.253-9.187-5.252 9.187h10.505zM32.854 1.994l-5.254 9.19h10.508l-5.254-9.19zm13.136 42.88l5.253-9.188H40.738l5.252 9.188zm-26.272 0l5.253-9.188H14.465l5.253 9.188zm-11.821.767h10.507l-5.253-9.19-5.254 9.19zm49.914 0l-5.254-9.19-5.254 9.19h10.508zm-10.508 1.53l5.254 9.188 5.254-9.187H47.303zm-13.135 0l5.254 9.188 5.254-9.187H34.168zM13.151 56.36l5.253-9.187H7.897l5.254 9.187zm-11.82.769h10.505l-5.254-9.189-5.25 9.189zm26.27 0h10.507l-5.254-9.189-5.254 9.189zm13.137 0h10.505l-5.253-9.189-5.252 9.189zm18.387-9.189l-5.252 9.189h10.504l-5.252-9.189z" />
                        <text x="63" y="40">Waxom</text>
                    </svg>
                </NavLink>
            </div>
            <div className="right">
                <nav className="nav">
                    <NavLink className="link" to="/" exact>Home</NavLink>
                    <NavLink className="link" to="/about">About Us</NavLink>
                    <NavLink className="link" to="/portfolio">Portfolio</NavLink>
                    <NavLink className="link" to="/features">Features</NavLink>
                    <NavLink className="link" to="/blog">Blog</NavLink>
                    <NavLink className="link" to="/pricing">Pricing</NavLink>
                    <NavLink className="link" to="/shortcodes">Shortcodes</NavLink>
                    <NavLink className="link" to="/contact">Contact</NavLink>    
                </nav>
                <NavLink className="basket" to="/basket">
                    <svg className="icon">
                        <path d="M15.995 4.999h-1.499c0-1.657-2.013-3-4.497-3-2.485 0-4.498 1.343-4.498 3h-1.5a2.999 2.999 0 0 0-2.998 2.998v14.998a3 3 0 0 0 2.999 3h11.993a3 3 0 0 0 3-3V7.997a2.999 2.999 0 0 0-3-2.998zM10 3.499c1.656 0 2.998.463 2.998 1.5H7c0-1.037 1.343-1.5 2.999-1.5zm7.496 19.496a1.5 1.5 0 0 1-1.5 1.5H4.002c-.828 0-1.5-.672-1.5-1.5v-1.5h14.993v1.5zm0-3H2.502V7.997a1.5 1.5 0 0 1 1.5-1.5H5.5v4.5h1.5v-4.5h5.996v4.5h1.5v-4.5h1.498a1.5 1.5 0 0 1 1.5 1.5v11.998z" />
                    </svg>
                </NavLink>
                <span className="search">
                    <button className="button">
                        <svg className="icon">
                            <path d="M24.762 24.681l-6.193-6.095c1.621-1.761 2.618-4.092 2.618-6.657-.001-5.486-4.52-9.931-10.094-9.931S1.001 6.443 1.001 11.928c0 5.488 4.518 9.934 10.092 9.934 2.409 0 4.618-.834 6.353-2.218l6.217 6.12a.785.785 0 0 0 1.098 0 .758.758 0 0 0 .001-1.083zm-13.669-4.347c-4.716 0-8.54-3.762-8.54-8.405 0-4.641 3.824-8.404 8.54-8.404 4.717 0 8.54 3.763 8.54 8.404 0 4.643-3.823 8.405-8.54 8.405z" />
                        </svg>
                    </button>
                </span>
            </div>
        </div>
    </header>;
}