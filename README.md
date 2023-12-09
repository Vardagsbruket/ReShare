# Table of Contents

1. [ReShare - A Collaborative Project](#reshare---a-collaborative-project)
   - [Experience ReShare](#experience-reshare)
   - [Overview](#overview)
   - [Mission](#mission)
   - [Key Features](#key-features)
   - [Technologies Used](#technologies-used)

2. [Project Setup](#project-setup)
   - [Fork and Clone the Repository](#1-fork-and-clone-the-repository)
   - [Install Dependencies](#2-install-dependencies)
   - [Install Additional Dependencies](#3-install-additional-dependencies)
   - [Social Media Integration](#4-social-media-integration)
   - [Setting Up ReShare Server](#5-setting-up-reshare-server)
      - [Setting the Fake API](#setting-the-Fake-API)
      - [Setting Up MongoDB](#setting-up-mongodb)

# ReShare - A Collaborative Project

## Experience ReShare

Explore the live version of ReShare [here](https://stirring-florentine-c4bb3f.netlify.app/) and witness firsthand how we're transforming the idea of ownership into a shared experience. Thank you for joining us on this journey towards a more sustainable and collaborative way of living.

## Overview

Welcome to ReShare, our final project developed during Technigo's upskill course in JavaScript and React. At the heart of ReShare is a mission aligned with Agenda 2030 – addressing societal challenges through innovative solutions. ReShare is our response to the challenge of addressing significant societal issues in line with the principles of Agenda 2030. Our collective mission was to craft a solution that contributes positively to the world, focusing on the outlined goals of Agenda 2030. Leveraging the capabilities of JavaScript and React, ReShare aims to make a meaningful impact on pressing societal challenges.

## Mission

Our primary objective is to contribute to the global effort of mitigating overconsumption.

## Key Features

- **Item Sharing:** Share posts about items you're willing to lend or borrow.
- **Community Giving:** Contribute to a more sustainable lifestyle by giving away items that still have utility.
- **Reduced Overconsumption:** Encourage responsible consumption by promoting the sharing economy within local communities.

## Technologies Used

The following technologies were used in the development of ReShare:

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript): The programming language used for both front-end and back-end development.
- [MongoDB](https://www.mongodb.com/): A NoSQL database for storing and retrieving data.
- [JSON Server](https://github.com/typicode/json-server): A fake API implemented using a JSON file to simulate responses during development.
- [React-Redux](https://react-redux.js.org/): Official React bindings for Redux, a predictable state container.
- [@reduxjs/toolkit](https://redux-toolkit.js.org/): A set of utilities to reduce boilerplate in Redux logic.
- [React Router](https://reactrouter.com/): A standard library for routing in React applications.
- [react-share](https://github.com/nygardk/react-share): A React component for social media sharing functionality.
  
# Project Setup

To contribute or run this project locally, follow these steps:

1. **Fork and Clone the Repository:**
    ```bash
    git clone https://github.com/Vardagsbruket/ReShare
    cd ReShare
    ```

2. **Install Dependencies:**
    ```bash
    npm install
    ```

3. **Install Additional Dependencies:**
    ```bash
    npm install react-redux @reduxjs/toolkit react-router-dom
    ```

4. **Social Media Integration:**

  - **Installing Social Media Integration:**
        ```bash
        npm install react-share
        ```

5. **Setting Up ReShare Server:** (Choose one setup)
   
   For setting up the server, choose one of the following. But keep in mind it will come with a shortcoming of deploying the project on Netlify for the Fake API.

   1. **Setting the Fake API**
      A JSON file is used for this setup, which acts as a fake server. The POST and GET requests can be used like any other API.

      - **Installing Server Dependencies:**
        ```bash
        npm install json-server concurrently
        ```

      - **Package.json Configuration:**
        Add the following lines to your `package.json` file:
        ```json
        {
          "proxy": "http://localhost:6001",
          "scripts": {
            "server": "json-server --watch db.json --port 6001",
            "devserver": "concurrently \"npm run server\" \"npm run dev\""
          }
        }
        ```

      - **Running the Development Server:**
        ```bash
        npm run devserver
        ```

   2. **For setting up MongoDB**
      For setting up MongoDB for the project, follow the following steps:

      - Signup for a free account on MongoDB Atlas.
      - Create an M0 Shared Free cluster. Recommend choosing a location in US-East on AWS as Netlify functions are hosted there, but not an issue to choose something else.
      - Add access via a user and password. Save the password somewhere (careful to not add it to somewhere in your project where it will be publicly uploaded on Github).
      - Once the cluster is deployed, go to Network Settings. You need to allow access for all IP addresses for Netlify, not just your local IP address.
      - Go to the Database tab, click on the connect button, then VScode MongoDB. Copy the URI somewhere. Replace the full `<password>` with the one you saved.
      - Download MongoDB VScode extension.
      - Connect to MongoDB by pasting the URI you have saved and run the playground to populate the Database with a few posts.
      - Go to MongoDB Atlas, Deployment database tab, connect button, connect via MongoDB driver Node.js. Copy the URI and replace the password again.
      - Go to your Netlify account and connect your fork of the project to a site deployment.
      - Go to the Deployment settings tab and environment variables. Add 3 environment variables as follows:
        a. key: MONGODB_URI, value: The URI you have gotten for connection via Node.js driver.
        b. key: MONGODB_DATABASE, value: The name in the first use() in the playground.
        c. key: MONGODB_COLLECTION, value: posts.
      - Don’t put the quotation marks for a string when you paste the env variable on Netlify.
      - Get the siteId from the deployment setting page.
      - Paste the siteId value as a string in the `.netlify/state.json` file with “siteId” as the key.
      - Install Netlify-cli
        
         ```bash
        npm install netlify-cli --save-dev
         ```
         or
        
         ```bash
         npm install -g netlify-cli
         ```

      - **Running the Development Server:**
        
        ```bash
        npm run netlifydev
        ```
        or
         ```bash
         netlify dev
        ```
