const mongoose = require("mongoose");


const schema = mongoose.Schema;
const SolutionsSchema = new schema({
    Age: {
        type: Number,
    },
    Course: {
        type: String,
    },
    Gender: {
        type: String,
    },
    CGPA: {
        type: Number,
    },
    Stress_Level: {
        type: Number,
    },
    Depression_Score: {
        type: Number
    },
    Anxiety_Score: {
        type: Number
    },
    Sleep_Quality: {
        type: String
    },
    Physical_Activity: {
        type: String,
    },
    Diet_Quality: {
        type: String,
    },
    Social_Support: {
        type: String,
    },
    Relationship_Status: {
        type: String,
    },
    Substance_Use: {
        type: String,
    },
    Counseling_Service_Use: {
        type: String,
    },
    Family_History: {
        type: String,
    },
    Chronic_Illness: {
        type: String,
    },
    Financial_Stress: {
        type: Number,
    },
    Extracurricular_Involvement: {
        type: String,
    },
    Semester_Credit_Load: {
        type: Number,
    },
    Residence_Type: {
        type: String,
    },
});

module.exports = mongoose.model("Solutions", SolutionsSchema);