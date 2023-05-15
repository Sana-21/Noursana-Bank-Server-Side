const mongoose = require("mongoose");
const CardSchema = new mongoose.Schema(
    {
        CardNo: Number,
        Type: String,
        PIN:{
            type: Number,
            default: 0000
        },
        ExpDate: Date,
        IssueDate: Date,
    },
    {
        collection: "Bank-database",
    }
);

module.exports = CardSchema;