const express = require('express');
const router = express.Router();
const Testimonial = require('../models/Testimonial'); 

// 1. GET API: Fetch all reviews
router.get('/', async (req, res) => {
    try {
        const reviews = await Testimonial.find().sort({ createdAt: -1 });
        res.status(200).json(reviews);
    } catch (err) {
        res.status(500).json({ 
            success: false,
            message: "Error fetching reviews from database",
            error: err.message 
        });
    }
});

// 2. POST API: Save a new review
router.post('/', async (req, res) => {
    try {
        const { name, text, img } = req.body;

        // Validation
        if (!name || !text) {
            return res.status(400).json({ 
                success: false, 
                message: "Name and Review text are required" 
            });
        }

        // 50-word Limit Check
        const words = text.trim().split(/\s+/).filter(word => word !== "");
        if (words.length > 50) {
            return res.status(400).json({ 
                success: false, 
                message: "Review exceeds the 50-word limit" 
            });
        }

        const newReview = new Testimonial({
            name: name.trim(),
            text: text.trim(),
            img: img || "" 
        });

        const savedReview = await newReview.save();
        res.status(201).json({
            success: true,
            data: savedReview
        });

    } catch (err) {
        console.error("Database Save Error:", err);
        res.status(500).json({ 
            success: false, 
            message: "Internal Server Error: Failed to save review" 
        });
    }
});

module.exports = router;