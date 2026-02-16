# 🤖 AI Resume Analyzer + Job Match System

![Python](https://img.shields.io/badge/Python-3.8%2B-blue)
![Flask](https://img.shields.io/badge/Framework-Flask-green)
![NLP](https://img.shields.io/badge/AI-NLP-orange)
![Status](https://img.shields.io/badge/Status-In%20Development-yellow)

**A powerful NLP-based tool designed to help job seekers optimize their resumes for Applicant Tracking Systems (ATS).**

---

## 📋 Table of Contents
- [Project Overview](#-project-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Team Members](#-team-members--roles)
- [Installation & Setup](#-installation--setup)
- [Usage Guide](#-usage-guide)
- [Contribution Guidelines](#-contribution-guidelines)

---

## 📖 Project Overview
The **AI Resume Analyzer** is an advanced tool that uses Natural Language Processing (NLP) to parse resumes and compare them against specific job descriptions (JD). 

In the modern recruitment landscape, companies use ATS software to filter candidates. This project mimics that process to help users understand their standing. It provides a match percentage, identifies missing critical skills, and offers actionable keyword suggestions to increase the chances of getting shortlisted.

---

## 🚀 Key Features
* **📄 Smart Resume Parsing:** Automatically extracts text, contact details, and sections from PDF/DOCX resumes.
* **🎯 Job Description Matching:** Vectorizes text to compare the resume against a provided JD using Cosine Similarity/TF-IDF.
* **📊 ATS Compatibility Score:** Calculates a precise compatibility score (0-100%) indicating role fit.
* **🔍 Skill Gap Analysis:** Highlights specific skills mentioned in the JD that are missing from the user's resume.
* **💡 Smart Recommendations:** Suggests keywords and formatting improvements to boost the ATS score.

---

## 🛠️ Tech Stack
* **Language:** Python 3.x
* **Backend Framework:** Flask
* **NLP & AI:** * `NLTK` (Natural Language Toolkit)
    * `Spacy` (Entity Recognition)
    * `Scikit-learn` (TF-IDF Vectorization & Similarity scoring)
* **Frontend:** HTML5, CSS3, JavaScript (React.js optional)
* **File Processing:** `PyPDF2`, `pdfminer`

---

## 🔄 Project Architecture
The system follows a linear data processing pipeline:

1.  **Input:** User uploads Resume (PDF) + Pastes Job Description.
2.  **Preprocessing:** System cleans text (removes stop words, special characters, formatting).
3.  **Tokenization:** Text is broken down into tokens; Named Entities (Skills, Org, Dates) are extracted.
4.  **Vectorization:** Both texts are converted into numerical vectors.
5.  **Matching:** Cosine similarity measures the angle between vectors to determine closeness.
6.  **Output:** Dashboard displays Score, Missing Skills, and Tips.

---

## 👥 Team Members & Roles

| Name | Role | Responsibilities |
| :--- | :--- | :--- |
| **Krishna Sharma** | **Team Lead / Backend** | Repo management, Flask API setup, System Architecture integration. |
| **Shivam Shukla** | **AI/ML Engineer** | Developing the Resume Parsing logic, NLTK/Spacy implementation, and Scoring algorithm. |
| **Pratyush Raghuvanshi** | **Frontend Dev** | UI/UX Design, creating the file upload interface and results dashboard. |
| **Vansh Bhardwaj** | **Documentation/QA** | Testing the system with real resumes, bug fixing, and maintaining documentation. |

---

