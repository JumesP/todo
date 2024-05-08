import mongoose from "mongoose";

const singleTaskSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    checked: {
        type: Boolean,
        required: true
    }
})

// module.exports = mongoose.models.james || mongoose.model("james", singleTaskSchema);
module.exports = mongoose.model("james", singleTaskSchema);
