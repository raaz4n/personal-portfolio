'use client'
import { useState } from "react";
import Link from "next/link";
import Filter from "../components/Filter";
import ThemeButton from "../components/Theme";
import { data } from "@/data";

export default function Blog() {
    const [activeTag, setActiveTag] = useState('all')
    let tagList = ['all', 'personal', 'projects', 'websiteCheck', 'Aeris']

    const handleTag = (tag) => {
        setActiveTag(tag)
    }

    const filterTags = (array) => {
        if (activeTag.toLowerCase() == "all"){
            return array
        }
        else{
            return array.filter(el => el.category.some(category => category.toLowerCase() === activeTag.toLowerCase()))
        }
    }

    let filteredList = filterTags(data)

    return (
        <section className={`flex flex-col justify-center items-center min-h-screen bg-(--background)`}>
            <ThemeButton />
            <div className={`flex flex-col justify-start items-start gap-[30px] pt-[200px] 
                             w-[40%] min-h-screen static`}>
                <div className={`flex flex-col justify-start items-start gap-[30px] mb-[5px] w-[100%] h-[15%]`}>
                    <h1 className={`mb-[10px] font-semibold text-[38px] leading-[44px] text-(--tcl1)`}>
                        Blog
                    </h1>
                    <p className={`mb-[10px] font-normal text-[18px] leading-[20px] text-(--tcl1)`}>
                        Posts of mine. What I'm up to.
                    </p>
                    <p className={`mb-[10px] font-normal text-[14px] leading-[20px] text-(--tcl2)`}>
                        ◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈
                    </p>
                </div>
                <div className={`flex flex-row justify-center w-full`}>
                    <Filter tagList={tagList} activeTag={activeTag} handleTag={handleTag}/>
                </div>
                <div className={`flex flex-col w-[100%] gap-[10px] pl-[10px] pr-[10px] pt-[20px]`}>
                    {filteredList.map((el, i) => (
                        <Link key={i} href={`/blog/${el.slug}`} className={`flex flex-col cursor-pointer justify-start items-start h-[10em] border-5 border-(--tcl2) pl-[10px] mb-[20px]`}>
                            <div className={`flex flex-row justify-between w-full`}>
                                <h1 className={`text-[40px] text-(--tcl1) font-semibold hover:text-(--ic)`}>
                                    {el.name}
                                </h1>
                                <p className={`underline font-secondary text-(--tcl3) pt-[10px] pr-[15px]`}>
                                    {el.date}
                                </p>
                            </div>
                            <p className={`text-(--tcl2)`}>
                                {el.desc}
                            </p>
                            <div className={`flex flex-row flex-wrap mt-[20px] gap-[10px]`}>
                                {el.category.map((category, index) => (
                                <div key={index} style={{ paddingLeft: '5px', paddingRight: '5px' }} className={`font-secondary border-2 border-(--tcl2) h-[35px]`}>
                                    <p className={`flex mt-[3px] justify-center items-center text-[15px]text-(--tcl2)`}>
                                        {category}
                                    </p>
                                </div>
                                ))}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}