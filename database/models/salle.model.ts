import { Schema } from "mongoose";

import {connection} from "../../App"

export const salleSchema  = new Schema({
    nom: Schema.Types.String,
    capacite: Schema.Types.Number,
})

export const salleModel = connection.model("salle")