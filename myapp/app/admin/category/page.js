import React from 'react'
import { fetchCategories } from '@/lib/data'
import Link from 'next/link';


const Category = async () => {
  const category = await fetchCategories();


  return (
    <main>
            {category.map((ban) => (
        <Link
        href={`/admin/category/${ban.id}`}
          key={ban.id}
        >
          <div className="relative z-10">
            <h2 className="text-3xl  text-gray-800 sm:text-4xl animate__animated animate__fadeIn animate__delay-1s transition duration-500">
              {ban.name}
            </h2>
         </div>
        </Link>
      ))}
    </main>
  )
}

export default Category