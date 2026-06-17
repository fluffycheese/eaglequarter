In this repository ./n8n, view the .json exported n8n workflow. First analazye the flow and make sure you understand what is happening at each step, also reference the readme.md in this repository for overall
context of the project. Can you help make the following additions and changes, with better workflow, automation, AI, etc as is appropriate:
  - The current RSS feeds do not currently give many results, can you create  better methods of gathering new articles regarding the eagle quarter/kennet centre development
  - Ideally, I would like to be adding a new article minimum once per fortnight. If there is no direct news relating to the development I would like to broaden the scope to include other development, community or 
  business news in the Newbury town centre - especially if it can be made in some way relevant, even if indirectly to the eagle quarter/kennet centre development
  - The AI driven generation of news articles from source materials should use existing articles in the ./src/content/news repository for tone, context, bias, length etc
  - The AI driven generation of news articles should be setup to use antigravity-cli. Perhaps it is more effecient to create a  skills.md, claude.md or .gemini file to be used to generate the above point instaed of querying
  everytime?
  - Automatically pulling the hero image from the source article and adding it to the ./public/images/news repository, naming it appropriatly. If possible converting it to a webp image for reduced size?
Please output to a new n8n compatable .json and create any supporting files, instructions, etc. Prefer simple n8n workflow over heavy custom scripting.