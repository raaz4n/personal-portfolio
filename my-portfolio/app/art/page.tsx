'use client'
import ThemeButton from "../components/Theme";
import { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
// @ts-ignore
import PhotoSwipeDynamicCaption from 'photoswipe-dynamic-caption-plugin';
import 'photoswipe/style.css';
import 'photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css';
import PhotoSwipe from 'photoswipe';
import { IoMdPhotos } from "react-icons/io";

export default function art() {
    useEffect(() => {
        const lightbox = new PhotoSwipeLightbox({
            gallery: '#gallery',
            children: 'a',
            pswpModule: PhotoSwipe,
            showHideAnimationType: 'none',
            loop: false,
            imageClickAction: 'zoom',
            doubleTapAction: 'zoom',
            maxWidthToAnimate: 0,
            initialZoomLevel: 'fit',
            secondaryZoomLevel: 2,
        });

        const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
            type: 'aside',
        });

        lightbox.init();

        return() => {
            lightbox.destroy();
        };
    }, []);

  return (
    <div className={`flex flex-col justify-center items-center min-h-screen bg-(--background)`}>
      <ThemeButton/>
      <div className={`flex flex-col justify-start items-start gap-[34px] pt-[200px] min-h-screen w-[40%] static`}>
        <div className={`flex flex-col justify-start items-start gap-[30px] mb-[20px] w-[100%] h-[15%]`}>
            <h1 className={`mb-[10px] font-semibold text-[38px] leading-[44px] text-(--tcl1)`}>
                Art
            </h1>
            <p className={`mb-[10px] font-normal text-[18px] leading-[20px] text-(--tcl1)`}>
                A collection of 2D pixel art albums, exploring environments, and small visual experiments.
            </p>
            <p className={`mb-[10px] font-normal text-[14px] leading-[20px] text-(--tcl2)`}>
                ◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈
            </p>
        </div>
        <div className={`flex flex-col justify-center items-center gap-[100px] w-full`}>
            <div className={`flex flex-row relative border border-orange-400 h-fit bg-[#333] w-full rounded-lg shadow-xl cursor-pointer`}>
                <div id = "gallery">
                    <div className={`text-(--tcl2) fixed justify-center items-center translate-y-18 translate-x-240`}>
                        <IoMdPhotos size={50}/>
                        <p className={`translate-x-5`}>
                            3
                        </p>
                    </div>  
                    <img src="/hoshi/hoshilogo.png" className="rounded-l-lg h-[200px]"/>
                    <a href="/hoshi/hoshilogo.png"
                    data-pswp-width="650"
                    data-pswp-height="650"
                    className="absolute inset-0 opacity-0">
                        <span className="pswp-caption-content">The logo for my 2D space-adventure game known as Hoshi.
                                                               This logo represents the main character - Hoshi, as well as all of the worlds that she explores.
                                                               It is also known as the Kanji 星, which translates to "star".
                        </span>
                    </a>
                    <a href="/hoshi/spi2.png"
                    data-pswp-width="650"
                    data-pswp-height="850">
                        <span className="pswp-caption-content">This image represents one of the many worlds that Hoshi will explore.
                                                               The planet known as Spî is a large and deserted planet with oddities like none other.
                                                               Covered by vast white sand and oceans, this world can cause a feeling of unease.
                        </span>
                    </a>
                    <a href="/hoshi/world.png"
                    data-pswp-width="650"
                    data-pswp-height="650">
                        <span className="pswp-caption-content">This is the first portion of the game, including 3 planets and a sort of space hub.
                        </span>
                    </a>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '5px' }} className={`ml-[20px] bg-[#333] rounded-lg bg-(--background)`}>
                    <p style={{ lineHeight: '1' }} className={`text-white font-semibold text-[50px]`}>
                        Hoshi
                    </p>
                    <p className={`text-white text-[25px]`}>
                        My first several pixel art experiments for my 2D game.
                    </p>
                    <p className={`text-yellow-500 font-secondary text-[20px]`}>
                        2025-present
                    </p>
                    <div className={`bg-blue-500 rounded-lg mt-[8px] p-1 w-fit`}>
                        <p className={`font-secondary text-white text-[20px]`}>
                            pixel art
                        </p>
                    </div>
                </div>
            </div>
            <div className={`flex flex-row border justify-center items-center border-orange-400 bg-(--background) w-full rounded-lg shadow-xl`}>
                <div className={`flex flex-col justify-center items-center`}>
                    <h1 className={`font-secondary text-(--tcl2) text-[40px]`}>
                        More to come soon!
                    </h1>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}