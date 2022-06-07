import { Schema } from "mongoose";
import { connection } from "../../App";

export const coursSchema = new Schema({
    nom: Schema.Types.String,
    professseur: Schema.Types.ObjectId,
    salle: Schema.Types.ObjectId
})

export const coursModel = connection.model("cours", coursSchema)