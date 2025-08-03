from PIL import Image
import pytesseract

def extract_text(image_path):
    return pytesseract.image_to_string(Image.open(image_path), lang='eng')

# pytesseract is a Python wrapper for the Tesseract OCR engine.
# It allows you to use optical character recognition (OCR) to read text from images.