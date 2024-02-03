from pymongo import MongoClient
from fastapi import FastAPI
import pymongo
import os

app = FastAPI()


client = MongoClient("localhost", 27017 )

@app.get("/")
def read_root():
    return {"Hello": "World"}

db = client.RENFY
collection = db.test_collection

db.collection.insertOne(
    <document>,
    {
      writeConcern: <document>
    }
)
