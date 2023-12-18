import React from 'react'
import { fetchCategory } from '@/lib/data';
import { addProduct, updateCategory } from '@/lib/actions';
import Form from '@/components/dashboard/Form/Form';
import Input from '@/components/dashboard/Form/input';
import Button from '@/components/dashboard/Form/button';
import { fetchPostByCategory } from '@/lib/data';


const CategoryPage = async ({ params }) => {
    const { id } = params;
    const category = await fetchCategory(id);


  return (
    <section className='px-4 py-12'>
        <div className='flex flex-col mx-auto max-w-screen-lg'>
            <h2 className='text-center'>{category.name}</h2>
            <div className=''>
                  <div className='flex gap-4 flex-col'>
                  <span>{category.name}</span>
                    <span>NewProduct</span>
                  </div>
                    <Form
                     action={addProduct}
                    >
                        <input
                        hidden
                        id='category'
                        name='category'
                        value={category.name}
                        />
                        <Input
                        placeholder='Name'
                        type='text'
                        name='name'
                        id='name'
                        />
                        <Input
                        placeholder='Color'
                        type='text'
                        name='color'
                        id='color'
                        />
                        <Input
                            placeholder='Images'
                            type='text'
                            name='images'
                            id='images'
                        />
                        <Input
                        placeholder='Featured'
                        type='text'
                        name='featured'
                        id='featured'
                        />
                        <Input
                        placeholder='InStock'
                        type='text'
                        name='inStock'
                        id='inStock'
                        />
                      <Button type='submit'>Submit</Button>
                    </Form>
            </div>
            
        </div>
    </section>
  )
}

export default CategoryPage