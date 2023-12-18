import Link from "next/link"



const Nav = () => {
  return (
    <header className='px-4 py-12'>
        <nav className='flex justify-center gap-6 mx-auto max-w-screen-xl'>
        <Link href={'/admin/newBanner'}>
          NewBanner
        </Link>
        <Link href={'/admin/category/new'}>NewCategory</Link>
        <Link href={'/admin/category'}>AllCategory</Link>
        </nav>
    </header>
  )
}

export default Nav