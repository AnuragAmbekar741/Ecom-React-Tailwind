import mongoose from 'mongoose'

const connectToDb = async () => {
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(process.env.MONGODB_URL as string)
            console.log('DB connected!')
        }
    } catch (err) {
        console.log(err)
    }
}

export default connectToDb