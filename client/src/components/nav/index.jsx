import React from 'react';
import { Link } from "react-router-dom";

export default function Navigation() {
    const content = {
        nav: {
            logo: "TODO",
            links: [
                {
                    text: 'Portfolio',
                    to: '/portfolio',
                },
                {
                    text: 'Resume',
                    to: '/resume'
                },
                {
                    text: 'About',
                    to: '/about',
                },
            ]
        },
    }

    return (
        <div className="bg-indigo-900">
            <div className="flex items-center justify-between w-10/12 mx-auto text-white">
                <div class="flex-shrink-0 flex items-center">
                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=A2ynVfXB2z&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    <h1 className="m-2 text-2xl font-bold">Radu Bagrin</h1>
                </div>
                <div>{content.nav.links.map((link, index) => {
                    return <span className="text-xl mr-4"><Link to={link.to}>{link.text}</Link></span>
                })}</div>
            </div>
        </div>
    )
}
