'use client'
import { useState, useEffect} from 'react'

const ThemeButton = () => {
    const [currentTheme, setTheme] = useState("dark")
    const themes = ["dark", "light", "pastel", "matcha", "blue summer"]

    useEffect(() => {
        const cachedTheme = localStorage.getItem("theme") || "dark"
        setTheme(cachedTheme)
        document.documentElement.setAttribute("data-theme", cachedTheme)
    }, []);

    const switchTheme = () => {
        const currentIndex = themes.indexOf(currentTheme);
        let nextIndex = currentIndex + 1;

        if (nextIndex >= themes.length) {
            nextIndex = 0;
        }
        const nextTheme = themes[nextIndex];

        setTheme(nextTheme);
        localStorage.setItem("theme", nextTheme);
        document.documentElement.setAttribute("data-theme", nextTheme);
    }

    return (
    <button
        onClick={switchTheme}
        className="flex flex-row items-center justify-center
        pt-[9px] pl-[15px] pb-[9px] pr-[15px] h-[75px] 
        fixed top-[200px] left-[81.5%] text-[50px] leading-[20px] 
        text-(--nxt-clr) bg-(--nxt-bg) cursor-pointer">
        ▧
    </button>
  )
}

export default ThemeButton
