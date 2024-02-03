from pymongo import MongoClient
from fastapi import FastAPI
import pymongo


import os

app = FastAPI()


client = MongoClient(os.getenv("MONGO_URI")) #change

@app.get("/")
def read_root():
    return {"Hello": "World"}

