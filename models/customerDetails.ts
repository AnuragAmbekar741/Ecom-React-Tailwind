import mongoose, { Schema } from "mongoose";
import { UserDetails } from "@/store/atoms/userDetailsState";

const customerSchema = new Schema<UserDetails & Document>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    apt: { type: String, required: true },
    locality: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pin: { type: String, required: true },
});

const Customer = mongoose.models.Customer || mongoose.model('Customer', customerSchema)

export default Customer