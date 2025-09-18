
# English to Hindi Translator App

An interactive web application that translates English text or text from images into Hindi using OCR (Optical Character Recognition) and Google Translate API. The translated text can also be read aloud in Hindi using Text-to-Speech.


## Features

- Text Input → Translate manually typed English text into Hindi.
- Image Upload → Extract English text from images (via OCR) and translate into Hindi.
- Text-to-Speech → Read aloud translated Hindi text.
- Stop Button → Stop the speech anytime while it’s playing.
- Simple React UI → Easy-to-use, clean frontend built with React + CSS.
- Backend API → Built with Flask, handles OCR + translation logic.


## Tech Stack

**Frontend:** 

- React (JavaScript)
- CSS (custom styling)

**Backend:** 

- Python (Flask)
- pytesseract (OCR)
- Pillow (Image handling)
- googletrans (Translation)
- Flask-CORS (Frontend-Backend connection)




## Setup Instructions

 Clone the Repository:

```bash
git clone https://github.com/your-username/english-to-hindi-translator.git
cd english-to-hindi-translator
```

Backend Setup (Flask):

```bash
cd backend
python -m venv venv
source venv/bin/activate   # (Linux/Mac)
venv\Scripts\activate      # (Windows)

pip install -r requirements.txt
cd en
```
Run the backend:
```bash 
python app.py
```
By default, backend runs at: http://localhost:5000

Frontend Setup (React):

Open a new terminal
```bash
cd frontend
npm install
npm start
```

Usage

- Enter English text in the text box OR upload an image containing English text.

- Click Translate.

- See the Hindi translation displayed.

- Use Read Aloud button to listen to the translation.

- Use Stop button to stop the speech.
## 🔗 Links
[![GitHub](https://img.shields.io/badge/my_github-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/shambhavisingh011)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/shambhavi-singh-619100239/)
[![twitter](https://img.shields.io/badge/leetcode-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://leetcode.com/u/Shambhavi011/)

