import ThemeButton from "../components/Theme";

export default function art() {
  return (
    <div className={`flex flex-col justify-center items-center min-h-screen bg-(--background)`}>
      <ThemeButton/>
      <div className={`flex flex-col justify-start items-start gap-[34px] pt-[200px] min-h-screen w-[70%] static`}>
        <div className={`flex flex-col justify-start items-start gap-[30px] mb-[60px] w-[100%] h-[15%]`}>
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
      </div>
    </div>
  );
}
