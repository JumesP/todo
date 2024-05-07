const mongoose = require('mongoose');

// const postSchema = new mongoose.Schema({
//     todoList: {
//         type: Array,
//         required: true
//     }
// });

// const postSchema = new mongoose.Schema({
//     DataTitle:
//         [{
//             content: {
//                 type: String,
//                 required: true
//             },
//             checked: {
//                 type: Boolean,
//                 required: true
//             }
//         }]
// });

const postSchema = new mongoose.Schema({
        dataTitle: {
            type: String,
            required: true
        },
        tasks: {
            type: Array,
            required: true
        }
})

// const singleTaskSchema = new mongoose.Schema({
//     content: {
//         type: String,
//         required: true
//     },
//     checked: {
//         type: Boolean,
//         required: true
//     }
// })
//

// module.exports = mongoose.models.james || mongoose.model("james", singleTaskSames", singleTaskSchema);
module.exports = mongoose.models.james || mongoose.model("james", postSchema);
// module.exports = mongoose.models.james || mongoose.model("james", singleTaskSchema);
