const mongoose = require("mongoose");

const DocumentSchema = new mongoose.Schema({

//as per requirements
  department: { type: String, required: false }, 
  roomNumber: { type: String, required: false }, 
  accessDates: {
    startDate: { type: Date, required: false }, 
    endDate: { type: Date, required: false }, 
  },
  signatures: [{ type: String, required: false }], 
});

module.exports = mongoose.model("Document", DocumentSchema);
