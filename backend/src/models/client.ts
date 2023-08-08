const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const clientSchema = new Schema({
  name: {
    type: "String",
    required: true,
  },
  phone: {
    type: "String",
    required: true,
  },
  address: {
    type: "String",
    required: true,
  },
});

export const Client = model("Client", clientSchema);
