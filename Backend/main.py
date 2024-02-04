#main.py
from pymongo import MongoClient
import os
from dotenv import load_dotenv
from datetime import datetime


load_dotenv()

client = MongoClient(os.getenv("MongoDB_Auth"))
db = client.RENFY


def add_user(db,Real_Name,User_Name,Password,Email):
  if db.users.find_one({"User": User_Name}) is None:
    document = db.users
    new_user= {
      "Real_Name":Real_Name,
      "User":User_Name, #distinct and permenatn
      "Password":Password,
      "Email":Email,
      #Differentiating crossings, connection requests, and accepted connections allows for O(1) access. 
      "Crossings":{},  #hash maps of crossed pathes with user 
      "Connection_Requests":{}, 
      "Accepted_Connections":{} 
    }
    document.insert_one(new_user)
    return 1
  else:
    print("The Username is taken")
    return 0

def add_crossings(db,USER_NAME, Connection, Location):
  def helper(db,USER_NAME, Connection, Location):
    if USER_NAME==Connection:
      print("User can't connect with themselves")
      return 0
    document = db.users
    existing_user = document.find_one({"User": USER_NAME})
    if existing_user:
      crossings = existing_user.get("Crossings", {})  # Get existing crossings or create an empty list
      now = datetime.now()
      current_time = now.strftime("%H:%M:%S")
      if Connection in crossings:  
        crossings[Connection]["count"] += 1 
        crossings[Connection]["locations"].append(Location)
        crossings[Connection]["time"].append(current_time)
      else:
        crossings[Connection] = {"count": 1, "locations": [Location],"time":[current_time] }
      update = {"$set": {"Crossings": crossings}}  # Update the crossings list
      result = document.update_one({"User": USER_NAME}, update)

      return 1  
    else:
      print("Username not found")
      return 0
  helper(db,USER_NAME,Connection,Location)
  helper(db,Connection,USER_NAME,Location)

def change_pass_w_old(db,USER_NAME,old_password,new_password):
  if old_password==new_password:
    return 0
  document = db.users
  existing_user = document.find_one({"User": USER_NAME})
  if existing_user:
    prev_password = existing_user.get("Password", {})
    if prev_password==old_password:
      existing_user["Password"]=new_password
      document.update_one({"User": USER_NAME}, {"$set": {"Password": new_password}})
    else:
      print("Previous password does not match")
  else:
    print("Username not found")
  return 1


def change_name(db,CURRENT_USER_NAME,NEW_USER):
  document = db.users
  existing_user = document.find_one({"User": CURRENT_USER_NAME})
  if existing_user:
    existing_user["Real_Name"]=NEW_USER
    document.update_one({"User": CURRENT_USER_NAME}, {"$set": {"Real_Name": NEW_USER}})
  else:
    print("Username not found")
  return 1



"""
    "Real_Name":Real_Name,
    "User":User_Name, #distinct
    "Password":Password,
    "Email":Email,
    #Differentiating crossings, connection requests, and accepted connections allows for O(1) access. 
    "Crossings":{   #hash maps of crossed pathes with user 
      Connection: {
          "count": 1,
          "locations": Location
      }
}



    },  
    "Connection_Requests":set(), #list
    "Accepted_Connections":set() #list - mutally accepted

"""


