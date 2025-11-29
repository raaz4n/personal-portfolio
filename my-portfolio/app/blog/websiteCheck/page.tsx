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
                                websiteCheck.py
                            </h1>
                            <p className={`underline font-secondary text-(--tcl3) pt-[10px] pr-[15px]`}>
                                11/29/2025
                            </p>
                        </div>
                        <div className={`text-(--tcl1) text-[18px]`}>
                            <p className={`mb-[50px] font-normal text-[14px] leading-[20px] text-(--tcl2)`}>
                                ◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈
                            </p>
                            <h2 className={`text-[30px] font-semibold pb-[20px]`}>
                                (FINISHED THIS PROJECT IN AUGUST)
                            </h2>
                            <p>
                                Github repo <a className={`text-(--tcl2) underline`} 
                                href="https://github.com/raaz4n/websiteCheck" target="_blank" rel="noopener noreferrer">here.</a>
                            </p>
                            <p className={`pt-[20px]`}>
                                I originally had the idea to create this Python script as I was searching for jobs back in August 2025.
                                I was struggling pretty badly and wanted to find something new, and found a careers page that had 0 listings. My initial
                                thought was to register for email notifications on the company's website, but found no such option.
                            </p>
                            <p className={`pt-[20px]`}>
                                That's when I came up with the idea of using a website's hash and comparing it to a previous hash on certain intervals.
                                I used AWS for my own use, along with several Python libraries such as BeautifulSoup and EmailMessage.
                                I could have used hardware such as a Raspberry Pi, but chose not to in order to gain more experience using AWS.
                            </p>
                            <p className={`pt-[20px]`}>
                                It's tied in with both AWS Lambda and S3, with Lambda running my script every hour and storing the hash in an S3 bucket.
                                Once the hash has been stored, the script will compare the new hash with the hash stored in S3. If the hash has changed,
                                the user will be sent an email and S3 will overwrite the old hash. Otherwise, nothing will happen and AWS will run the script
                                once again based on the user's chosen interval.
                            </p>
                            <p className={`pt-[20px]`}>
                                Currently, I use this script for several careers websites for myself and my father, as he has also been struggling to find a position
                                in this job market.
                            </p>
                        </div>
                    </div>
                    <div style={{ height: '120px' }}></div>
                </div>
            </section>
        </>
    );
}