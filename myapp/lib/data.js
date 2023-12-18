import Category from "@/models/Category";
import db from "./db";
import Banner from "@/models/Banner";
import Product from "@/models/Product";

export const fetchBanner = async() => {
    try {
        db.connect()
        const banners = await Banner.find()
        return banners
    } catch (error) {
        
    }
}
export const fetchCategories = async() => {
    try {
        db.connect()
        const categories = await Category.find()
        return categories
    } catch (error) {
        
    }
}

export const fetchCategory = async(id) => {
    try {
        db.connect()
        const category = await Category.findById(id)

    
        return category;
    } catch (error) {
        
    }
}


