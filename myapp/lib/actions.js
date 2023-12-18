'use server'
import db from "./db";
import Banner from "@/models/Banner";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import Category from "@/models/Category";
import Product from "@/models/Product";



export const addBanner = async (formData) => {
    const {title, desc, imgUrl, active} = Object.fromEntries(formData);
    try {
        db.connect()
        const newBanner = new Banner({
            title, desc, imgUrl, active 
        })
        await newBanner.save()
    } catch (error) {
        console.log(err)
        throw new Error("Failed To Create Banner")
    }

    revalidatePath("/admin");
    redirect("/admin");
}
export const addCategory = async (formData) => {
    const {name, product} = Object.fromEntries(formData);
    try {
        db.connect()
        const newCategory = new Category({
            name, product 
        })
        await newCategory.save()
    } catch (error) {
        console.log(err)
        throw new Error("Failed To Create Category")
    }

    revalidatePath("/admin");
    redirect("/admin");
}
export const addProduct = async (formData) => {
    const {name,category, color, size, images, featured,inStock } = Object.fromEntries(formData);
    try {
        db.connect()

        const newProduct = new Product({
            name,  category, color, size, images, featured, inStock
        })

        await newProduct.save()

       
    } catch (error) {
        console.log(error)
        throw new Error("Failed To Create Product")
    }

    revalidatePath("/admin");
    redirect("/admin");
}

export const updateCategory = async (formData) => {
    const {name, product} = Object.fromEntries(formData);

  
    try {
      db.connect()
  
      const updateFields = {
        name, product
      };
  
      Object.keys(updateFields).forEach(
        (key) =>
          (updateFields[key] === "" || undefined) && delete updateFields[key]
      );
  
      await Category.findByIdAndUpdate(id, updateFields);
    } catch (err) {
      console.log(err);
      throw new Error("Failed to update user!");
    }
  
    revalidatePath("/admin");
    redirect("/admin");
  };