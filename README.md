# DarwinIA Connector Service

This is the connector service for DarwinIA, a Node.js service built using TypeScript. The service acts as an interface with Telegram to verify users from a whitelist and forward their messages for further processing. The service is part of a larger chatbot integration, connecting with a Bot Service via Flask and PostgreSQL.

## Table of Contents

- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [License](#license)

## Project Structure

The project follows a modular architecture pattern, organized into the following main directories:

- **application**: Contains the use cases of the connector service.
- **domain**: Includes domain entities and ports for communication between layers.
- **infrastructure**: Adapters and controllers that handle the communication with external services like Telegram.

### Key Files and Directories:

- `src/application/use-cases`: Core logic of the service.
- `src/domain/entities`: Definitions of the domain models.
- `src/domain/ports`: Interface ports for communication with other services.
- `src/infrastructure/adapters`: Adapters for interacting with external APIs (Telegram).
- `src/infrastructure/controllers`: Controllers to handle incoming requests and orchestrate the flow.
- `index.ts`: Main entry point of the application.

## Installation

To install and run the service locally, ensure you have Node.js and npm installed, then follow these steps:


# Clone the repository
```git clone https://github.com/your-username/darwinIA-connector-service.git```

# Navigate to the project directory
`cd darwinIA-connector-service`

# Install the dependencies
` npm install `

# Environment Variables
The service requires several environment variables to be set. You can find an example in the .env.example file.

## Variable	Description
```
DATABASE_URL	URL for the PostgreSQL database
TELEGRAM_API_TOKEN	Token for connecting to the Telegram bot
WHITELIST_USERS	Comma-separated list of Telegram user IDs to verify
API_URL	URL for the API the bot will connect to
 ``` 
Create a .env file in the root of your project:

`cp .env.example .env`
Update the .env file with your configuration.

Running the Application
After setting up your environment variables, you can start the application in development mode with:


`npm run dev`
To build the application for production:


`npm run build `
`npm start `


# License
This project is licensed under the MIT License. See the LICENSE file for details.
