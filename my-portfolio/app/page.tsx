import ThemeButton from "./components/Theme";

export default function Home() {
  return (
    <section className={`flex flex-col justify-center min-h-screen bg-(--background)`}>
        <div className={`block 
            ml-[3%] mb-[3%] mr-[3%] w-[94%] h-[83%] 
            bottom-[0%] absolute`}>  
        </div>
        <ThemeButton/>
        <div className={`block 
            w-[500px] h-[300px] ml-[3%] mt-[50px] mr-[50px] mb-[50px] 
            pt-[30px] pb-[30px] absolute 
            bg(--background)`}>
                <p className="static block mb-[10px] text-[30px] font-normal leading-[20px]">
                    hi, i'm
                </p>
                <h1 className="static block mt-[10px] mb-[10px] text-[60px] font-semibold leading-[44px]">
                    raazan
                </h1>
                <p className="static block mt-[10px] pt-[5px] mb-[10px] font-medium text-[20px] leading-[20px] text-(--tcl3) italic">
                    building apps, bots, and a 2D game.
                </p>
                <p className="static block pt-[60px] mb-[10px] font-normal text-[30px] leading-[20px]">
                    small developer • cs @ mtsu
                </p>
                <p className="font-secondary static flex flex-row pt-[15px] mb-[10px] font-medium text-[20px] leading-[20px] text-(--tcl2)">
                    <a href="https://github.com/raaz4n" target="_blank" rel="noopener noreferrer">github</a>   ❘ ✦ ❘   <a href="https://linkedin.com/in/raazan" target="_blank" rel="noopener noreferrer">linkedin</a>
                </p>
        </div>
    </section>
  );
}
