const { model, Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLenght: 6
    },
    posts: [{type: mongoose.Types.ObjectId, ref: "Post", required: true }]
});

export default model("User", userSchema);