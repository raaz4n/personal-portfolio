import ThemeButton from "../components/Theme";

export default function about() {
  return (
    <section className={`flex flex-col justify-center items-center min-h-screen bg-(--background)`}>
        <ThemeButton/>
        <div className={`flex flex-col justify-start items-start gap-[30px] pt-[200px] 
                         w-[40%] min-h-screen static`}>
            <h1 className={`flex flex-col mt-[0px] mb-[10px] justify-stretch items-start
                            font-semibold text-[40px] leading-[44px] text-(--tcl1)`}>
                About me
            </h1>
            <div className={`flex flex-col justify-start items-start gap-[12px]`}>
                <p className={`mt-[10px] mb-[10px] font-normal text-[18px] leading-[20px] text-(--tcl1)`}>
                    hi! my name is raazan. welcome to my personal website! :]
                </p>
                <p className={`mb-[10px] font-normal text-[18px] leading-[20px] text-(--tcl1)`}>
                    i'm a grad student studying CS @ MTSU. i spend most of my time building things that make me happy.
                </p>
                <p className={`font-secondary font-normal text-[14px] leading-[20px] text-(--tcl2) mb-[10px]`}>
                    lets connect!
                    <br />
                    <a className={`text-(--tcl2)`} href="https://github.com/raaz4n" target="_blank" rel="noopener noreferrer">github</a>
                     ✦ <a className={`text-(--lc)`} href="https://linkedin.com/in/raazan" target="_blank" rel="noopener noreferrer">linkedin</a>
                </p>
                <p className={`block font-secondary font-normal text-[14px] leading-[20px] text-(--tcl2) mb-[10px]`}>
                    interested in my skills?
                    <br />
                    <a className={`inline text-(--rc)`} href="/files/portfolio.pdf" target="_blank" rel="noopener noreferrer">
                        my resume ░
                    </a>    
                </p>
            </div>
            <div className={`flex flex-col justify-start items-start`}>
                <h1 className={`mt-[10px] mb-[20px] font-semibold text-[32px] leading-[36px] text-(--tcl1)`}>
                    interests
                </h1>
                <ul className={`list-none flex flex-col justify-stretch items-start pl-[0px] mb-[10px] gap-[8px]
                                font-secondary font-normal text-[16px] leading-[20px]`}>
                    <li className={`text-(--tcl1)`}>
                        <span className={`text-(--ic) font-semibold`}>games: </span> counter strike 2, battlefield 6, yume nikki, elden ring, minecraft, kovaak's, ds3, mw2, deltarune, va-11 ha11-a, oneshot
                    </li>
                    <li className={`text-(--tcl1)`}>
                        <span className={`text-(--ic) font-semibold`}>music: </span> nujabes, uyama hiroto, shing02, nuphory, mf doom, lil uzi vert, madeon, daft punk
                    </li>
                    <li className={`text-(--tcl1)`}>
                        <span className={`text-(--ic) font-semibold`}>art: </span> frantisek kupka, kanicoro (@_k256), yoshihiro togashi
                    </li>
                    <li className={`text-(--tcl1)`}>
                        <span className={`text-(--ic) font-semibold`}>series: </span> hxh, one piece, andor, peaky blinders, breaking bad, better call saul, danmachi
                    </li>
                    <li className={`text-(--tcl1)`}>
                        <span className={`text-(--ic) font-semibold`}>tech: </span> c++, python, web dev, networking, game engines, aseprite
                    </li>
                    <li className={`text-(--tcl1)`}>
                        <span className={`text-(--ic) font-semibold`}>personal: </span> stargazing, cold brew coffee, cars, cats, keyboards, drawing, photography, gym, being great
                    </li>
                </ul>
            </div>
            <div className={`flex flex-col justify-start items-start text-(--tcl1)`}>
                <h2 className={`mb-[20px] font-semibold text-[32px] leading-[36px]`}>
                    at present
                </h2>
                <ul className={`list-disc flex flex-col justify-start items-start gap-[8px] pl-[15px] mb-[10px]`}>
                    <li className={`text-[16px] leading-[20px]`}>
                        looking for a job!!!
                    </li>
                    <li className={`text-[16px] leading-[20px]`}>
                        studying for my CS masters
                    </li>
                    <li className={`text-[16px] leading-[20px]`}>
                        constantly learning new things
                    </li>
                    <li className={`text-[16px] leading-[20px]`}>
                        creating projects
                    </li>
                    <li className={`text-[16px] leading-[20px]`}>
                        working on cars
                    </li>
                </ul>
            </div>
        </div>
    </section>
  );
}