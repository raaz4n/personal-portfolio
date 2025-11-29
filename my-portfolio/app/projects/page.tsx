import Link from "next/link";
import ThemeButton from "../components/Theme";

export default function projects(){
  return (
    <div className={`flex flex-col justify-center items-center min-h-screen bg-(--background)`}>
        <ThemeButton/>
        <div className={`flex flex-col justify-start items-start gap-[34px] pt-[200px] min-h-screen w-[70%] static`}>
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
            <div className={`grid grid-cols-3 gap-y-4 gap-x-20 w-full pl-[10px] pr-[10px]`}>
                <div className={`border border-pink-400 rounded-lg shadow-xl min-h-[490px]`}>
                    <Link href="../blog/Aeris">
                        <div className={`flex flex-col`}>
                            <img src="/files/Aeris.png" className="rounded-t-lg w-[400px] h-[400px]"/>
                        </div>
                        <div className={`flex flex-col justify-center items-center w-full h-[85px] rounded-b-lg bg-(--background)`}>
                            <p className={`text-(--tcl1) text-[25px]`}>
                                Aeris
                            </p>
                            <p className={`text-(--tcl2) text-[19px]`}>
                                2025
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
}

