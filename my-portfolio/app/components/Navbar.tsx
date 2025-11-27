import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='fixed top-0 w-full flex items-center 
    justify-around pb-15 border-b border-gray-700 bg-black'>
        <Link href="/" prefetch className='transition duration-300 hover:scale-110'>
        </Link>
        <ul className="flex gap-10 text-lg">
            <Link href="/about" prefetch
            className="text-gray-300 hover:text-white 
            transition-colors">
                about
            </Link>

            <Link href="/art" prefetch
            className="text-gray-300 hover:text-white 
            transition-colors">
                art
            </Link>

            <Link href="/blog" prefetch
            className="text-gray-300 hover:text-white 
            transition-colors">
                blog
            </Link>

            <Link href="/projects" prefetch
            className="text-gray-300 hover:text-white 
            transition-colors">
                projects
            </Link>
        </ul>
        
    </nav>
  )
}

export default Navbar
