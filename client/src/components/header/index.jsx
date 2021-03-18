import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Header() {
    return (
        <div className="min-h-full flex items-center justify-center bg-black">
            <div className="w-10/12 h-full mx-auto flex flex-col md:flex-row-reverse items-center justify-between">
                <div className="w-full h-full">
                    <LazyLoadImage 
                        className="h-full"
                        src="https://images.unsplash.com/photo-1562813733-b31f71025d54?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80"
                        effect="blur"
                        placeholderSrc="../../logo.svg"   
                    />
                </div>
                <div className="text-white text-center md:text-left">
                    <p className="text-2xl md:text-2xl mb-4">
                        Hi! <br />
                        My name is Radu
                    </p>
                    <p className="text-2xl md:text-2xl font-bold">I am a Full Stack Engineer</p>
                </div>
            </div>
        </div>
    )
}
