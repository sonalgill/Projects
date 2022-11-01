const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const reviewModel = new mongoose.Schema(
    {
        bookId: {
            type: ObjectId,
            required: true,
            ref: 'book'
        },
        reviewedBy: {
            type: String,
            default: 'Guest',
            trim: true
        },
        reviewedAt: {
            type: Date,
            required: true
        },
        rating: {
            type: Number,
            enum: [1, 2, 3, 4, 5],
            required: true
        },
        review: {
            type: String,
            trim: true
        },
        isDeleted: {
            type: Boolean,
            default: false
        },
    }
)

module.exports = mongoose.model('review', reviewModel)