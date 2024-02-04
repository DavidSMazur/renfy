#test.py
from pymongo import MongoClient
import os
from dotenv import load_dotenv
from main import add_user, add_crossings,change_pass_w_old,change_username


load_dotenv()

client = MongoClient(os.getenv("MongoDB_Auth"))
db = client.RENFY
"""
add_user(db,"Bob","Bob","123","bob@hackatbrown.tech") 
add_user(db,"David","David","abc","david@hackatbrown.tech") 
add_user(db,"Sam","Sam","zxy","sam@hackatbrown.tech") 


add_crossings(db,"Sam", "Bob", "195 Angell Street") 
add_crossings(db,"Sam", "David", "Arnold Laboratory") 
add_crossings(db,"Sam", "David", "Barus and Holley Building") 
add_crossings(db,"Sam", "Bob", "Barus Hall") """

#change_pass_w_old(db,"Bob","123","345")

