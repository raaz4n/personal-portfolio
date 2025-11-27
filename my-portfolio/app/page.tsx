export default function Home() {
  return (
    <section className={`flex flex-col items-left justify-center min-h-screen bg-(--color-background)`}>
        <div className={`block 
            ml-[3%] mb-[3%] mr-[3%] w-[94%] h-[83%] 
            bottom-[0%] absolute`}>
                
        </div>
        <div className={`block 
            w-[500px] h-[300px] ml-[3%] mt-[50px] mr-[50px] mb-[50px] 
            pt-[30px] pb-[30px] absolute 
            bg(--color-background)`}>
                <p className="static block mb-[10px] text-(--tcl1) text-[30px] font-normal leading-[20px]">
                    hi, i'm
                </p>
                <h1 className="static block mt-[10px] mb-[10px] text-(--tcl1) text-[60px] font-semibold leading-[44px]">
                    raazan
                </h1>
        </div>
    </section>
  );
}
