import {Schema} from "mongoose"

import { connection } from "../../App"

export const profSchema = new Schema({
    firstname: Schema.Types.String,
    lastname: Schema.Types.String,
    address: Schema.Types.String,
    course: Schema.Types.ObjectId
})

export const profModel = connection.model("prof", profSchema)