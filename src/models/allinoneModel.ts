import mongoose from 'mongoose';

const allinoneSchema = new mongoose.Schema({
    dataTitle: String,
    tasks: [{
            content: String,
            checked: Boolean
        }]
})

module.exports = mongoose.models?.james || mongoose.model("james", singleTaskSchema);
