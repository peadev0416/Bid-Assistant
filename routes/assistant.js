import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import { OpenAI } from 'openai';
import dotenv from 'dotenv';
import { zodTextFormat } from "openai/helpers/zod";
import { z } from "zod";


dotenv.config();

const router = express.Router();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const RESUME_DIR = path.resolve('resumes');

const ResearchPaperExtraction = z.object({
    name: z.string(),
    tech_skill: z.array(z.string()),
    devops_skill: z.array(z.string()),
    location: z.string(),
    cover_letter: z.string(),
});

router.post('/generate', async (req, res) => {
    const { name, jobDescription, type = 'coverLetter' } = req.body;

    try {
        const resumePath = path.join(RESUME_DIR, `${name}.txt`);
        const resume = await fs.readFile(resumePath, 'utf-8');

        const input = [
            {
                role: 'system',
                content: `You must be the person on the resume. Generate a content using the following resume and job description. And You are an expert at structured data extraction. You will be given unstructured text from a research paper and should convert it into the given structure.`
            },
            {
                role: 'user',
                content: `Resume:\n${resume}\n\nJob Description:\n${jobDescription}\n\nOutput:`
            }
        ];


        const response = await openai.responses.parse({
            model: 'gpt-4o-2024-08-06',
            input,
            text: { format: zodTextFormat(ResearchPaperExtraction, "research_paper_extraction") },
            temperature: 0.7
        });

        const output = response.output_parsed;

        res.json({ output });
    } catch (err) {
        console.error('Error:', err.message);
        res.status(500).json({ error: 'Resume not found or OpenAI API issue.' });
    }
});

export default router;
