from googletrans import Translator

def translate_to_hindi(text):
    translator = Translator()
    translated = translator.translate(text, src='en', dest='hi')
    return translated.text

"""
This file defines a function to translate English text to Hindi using the googletrans library.
The translate_to_hindi function creates a Translator object, sends the input English text to 
Google Translate, and returns the translated Hindi text. It specifies the source language 
('en' for English) and the destination language ('hi' for Hindi).
"""