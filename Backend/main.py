from pymongo import MongoClient
from fastapi import FastAPI
import pymongo
import os

client = MongoClient("localhost",27017)
db = client.RENFY

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
collection = db.test_collection

def add_user(db,Real_Name,User_Name,Password,Email):
  collection = db.test_collection
  new_user= {
    "Real_Name":Real_Name,
    "User":User_Name,
    "Password":Password,
    "Email":Email,
    "Connections":[]
  }
  collection.insert_one(new_user)
add_user(db,"David","dmazur","123","Email")

"""
def add_connection(user, connection, location):
#also take time
"""

