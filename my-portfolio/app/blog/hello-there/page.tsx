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
                        back to blogs
                    </p>
                </Link>
                <div className="flex flex-col justify-start items-center">
                    <div className={`flex flex-col justify-start items-start gap-[30px] w-[40%]`}>
                        <div className={`flex flex-row justify-between w-full`}>
                            <h1 className={`font-semibold text-[38px] leading-[44px] text-(--tcl1)`}>
                                Hello there!
                            </h1>
                            <p className={`underline font-secondary text-(--tcl3) pt-[10px] pr-[15px]`}>
                                11/28/2025
                            </p>
                        </div>
                        <div className={`text-(--tcl1) text-[18px]`}>
                            <p className={`mb-[50px] font-normal text-[14px] leading-[20px] text-(--tcl2)`}>
                                ◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈
                            </p>
                            <h2 className={`text-[30px] font-semibold pb-[20px]`}>
                                My name is Raazan.
                            </h2>
                            <p>
                                You may have already visited my <Link href="/about" className={`text-(--abtt) underline`}>about</Link> page to learn more about me.
                            </p>
                            <p className={`pt-[20px]`}>
                                I am a first-year MS Computer Science student at MTSU. I enjoy creating projects that help improve efficiency and just generally make me happy. I'm currently working
                                on several projects on my own time. You can find more about them <Link href="/projects" className={`text-(--pt) underline`}>here.</Link>
                            </p>
                            <p className={`pt-[20px]`}>
                                If you would like to see my code, take a look at my <a className={`text-(--ic)`} href="https://github.com/raaz4n" target="_blank" rel="noopener noreferrer">github.</a>
                            </p>
                            <p className={`pt-[20px]`}>
                                You can also connect with me via <a className={`text-(--lc)`} href="https://linkedin.com/in/raazan" target="_blank" rel="noopener noreferrer">linkedin</a> as well.
                            </p>
                            <p className={`pt-[60px]`}>
                                Anyways,
                            </p>
                            <h2 className={`text-[30px] font-semibold pb-[20px]`}>
                                welcome to my website!
                            </h2>
                            <p className={`pt-[20px]`}>
                                I had a previous website I built through React but wanted a more impressive website to display my skills. Was also a good learning opportunity to use NextJS and Tailwind.
                            </p>
                            <p className={`pt-[50px]`}>
                                Interested in contacting me? <a className={`text-[#8b4000]`} href="mailto:raazandoski@gmail.com">Email me.</a>
                            </p>
                        </div>
                    </div>
                    <div style={{ height: '120px' }}></div>
                </div>
            </section>
        </>
    );
}