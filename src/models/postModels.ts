const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
        dataTitle: {
            type: String,
            required: true,
        },
        tasks: {
            type: Array,
            required: true,
        }
})

// module.exports = mongoose.models.james || mongoose.model("james", postSchema);

module.exports = mongoose.models?.james || mongoose.model("james", postSchema);

// module.exports = mongoose.model("james", postSchema);