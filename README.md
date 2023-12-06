# Table of Contents

1. [ReShare - A Collaborative Project](#reshare---a-collaborative-project)
   - [Experience ReShare](#experience-reshare)
   - [Overview](#overview)
   - [Mission](#mission)
   - [Key Features](#key-features)

2. [Project Setup](#project-setup)
   - [Fork and Clone the Repository](#1-fork-and-clone-the-repository)
   - [Install Dependencies](#2-install-dependencies)
   - [Install Additional Dependencies](#3-install-additional-dependencies)
   - [Setting Up ReShare Server and Social Media Integration](#4-setting-up-reshare-server-and-social-media-integration)
      - [Installing Server Dependencies](#installing-server-dependencies)
      - [Package.json Configuration](#packagejson-configuration)
      - [Installing Social Media Integration](#installing-social-media-integration)
      - [Running the Development Server](#running-the-development-server)

# ReShare - A Collaborative Project

Welcome to ReShare, a collaborative effort by [Filza Saleem](https://github.com/filzasaleem), [Diana Unden](https://github.com/Vardagsbruket), and [Joona Miettinen](https://github.com/joona-3), developed as the final project for Technigo's upskill course in JavaScript and React.

## Experience ReShare

Explore the live version of ReShare [here](https://stirring-florentine-c4bb3f.netlify.app/) and witness firsthand how we're transforming the idea of ownership into a shared experience. Thank you for joining us on this journey towards a more sustainable and collaborative way of living.

## Overview

Welcome to ReShare, our final project developed during Technigo's upskill course in JavaScript and React. At the heart of ReShare is a mission aligned with Agenda 2030 – addressing societal challenges through innovative solutions. ReShare is our response to the challenge of addressing significant societal issues in line with the principles of Agenda 2030. Our collective mission was to craft a solution that contributes positively to the world, focusing on the outlined goals of Agenda 2030. Leveraging the capabilities of JavaScript and React, ReShare aims to make a meaningful impact on pressing societal challenges.

## Mission

Our primary objective is to contribute to the global effort of mitigating overconsumption. ReShare provides a platform where neighbors can connect to lend each other seldom-used items, fostering a sense of community and reducing the need for individual ownership. Examples include drilling machines, car trailers, skis, and more. The app enables users to share items they have available for lending or express their need to borrow something. Additionally, we've integrated a feature to facilitate the giving away of items that are no longer needed but still hold value.

## Key Features

- **Item Sharing:** Share posts about items you're willing to lend or borrow.
- **Community Giving:** Contribute to a more sustainable lifestyle by giving away items that still have utility.
- **Reduced Overconsumption:** Encourage responsible consumption by promoting the sharing economy within local communities.

# Project Setup

To contribute or run this project locally, follow these steps:

1. **Fork and Clone the Repository:**
    ```bash
    git clone https://github.com/Vardagsbruket/ReShare
    cd your-repo
    ```

2. **Install Dependencies:**
    ```bash
    npm install
    ```

3. **Install Additional Dependencies:**
    ```bash
    npm install react-redux
    npm install @reduxjs/toolkit
    npm install react-router-dom
    ```

4. **Setting Up ReShare Server and Social Media Integration:**

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

   - **Installing Social Media Integration:**
        ```bash
        npm install react-share
        ```

   - **Running the Development Server:**
        ```bash
        npm run devserver
        ```
