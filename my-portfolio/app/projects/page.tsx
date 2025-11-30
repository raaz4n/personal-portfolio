import Link from "next/link";
import ThemeButton from "../components/Theme";

export default function projects(){
  return (
    <div className={`flex flex-col justify-center items-center min-h-screen bg-(--background)`}>
        <ThemeButton/>
        <div className={`flex flex-col justify-start items-start gap-[34px] pt-[200px] mb-[30px] min-h-screen w-[40%] static`}>
            <div className={`flex flex-col justify-start items-start gap-[30px] mb-[20px] w-[100%] h-[15%]`}>
                <h1 className={`mb-[10px] font-semibold text-[38px] leading-[44px] text-(--tcl1)`}>
                    Projects
                </h1>
                <p className={`mb-[10px] font-normal text-[18px] leading-[20px] text-(--tcl1)`}>
                    Apps, scripts, bots, and more things I'm working on.
                </p>
                <p className={`mb-[10px] font-normal text-[14px] leading-[20px] text-(--tcl2)`}>
                    ◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈
                </p>
            </div>
            <div className={`grid grid-cols-3 gap-y-8 gap-x-15 w-full pl-[10px] pr-[10px]`}>
                <div className={`border border-orange-400 bg-[#333] rounded-lg shadow-xl min-h-[200px]`}>
                    <Link href="../blog/Hoshi">
                        <div className={`flex flex-col`}>
                            <img src="/hoshi/hoshilogo.png" alt="Hoshi" className="rounded-t-lg h-[50%]"/>
                        </div>
                        <div className={`flex flex-col justify-center bg-[#333] items-center w-full h-[85px] rounded-b-lg bg-(--background)`}>
                            <p className={`text-white font-semibold text-[20px]`}>
                                Hoshi
                            </p>
                            <p className={`text-yellow-500 font-secondary text-[16px]`}>
                                2025 - present
                            </p>
                        </div>
                    </Link>
                </div>
                <div className={`border border-orange-400 bg-[#333] rounded-lg shadow-xl min-h-[200px]`}>
                    <Link href="../blog/Fayzit">
                        <div className={`flex flex-col`}>
                            <img src="/files/Fayzit.png" alt="Fayzit" className="rounded-t-lg h-[50%]"/>
                        </div>
                        <div className={`flex flex-col justify-center bg-[#333] items-center w-full h-[85px] rounded-b-lg bg-(--background)`}>
                            <p className={`text-white font-semibold  text-[20px]`}>
                                Fayzit
                            </p>
                            <p className={`text-yellow-500 font-secondary text-[16px]`}>
                                2025 - present
                            </p>
                        </div>
                    </Link>
                </div>
                <div className={`border border-orange-400 bg-[#333] rounded-lg shadow-xl min-h-[200px]`}>
                    <Link href="../blog/portfolio">
                        <div className={`flex flex-col`}>
                            <img src="/files/the-way-of-silence_.jpg" alt="Portfolio website" className="rounded-t-lg h-[50%]"/>
                        </div>
                        <div className={`flex flex-col justify-center bg-[#333] items-center w-full h-[85px] rounded-b-lg bg-(--background)`}>
                            <p className={`text-white font-semibold  text-[20px]`}>
                                Portfolio website
                            </p>
                            <p className={`text-yellow-500 font-secondary text-[16px]`}>
                                2025 - present
                            </p>
                        </div>
                    </Link>
                </div>
                <div className={`border border-orange-400 bg-[#333] rounded-lg shadow-xl min-h-[200px]`}>
                    <Link href="../blog/Aeris">
                        <div className={`flex flex-col`}>
                            <img src="/files/Aeris.png" alt="Aeris" className="rounded-t-lg h-[50%]"/>
                        </div>
                        <div className={`flex flex-col justify-center bg-[#333] items-center w-full h-[85px] rounded-b-lg bg-(--background)`}>
                            <p className={`text-white font-semibold  text-[20px]`}>
                                Aeris
                            </p>
                            <p className={`text-yellow-500 font-secondary text-[16px]`}>
                                2025 (completed)
                            </p>
                        </div>
                    </Link>
                </div>
                <div className={`border border-orange-400 bg-[#333] rounded-lg shadow-xl min-h-[200px]`}>
                    <Link href="../blog/websiteCheck">
                        <div className={`flex flex-col`}>
                            <img src="/files/websiteCheck.png" alt="websiteCheck.py" className="rounded-t-lg h-[50%]"/>
                        </div>
                        <div className={`flex flex-col justify-center bg-[#333] items-center w-full h-[85px] rounded-b-lg bg-(--background)`}>
                            <p className={`text-white font-semibold text-[20px]`}>
                                websiteCheck.py
                            </p>
                            <p className={`text-yellow-500 font-secondary text-[16px]`}>
                                2025 (completed)
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
}

