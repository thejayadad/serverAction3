import User from "@/models/User";
import db from "./db";

export const fetchUsers = async () => {
    db.connect()
    try {
        const users = await User.find()
        return users
    } catch (error) {
        console.log(err)
        throw new Error("Failed to fetch users")
    }
}