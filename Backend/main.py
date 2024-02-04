from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

client = MongoClient(os.getenv("MongoDB_Auth"))
db = client.RENFY


def add_user(db,Real_Name,User_Name,Password,Email):
  if db.users.find_one({"User": User_Name}) is None:
    document = db.users
    new_user= {
      "Real_Name":Real_Name,
      "User":User_Name, #distinct
      "Password":Password,
      "Email":Email,
      #Differentiating crossings, connection requests, and accepted connections allows for O(1) access. 
      "Crossings":{},  #hash maps of crossed pathes with user 
      "Connection_Requests":set(), #list
      "Accepted_Connections":set() #list - mutally accepted
    }
    document.insert_one(new_user)
    return 1
  else:
    print("The Username is taken")
    return 0

def add_crossings(db,USER_NAME, Connection, Location):
  document = db.users
  existing_user = document.find_one({"User": USER_NAME})
  if existing_user:
    crossings = existing_user.get("Crossings", {})  # Get existing crossings or create an empty list
    if crossings[Connection]:  
      crossings[Connection]["count"] += 1 
      crossings[Connection]["locations"].extend(Location)
    else:
      crossings[Connection] = {"count": 1, "locations": [Location]}

    update = {"$set": {"Crossings": crossings}}  # Update the crossings list
    result = document.update_one({"User": USER_NAME}, update)

    return 1  
  else:
    print("Username not found")
    return 0

def change_password_w_old_password(db,USER_NAME,old_password,new_password):
  document = db.users
  existing_user = document.find_one({"User": USER_NAME})
  if existing_user:
    prev_password = existing_user.get("Password", {})
    if prev_password["Password"]==old_password:
      old_password["Password"]=new_password
      document.update_one({"User": USER_NAME}, {"$set": {"Password": new_password}})
    else:
      print("Previous password does not match")
  else:
    print("Username not found")
  return 1

add_user(db,"David","DMazur","123","Email")




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



"""
  if existing_user["Crossings"]
  if "Crossings" not in existing_user:
    existing_user["Crossings"] = []
  existing_user["Crossings"] = []


  update = {"$set": {"field_to_update": "new_value"}}
  result = collection.update_one("User": USER_NAME, update)

"""
"""
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