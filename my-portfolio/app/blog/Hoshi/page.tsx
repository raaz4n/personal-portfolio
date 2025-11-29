import Link from "next/link";
import ThemeButton from "../../components/Theme";
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
                                Hoshi
                            </h1>
                            <p className={`underline font-secondary text-(--tcl3) pt-[10px] pr-[15px]`}>
                                ??/??/2025
                            </p>
                        </div>
                        <div className={`text-(--tcl1) text-[18px]`}>
                            <p className={`mb-[50px] font-normal text-[14px] leading-[20px] text-(--tcl2)`}>
                                ◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈
                            </p>
                            <h2 className={`text-[25px] font-semibold pb-[20px]`}>
                                In development.
                            </h2>
                        </div>
                    </div>
                    <div style={{ height: '120px' }}></div>
                </div>
            </section>
        </>
    );
}