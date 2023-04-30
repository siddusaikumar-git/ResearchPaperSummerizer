This is a backend Application, which provide prompt chatgpt prompt service for research papers using Python programming language and Flask library.

## Getting Started

First create an openai key from [openai](https://openai.com)

Second create `.env` file, then update with openai key as below

> OPENAI_API_KEY=<openai_key>

Now, before starting the server, install dependencies

```bash
pip install -r requirements.txt
```

Finally to start the backend server, run the following command.

```bash
python service.py
```
