import Link from "next/link";
import ThemeButton from "../../components/Theme";
import Image from 'next/image';
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function HelloThere() {
    return (
        <>
            <section className={`flex flex-col pt-[200px] bg-(--background)`}>
                <ThemeButton />
                <Link href="/blog" style={{ left: '20px' }} className={`flex flex-row gap-[20px] fixed text-(--tcl2) items-center cursor-pointer`}>
                    <AiOutlineArrowLeft size={40} />
                    <p>
                        blogs
                    </p>
                </Link>
                <Link href="/projects" style={{ left: '20px', marginTop: '40px', color: 'orange' }} className={`flex flex-row gap-[20px]
                    fixed items-center cursor-pointer`}>
                    <AiOutlineArrowLeft size={40} />
                    <p>
                        projects
                    </p>
                </Link>
                <div className="flex flex-col justify-start items-center">
                    <div className={`flex flex-col justify-start items-start gap-[30px] w-[40%]`}>
                        <div className={`flex flex-row justify-between w-full`}>
                            <h1 className={`font-semibold text-[38px] leading-[44px] text-(--tcl1)`}>
                                Portfolio website
                            </h1>
                            <p className={`underline font-secondary text-(--tcl3) pt-[10px] pr-[15px]`}>
                                11/29/2025
                            </p>
                        </div>
                        <div className={`text-(--tcl1) text-[18px]`}>
                            <p className={`mb-[50px] font-normal text-[14px] leading-[20px] text-(--tcl2)`}>
                                ◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈
                            </p>
                            <h2 className={`text-[25px] font-semibold pb-[20px]`}>
                                I've really enjoyed building this website.
                            </h2>
                            <p>
                                Github repo <a className={`text-(--tcl2) underline`} 
                                href="https://github.com/raaz4n/personal-portfolio" target="_blank" rel="noopener noreferrer">here.</a>
                            </p>
                            <p className={`pt-[20px]`}>
                                I had a website that I built a couple of months back, but it wasn't what I really wanted. It seemed
                                very basic, and I knew that I could do better. I used React to help
                                build that website, and got advice from my good friend <a className={`text-(--ic) underline`} 
                                href="https://github.com/mahloola" target="_blank" rel="noopener noreferrer">mahloola.</a>
                            </p>
                            <p className={`pt-[20px]`}>
                                Later on, I realized that I couldn't access the code for Webflow and instead thought of challenging myself.
                                I took the journey to learn Tailwind and NextJS. I can safely say that it was an amazing learning experience! It makes
                                web development so much easier and simpler, I wish I had learned it earlier. 
                            </p>
                            <p className={`pt-[20px]`}>
                                Building the theme changer was quite the pain... having to organize so many color palettes together, but it was
                                very rewarding to see it working.
                            </p>
                            <p className={`pt-[20px]`}>
                                Most of the website is finished at this point, but I had a vision that I really wanted to implement. If you've ever played the Wii, you probably remember this guy right here
                            </p>
                            <Image
                                src="/files/nintendo-wii-hand-animated-custom-cursor.gif"
                                alt="wii-hand"
                                width={300}
                                height={300}
                                unoptimized={true}
                            />
                            <p className={`pt-[20px]`}>
                                You may be a bit confused as to why I'm even mentioning this, but stay with me.
                            </p>
                            <p className={`pt-[20px]`}>
                                If you've gone through my website, you have probably noticed that swapping between the Navbar tabs on a fresh start
                                can cause lag between the tabs until they're fully loaded in. Besides that however, I wanted to create a really cool
                                transition between pages. I want to create a hand similar to the Wii hand which essentially grabs a projector string
                                when clicking on a tab. It should end up looking something like this
                            </p>
                            <Image
                                src="/files/projector.gif"
                                alt="wii-hand"
                                width={300}
                                height={300}
                                className={`pt-[20px]`}
                                unoptimized={true}
                            />
                            <p className={`pt-[20px]`}>
                                Here's my thought process on how it should work:
                            </p>
                            <ol style={{ listStyle: 'decimal' }} className={`flex flex-col gap-[10px] mt-[10px] font-semibold`}>
                                <li>Wii hand sits in the bottom right of every page</li>
                                <li>If a user highlights over a tab, the gray underline in the Navbar becomes the same color as the tab</li>
                                <li>Simultaneously, a pixelated projector string handle appears under the Navbar</li>
                                <li>If the user presses on the tab, the Wii hand will move toward the string, grab it, and pull it down all the way to the end of the screen,
                                    leaving the entire page the same color as the tab.
                                </li>
                                <li>After approximately 200ms, the Wii hand lets go of the string, and the new page is loaded.</li>
                            </ol>
                            <p className={`pt-[20px]`}>
                                May seem a bit odd currently (if you're reading this before it's pushed out), but I'll try to make it work. Never worked
                                with animations through JS, seems pretty difficult right now but I'm up to the challenge.
                            </p>
                            <p className={`pt-[20px]`}>
                                Also, another thing - you may wonder why the main page seems so bland. I plan on developing an image/video to ASCII script in Python
                                and having a really cool animation play in the background. Will try to get that done as soon as I can.
                            </p>
                            <p className={`pt-[20px]`}>
                                Thanks for reading!
                            </p>
                        </div>
                    </div>
                    <div style={{ height: '120px' }}></div>
                </div>
            </section>
        </>
    );
}