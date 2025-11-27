import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className={`flex flex-row justify-between w-[100%] fixed`}>
      <div className={`block min-w-screen h-[85px] fixed top-[0px] bg-[#333]`}>
      </div>
      <div className={`flex flex-row justify-around w-[100%] h-[70px] relative`}>
        <Link href="/" prefetch className={`flex flex-col justify-center items-center bg-(--ht) cursor-pointer w-[20%]`}>
            <p className={`block font-medium text-[40px] leading-[20px] text-white`}>
                home
            </p>
        </Link>
        <Link href="/about" prefetch className={`flex flex-col justify-center items-center bg-(--abtt) cursor-pointer w-[20%]`}>
            <p className={`block font-medium text-[40px] leading-[20px] text-white`}>
                about
            </p>
        </Link>
        <Link href="/art" prefetch className={`flex flex-col justify-center items-center bg-(--at) cursor-pointer w-[20%]`}>
            <p className={`block font-medium text-[40px] leading-[20px] text-[#333]`}>
                art
            </p>
        </Link>
        <Link href="/blog" prefetch className={`flex flex-col justify-center items-center bg-(--bt) cursor-pointer w-[20%]`}>
            <p className={`block font-medium text-[40px] leading-[20px] text-[#333]`}>
                blog
            </p>
        </Link>
        <Link href="/projects" prefetch className={`flex flex-col justify-center items-center bg-(--pt) cursor-pointer w-[20%]`}>
            <p className={`block font-medium text-[40px] leading-[20px] text-[#333]`}>
                projects
            </p>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
