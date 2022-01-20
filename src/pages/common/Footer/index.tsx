import * as React from "react";
import {Link} from "react-router-dom";
import styles from "./style.scss";

export interface FooterProps {}

export default function Footer(props: FooterProps): React.ReactElement {
    return <footer className={styles.main}>
        <div className="top">
            <div className="container columns">
                <div className="column" id="column-1">
                    <Link to="/">
                        <svg className="logo">
                            <path d="M38.108 12.713H27.6l5.254 9.192 5.254-9.192zm-11.822.767l-5.254 9.191H31.54l-5.254-9.191zm18.39 9.191l-5.254-9.191-5.254 9.191h10.508zm-10.508 1.53l5.254 9.189 5.254-9.188H34.168zm-13.136 0l5.254 9.189 5.254-9.188H21.032zm-6.567 9.953H24.97l-5.253-9.187-5.253 9.187zm36.778 0l-5.253-9.187-5.252 9.187h10.505zM32.854 1.994l-5.254 9.19h10.508l-5.254-9.19zm13.136 42.88l5.253-9.188H40.738l5.252 9.188zm-26.272 0l5.253-9.188H14.465l5.253 9.188zm-11.821.767h10.507l-5.253-9.19-5.254 9.19zm49.914 0l-5.254-9.19-5.254 9.19h10.508zm-10.508 1.53l5.254 9.188 5.254-9.187H47.303zm-13.135 0l5.254 9.188 5.254-9.187H34.168zM13.151 56.36l5.253-9.187H7.897l5.254 9.187zm-11.82.769h10.505l-5.254-9.189-5.25 9.189zm26.27 0h10.507l-5.254-9.189-5.254 9.189zm13.137 0h10.505l-5.253-9.189-5.252 9.189zm18.387-9.189l-5.252 9.189h10.504l-5.252-9.189z" />
                            <text x="63" y="40">Waxom</text>
                        </svg>
                    </Link>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci suscipit lobortis claritatem.
                    </p>
                    <button className="read-more">
                        Read More
                        <svg className="arrow" width="6" height="9" viewBox="1.003 2.033 4.943 7.927">
                            <path d="M1.951 9.815l3.835-3.467a.462.462 0 0 0 0-.7l-.021-.011-3.814-3.46a.595.595 0 0 0-.777 0l-.004.007a.469.469 0 0 0-.167.354v6.917c0 .142.068.269.173.36h-.002a.594.594 0 0 0 .777 0z" />
                        </svg>
                    </button>
                </div>
                <div className="column" id="column-2">
                    <h1 className="name">Recent Posts</h1>
                    <div className="posts">
                        <div className="post">
                            <time className="date">
                                September 08, 2015
                            </time>
                            <p className="paragraph">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                            </p>
                        </div>
                        <div className="post">
                            <time className="date">
                                September 08, 2015
                            </time>
                            <p className="paragraph">
                                Diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                            </p>
                        </div>
                        <div className="post">
                            <time className="date">
                                September 08, 2015
                            </time>
                            <p className="paragraph">
                                Claritas est etiam processus dynamicus, qui sequitur mutationem per seacula quarta decima
                            </p>
                        </div>
                    </div>
                </div>
                <div className="column" id="column-3">
                    <h1 className="name">Our Twitter</h1>
                    <div className="posts">
                        <div className="post">
                            <p className="paragraph">
                                <a className="link" href="#">@waxom</a> Cum soluta nobis eleifend option congue nihil imperdiet doming
                            </p>
                            <time className="date">
                                3 mins ago
                            </time>
                        </div>
                        <div className="post">
                            <p className="paragraph">
                                Mirum est <a className="link" href="#">#envato</a> notare quam littera gothica, quam nunc putamus parum anteposuerit litterarum
                            </p>
                            <time className="date">
                                5 hours ago
                            </time>
                        </div>
                        <div className="post">
                            <p className="paragraph">
                                Soluta nobis option <a className="link view-2" href="#">bit.ly/1Hniso7</a>
                            </p>
                            <time className="date">
                                20 days ago
                            </time>
                        </div>
                    </div>
                </div>
                <div className="column" id="column-4">
                    <h1 className="name">Dribbble Widget</h1>
                    <div className="widgets">
                        <div className="widget">
                            <div className="photo">
                                <img className="image" src="/test/widget-photo-1.png" />
                            </div>
                        </div>
                        <div className="widget">
                            <div className="photo">
                                <img className="image" src="/test/widget-photo-2.png" />
                            </div>
                        </div>
                        <div className="widget">
                            <div className="photo">
                                <img className="image" src="/test/widget-photo-3.png" />
                            </div>
                        </div>
                        <div className="widget">
                            <div className="photo">
                                <img className="image" src="/test/widget-photo-4.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bottom">
            <div className="container">
                <div className="left">
                    Copyright © 2015 <a className="link view-4" href="#">Waxom</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a className="link view-3" href="#">Privacy Policy</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a className="link view-3" href="#">FAQ</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a className="link view-3" href="#">Support</a>
                </div>
                <div className="right">
                    Designed by <a className="link view-4" href="#">ThemeFire</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Only on <a className="link view-4" href="#">Envato Market</a>
                </div>
            </div>
        </div>
    </footer>;
}