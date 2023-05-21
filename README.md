# **Readme Guide**

This guide provides an overview of a Node.js application that interacts with the Novu API to create subscribers and trigger notifications. Follow the instructions below to set up and run the application.

## **Prerequisites**

Before running the application, make sure you have the following prerequisites installed:

- Node.js (version 12 or higher)
- NPM (Node Package Manager)

## **Installation**

1. Clone the repository or download the source code files.
2. Open a terminal or command prompt and navigate to the project directory.
3. Install the dependencies by running the following command:
    
    ```
    npm install
    
    ```
4. Inicialize the the CLI app by running the following:
    ```
    node app.js
    
    ```

## **Configuration**

Before running the application, you need to provide your API key and application identifier.


1. Open the **`app.js`** file in a text editor.
2. Locate the following lines:
    
    ```
    javascriptCopy code
    const apiKey = await askQuestion('Enter your API key: ');
    const appId = await askQuestion('Enter your Application Identifier: ');
    
    ```
    
3. Replace **`Enter your API key`** with your Novu API key and **`Enter your Application Identifier`** with your application identifier.

## **Usage**

To use the application, follow these steps:

1. Open a terminal or command prompt and navigate to the project directory.
2. Run the following command to start the application:
    
    ```
    Copy code
    node index.js
    
    ```
    
3. The application will prompt you to choose an option:
    - Enter **`1`** to create a subscriber.
    - Enter **`2`** to trigger a notification.
    - Enter **`3`** to exit the application.
4. If you choose option **`1`** to create a subscriber, the application will prompt you to enter the subscriber details such as user ID, email, first name, last name, phone number, avatar URL, and locale. Provide the requested information as prompted.
5. If you choose option **`2`** to trigger a notification, the application will prompt you to enter the subscriber ID and the notification template ID. Enter the corresponding IDs as prompted.
6. Continue using the application by selecting appropriate options until you choose option **`3`** to exit.

## **Error Handling**

If an error occurs during the execution of the application, an error message will be displayed in the console. Check the error message for more details about the issue.

## **Additional Information**

- This application uses the **`@novu/node`** package to interact with the Novu API. Make sure you have installed the package dependencies as mentioned in the installation steps.
- The **`askQuestion`** function is used to prompt the user for input and returns the user's response as a promise.
- The **`rl.close()`** function is called to close the readline interface and terminate the application.

## **Support**

For any issues or questions, please contact **[Novu support on discord](https://discord.gg/novu)** or refer to the Novu documentation for further assistance.