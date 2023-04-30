from prompt_api import get_completion

def prompt_input(research_paper_title):

    prompt = f"""
    Your task is to summarize the research paper and provide the requested details.

    Write a response in json format with the following keys:
    title, abstract, summary, num_of_pages, authors, research_paper_link, keywords,

    limit number of authors and keywords to 3

    limit summary to 100 lines and return as list of lines

    provided in the research paper title delimited by 
    triple backticks.

    Technical specifications: ```{research_paper_title}```
    """
    response = get_completion(prompt)
    return response