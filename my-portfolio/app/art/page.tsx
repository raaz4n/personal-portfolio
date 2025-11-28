'use client'
import ThemeButton from "../components/Theme";
import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import PhotoSwipe from 'photoswipe';

export default function art() {
    useEffect(() => {
        const lightbox = new PhotoSwipeLightbox({
            gallery: '#gallery',
            children: 'a',
            pswpModule: PhotoSwipe,
            showHideAnimationType: 'none',
        });
        lightbox.init();

        return() => {
            lightbox.destroy();
        };
    }, []);


  return (
    <div className={`flex flex-col justify-center items-center min-h-screen bg-(--background)`}>
      <ThemeButton/>
      <div className={`flex flex-col justify-start items-start gap-[34px] pt-[200px] min-h-screen w-[70%] static`}>
        <div className={`flex flex-col justify-start items-start gap-[30px] mb-[20px] w-[100%] h-[15%]`}>
            <h1 className={`mb-[10px] font-semibold text-[38px] leading-[44px] text-(--tcl1)`}>
                Art
            </h1>
            <p className={`mb-[10px] font-normal text-[18px] leading-[20px] text-(--tcl1)`}>
                A collection of 2D pixel art pieces, exploring environments, and small visual experiments.
            </p>
            <p className={`mb-[10px] font-normal text-[14px] leading-[20px] text-(--tcl2)`}>
                ◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈
            </p>
        </div>
        <div id="gallery" className={`grid grid-cols-3 gap-y-4 gap-x-20 w-full pl-[10px] pr-[10px]`}>
            <a href="/file.svg" 
            data-pswp-width="200"
            data-pswp-height="200"
            target="_blank" 
            rel="norefferer" 
            className='border border-pink-400 rounded-lg shadow-xl min-h-[400px]'>
                <img src="/file.svg" className="w-full h-full object-cover"/>
            </a>
            <div className='border border-pink-400 rounded-lg shadow-xl min-h-[400px]'/>
            <div className='border border-pink-400 rounded-lg shadow-xl min-h-[400px]'/>
        </div>
      </div>
    </div>
  );
}