const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    todoList: {
        type: Array,
        required: true
    }
});



// const PostModel = models.post ?? model("james", postSchema);

// const PostModel = models.user || model('james', postSchema);
module.exports = mongoose.models.james || mongoose.model("james", postSchema);

// export default model("james", postSchema);
// export default PostModel;