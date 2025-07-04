const { GoogleGenerativeAI } = require("@google/generative-ai")
const express= require('express')
const bodyParser=require('body-parser');
const { log } = require("console");
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("Hello World");
})

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// const prompt = "write a story about Hanuman in hindi";

const generate = async (prompt) => {
    try {
        const result = await model.generateContent(prompt);
        console.log(result.response.text());
        return result.response.text()
    } catch (error) {
        console.log(error);
    }
}
// generate();

app.get('/api/content',async(req,res)=>{
    try {
        const dta=req.body.question;
        const result= await generate(dta);
        res.send({
            "result":result
        })

    } catch (error) {
        console.log(error);
        res.send("error : "+error)
        
    }
})

app.listen(3000,()=>{
    console.log("serverr is running")
})