import * as React from "react";
import {NavLink} from "react-router-dom";
import style from "./style.scss";
import logo from "./assets/logo.svg";

export interface HeaderProps {}

export default function Header(props: HeaderProps): React.ReactElement {
    return <header className={style.main}>
        <div className="container">
            <div className="left">
                <svg className="logo">
                    <path paint-order="stroke fill markers" fill-rule="evenodd" d="M38.108 12.713H27.6l5.254 9.192 5.254-9.192zm-11.822.767l-5.254 9.191H31.54l-5.254-9.191zm18.39 9.191l-5.254-9.191-5.254 9.191h10.508zm-10.508 1.53l5.254 9.189 5.254-9.188H34.168zm-13.136 0l5.254 9.189 5.254-9.188H21.032zm-6.567 9.953H24.97l-5.253-9.187-5.253 9.187zm36.778 0l-5.253-9.187-5.252 9.187h10.505zM32.854 1.994l-5.254 9.19h10.508l-5.254-9.19zm13.136 42.88l5.253-9.188H40.738l5.252 9.188zm-26.272 0l5.253-9.188H14.465l5.253 9.188zm-11.821.767h10.507l-5.253-9.19-5.254 9.19zm49.914 0l-5.254-9.19-5.254 9.19h10.508zm-10.508 1.53l5.254 9.188 5.254-9.187H47.303zm-13.135 0l5.254 9.188 5.254-9.187H34.168zM13.151 56.36l5.253-9.187H7.897l5.254 9.187zm-11.82.769h10.505l-5.254-9.189-5.25 9.189zm26.27 0h10.507l-5.254-9.189-5.254 9.189zm13.137 0h10.505l-5.253-9.189-5.252 9.189zm18.387-9.189l-5.252 9.189h10.504l-5.252-9.189z" />
                    <text x="63" y="40">Waxom</text>
                </svg>
            </div>
            <div className="right">
                <nav className="nav">
                    <NavLink className="link" to="/">Home</NavLink>
                    <NavLink className="link" to="/about">About Us</NavLink>
                    <NavLink className="link" to="/portfolio">Portfolio</NavLink>
                    <NavLink className="link" to="/features">Features</NavLink>
                    <NavLink className="link" to="/blog">Blog</NavLink>
                    <NavLink className="link" to="/pricing">Pricing</NavLink>
                    <NavLink className="link" to="/shortcodes">Shortcodes</NavLink>
                    <NavLink className="link" to="/contact">Contact</NavLink>    
                </nav>
                <NavLink className="basket" to="/basket" />
                <span className="search">
                    <button className="button" />
                </span>
            </div>
        </div>
    </header>;
}