![Renfy Banner](assets/renfy-banner.jpg)
# Renfy
## Connect with people you pass by daily!
Renfy leverages proximity technology to turn daily encounters into opportunities for connection. By notifying users when they frequently cross paths with someone, Renfy aims to foster real-world interactions and build community.

---

### Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [How to Use](#how-to-use)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

### Introduction

Renfy is a social connectivity app designed to help users discover potential connections based on real-life encounters. Using Bluetooth, location data, WiFi, and device history, Renfy identifies when users cross paths frequently and suggests connections. It's about enhancing the quality of our social lives by leveraging the unnoticed opportunities for interaction that our daily routines offer.

### Features

- **Proximity-based Notifications:** Alerts users when they have crossed paths with someone else frequently.
- **Privacy-first Design:** Comprehensive privacy settings allow users to control what information they share.
- **Real-world Connections:** Focuses on building genuine relationships from real-life encounters.
- **Customizable User Preferences:** Users can set their preferences for notifications and connections.

### Technology Stack

- **Frontend:** React Native, for cross-platform mobile development.
- **Backend:** Python and MongoDB for the database.
- **Proximity Technology:** Utilizes Bluetooth LE for near-field communications and GPS for location tracking.

### Getting Started

#### Prerequisites

- Node.js
- npm or yarn
- MongoDB
- React Native development environment

#### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Renfy-Social-Media/Renfy.git
    ```
2. Install NPM packages for both server and client:
    ```bash
    # For the server
    cd renfy/server
    npm install

    # For the client
    cd renfy/client
    npm install
    ```
3. Set up your environment variables in a `.env` file based on the example provided in `.env.example`.

4. Start the server:
    ```bash
    npm start
    ```
5. Run the app on your device or emulator:
    ```bash
    npm run android # For Android
    npm run ios # For iOS
    ```

### How to Use

After installation, open Renfy on your device. The app will request permission to use your location and Bluetooth. Once permissions are granted, Renfy starts tracking your encounters. When a frequent crossing pattern is identified, you'll receive a notification with the option to connect with the other user.

### Backend
The backend is a MongoDB NoSQL database with the following JSON schema. The "Crossings" element is central to tracking information about crossings with other individuals. The most critical operations in the backend serve to initialize new users, add crossings with other individuals, and serve to update basic information. The "User" field serves as a unique identifier and can't be modified.

```
{
"Real_Name":
"User_Name":
"Password":
"Email":
"Crossings":{   
  Connection: { 
      "count":
      "locations":
      "time":
  } #multiple connections allowed
"Connection_Requests":{}, 
"Accepted_Connections":{} 
}
```


### Contributing

We welcome contributions to Renfy! If you'd like to contribute, please fork the repository and create a pull request with your features or fixes. For major changes, please open an issue first to discuss what you would like to change.

### License

Renfy is released under the MIT License. See the `LICENSE` file for more information.
