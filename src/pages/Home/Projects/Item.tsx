import * as React from "react";

export interface IProject {
    photo: string;
    name: string;
    desc: string;
}

export default function Item({photo, name, desc}: IProject): React.ReactElement {
    return <div className="item">
        <div className="photo">
            <div className="hover">
                <div className="buttons">
                    <div className="list">
                        <button className="item">
                            <svg className="icon" width="27" height="27">
                                <path d="M24.5 3.494c-2.404-2.405-6.341-2.405-8.744 0l-4.721 4.723a7.068 7.068 0 0 1 4.908.376l2.454-2.456a2.447 2.447 0 1 1 3.46 3.462l-3.085 3.087-2.028 2.029a2.446 2.446 0 0 1-3.46 0l-2.641 2.644a6.038 6.038 0 0 0 2.079 1.365 6.24 6.24 0 0 0 6.153-.905c.17-.136.358-.29.511-.46l3.187-3.19 1.926-1.927c2.42-2.405 2.42-6.327 0-8.748zm-12.562 16.03l-2.352 2.354a2.447 2.447 0 1 1-3.46-3.462l5.113-5.115a2.446 2.446 0 0 1 3.46 0l2.642-2.645a6.012 6.012 0 0 0-2.08-1.363 6.191 6.191 0 0 0-6.425 1.142c-.085.068-.17.154-.239.221l-5.113 5.118c-2.403 2.404-2.403 6.343 0 8.747 2.403 2.406 6.34 2.406 8.744 0l4.618-4.672c-2.351.545-2.897.478-4.908-.325z" />
                            </svg>
                        </button>
                        <button className="item">
                            <svg className="icon" width="27" height="26">
                                <path d="M12.304 5.082c-.726 0-1.315.58-1.315 1.295 0 .717.589 1.297 1.315 1.297 1.607 0 3.043.885 3.748 2.309.228.461.695.728 1.182.728.195 0 .39-.043.576-.13.654-.314.925-1.09.607-1.734-1.15-2.322-3.492-3.765-6.113-3.765zm14.152 17.8l-4.383-4.319a10.834 10.834 0 0 0 2.068-6.36c0-6.075-5.016-11.017-11.182-11.017S1.777 6.128 1.777 12.202 6.793 23.218 12.96 23.218c2.576 0 4.943-.87 6.836-2.317l4.335 4.27a1.65 1.65 0 0 0 1.163.475c.421 0 .842-.157 1.163-.474a1.602 1.602 0 0 0 0-2.29zM4.41 12.201c0-4.645 3.836-8.424 8.55-8.424 4.715 0 8.551 3.78 8.551 8.424 0 1.933-.67 3.711-1.786 5.134-.369.47-.783.904-1.243 1.288a8.582 8.582 0 0 1-5.521 2.003c-4.715-.001-8.551-3.78-8.551-8.425z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="content">
                <img className="container" src={photo} />
            </div>
            <svg className="arrow">
                <path d="M17 1.997l15.01 10H1.99l15.01-10z" />
            </svg>
        </div>
        <div className="bottom">
            <h3 className="name">{name}</h3>
            <p className="desc">{desc}</p>
        </div>
    </div>;
}