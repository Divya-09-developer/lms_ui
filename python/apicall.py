import openai
import os
from langchain import OpenAI, ConversationChain, LLMChain, PromptTemplate
from flask import Flask
from flask_restful import Resource, Api
app = Flask(__name__)
api = Api(app)
os.environ['OPENAI_API_KEY'] = os.getenv("OPENAI_API_KEY")
from langchain.memory import ConversationBufferWindowMemory
class People2(Resource):
	def get(self):
         openai.api_key = os.getenv("OPENAI_API_KEY")
         template = """Create ppt content for .
         {topic}
         Assistant:"""
         prompt = PromptTemplate(input_variables=["topic"], template=template)
         chatgpt_chain =LLMChain(llm=OpenAI(temperature=0),prompt=prompt, verbose=True, 
		 memory=ConversationBufferWindowMemory(k=2),)
         output = chatgpt_chain.predict( topic="cloud")
         return {'Note': output}
api.add_resource(People2, '/Nam/')
if __name__ == '__main__':
	app.run(debug=True)
