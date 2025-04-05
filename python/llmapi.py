import openai
import os
from langchain import OpenAI, ConversationChain, LLMChain, PromptTemplate
os.environ['OPENAI_API_KEY'] = os.getenv("OPENAI_API_KEY")
from langchain.memory import ConversationBufferWindowMemory
openai.api_key = os.getenv("OPENAI_API_KEY")
template = """Create ppt content for .
{topic}
Assistant:"""
prompt = PromptTemplate(input_variables=["topic"], template=template)
chatgpt_chain = LLMChain(
    llm=OpenAI(temperature=0),
    prompt=prompt,
    verbose=True,
    memory=ConversationBufferWindowMemory(k=2),
)

output = chatgpt_chain.predict(
    topic="cloud"
)
print(output)