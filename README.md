# Novu Node.js CLI app

This is a command-line interface (CLI) app that allows you to interact with the Novu platform. The Novu platform is used for managing subscribers, triggering notifications, creating topics, and more. Before using the app, make sure you have initialized your project and installed the required dependencies.

## **Prerequisites**

- Node.js and npm should be installed on your machine.
- Run the following command to install the **`@novu/node`** package as a dependency:
    
    ```
    npm install @novu/node
    ```
    
- Make sure you have initialized your project by running **`npm init`**.

## **Usage**

To run the app, execute the following command in your terminal:

```
node app.js
```

The app will prompt you for the necessary information and guide you through the available options. You will need to provide your API key and application identifier to authenticate with the Novu environment.

## **Required Credentials**

To use the app, you need to have the following credentials:

- **API Key**: You can find your API key in your own Novu environment. Visit **[https://web.novu.co/](https://web.novu.co/)** and navigate to the appropriate section to retrieve your API key.

## **Options**

The app provides the following options:

1. **Create a subscriber**: This option allows you to create a new subscriber. You will be prompted to enter the subscriber details, including ID, email, first name, last name, phone number, avatar URL, and locale.
2. **Trigger a notification**: Use this option to trigger a notification for a specific subscriber. You will need to provide the subscriber ID and the notification template ID.
3. **Create a topic**: This option enables you to create a new topic. You will be prompted to enter the topic key and name.
4. **Add subscriber to a topic**: Use this option to add subscribers to a specific topic. Enter the topic key and a comma-separated list of subscriber IDs.
5. **Send a notification to a topic**: This option allows you to send a notification to a specific topic. Provide the topic key and the notification template identifier.
6. **Exit**: Select this option to exit the app.

**Note:** If you enter an invalid option, the app will display an error message.

## **Feedback and Issues**

If you encounter any issues or have any feedback regarding the app, please create a new issue in the **[GitHub repository](https://github.com/novuhq/nodejs-cli-app/issues)**.

Enjoy using the Novu’s Node.js CLI app!