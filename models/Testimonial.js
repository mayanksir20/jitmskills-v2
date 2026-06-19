const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
    // Student's full name
    name: { 
        type: String, 
        required: [true, "Name is required"], 
        trim: true 
    }, 
    
    // The review message
    text: { 
        type: String, 
        required: [true, "Review text is required"],
        trim: true
    }, 
    
    // The image stored as a Base64 string
    img: { 
        type: String, 
        default: "" 
    }
}, { 
    // Isse 'createdAt' aur 'updatedAt' automatically manage ho jayenge
    timestamps: true 
});

module.exports = mongoose.model('Testimonial', testimonialSchema);