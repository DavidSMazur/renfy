from pymongo import MongoClient
from fastapi import FastAPI
import pymongo
import os
from dotenv import load_dotenv

load_dotenv()

client = MongoClient(os.getenv("MongoDB_Auth"))
db = client.RENFY


def add_user(db,Real_Name,User_Name,Password,Email):
  document = db.test_collection
  new_user= {
    "Real_Name":Real_Name,
    "User":User_Name,
    "Password":Password,
    "Email":Email,
    "Connections":[]
  }
  document.insert_one(new_user)
add_user(db,"David","dmazur","123","Email")

"""
def add_connection(user, connection, location):
#also take time
"""


"""
Givens:
User {
  Real Name
  User_Name
  Password
  Email
  Connections: set(
)
}
{
  Connection UserName : set()
  location

  
}
"""