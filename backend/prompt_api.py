import openai
import os

from dotenv import load_dotenv
load_dotenv()

openai.api_key  = os.getenv('OPENAI_API_KEY')



def get_text_completion(prompt, model="gpt-3.5-turbo"):
    messages = [{"role": "user", "content": prompt}]
    response = openai.ChatCompletion.create(
        model=model,
        messages=messages,
        temperature=0, # this is the degree of randomness of the model's output
    )
    return response.choices[0].message["content"]


def get_image_generation(prompt):
    return openai.Image.create(
    prompt=prompt,
    n=1,
    size="1024x1024"
    )
