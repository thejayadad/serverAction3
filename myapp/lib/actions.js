'use server'
import db from "./db"
import { signIn } from "../auth";
import Post from "@/models/Post";
import { redirect } from "next/navigation";


export const addProduct = async (FormData)=> {
    const {title, slug, desc, tags, publish, imgUrl }=  Object.fromEntries(FormData)
    try {
        db.connect()
        const newPost = new Post({
            title,
            slug,
            desc,
            tags,
            publish,
            imgUrl
        })
        await newPost.save();
    } catch (error) {
        console.log(err)
        throw new Error("Failed To Create Post")
        
    }
    revalidatePath("/");
  redirect("/");
}