/* Run `npm install @novu/node` to add novu as a dependency 
(make sure you inicialized the project by running `npm init`) */

//To  Inicialize the the CLI app by running `node app.js`

// You can find all the required credentials in your own Novu environment at https://web.novu.co/.

const readline = require('readline');
const { Novu } = require('@novu/node');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function createSubscriber(apiKey) {
    const novu = new Novu(apiKey);

    const user = {};

    // Prompt the user for subscriber details
    user.id = await askQuestion('Enter the user ID: ');
    user.email = await askQuestion('Enter the email: ');
    user.firstName = await askQuestion('Enter the first name: ');
    user.lastName = await askQuestion('Enter the last name: ');
    user.phone = await askQuestion('Enter the phone number: ');
    user.avatar = await askQuestion('Enter the avatar URL: ');
    user.locale = await askQuestion('Enter the locale: ');

    try {
        // Create the subscriber using the provided details
        await novu.subscribers.identify(user.id, {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            phone: user.phone,
            avatar: user.avatar,
            locale: user.locale,
        });
        console.log('Subscriber created successfully!');
    } catch (error) {
        console.error('Failed to create subscriber:', error);
    }
}

async function triggerNotification(apiKey, templateId, subscriberId) {
    const novu = new Novu(apiKey);

    try {
        await novu.trigger(templateId, {
            to: {
                subscriberId: subscriberId
            },
            payload: {}
        });
        console.log('Notification triggered successfully!');
    } catch (error) {
        console.error('Failed to trigger notification:', error);
    }
}

async function createTopic(apiKey) {
    const novu = new Novu(apiKey);

    const topic = {};

    // Prompt the user for topic details
    topic.key = await askQuestion('Enter the topic key: ');
    topic.name = await askQuestion('Enter the topic name: ');

    try {
        // Create the topic using the provided details
        await novu.topics.create({
            key: topic.key,
            name: topic.name,
        });
        console.log('Topic created successfully!');
    } catch (error) {
        console.error('Failed to create topic:', error);
    }
}

async function addSubscriberToTopic(apiKey) {
    const novu = new Novu(apiKey);

    const topicKey = await askQuestion('Enter the topic key: ');
    const subscriberIds = await askQuestion('Enter the subscriber IDs (comma-separated): ');
    const subscriberIdArray = subscriberIds.split(',');

    try {
        // Add the subscribers to the topic
        await novu.topics.addSubscribers(topicKey, { subscribers : subscriberIdArray });
        console.log('Subscribers added to the topic successfully!');
    } catch (error) {
        console.error('Failed to add subscribers to the topic:', error);
    }
}

async function triggerEventToTopic(apiKey) {
    const novu = new Novu(apiKey);

    const topicKey = await askQuestion('Enter the topic key: ');
    const notificationTemplateId = await askQuestion('Enter the notification template identifier: ');

    try {
        await novu.trigger(notificationTemplateId, {
            to: [{ type: 'Topic', topicKey: topicKey }],
            payload: {},
        });
        console.log('Event triggered successfully to the topic!');
    } catch (error) {
        console.error('Failed to trigger event to the topic:', error);
    }
}




function askQuestion(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

async function main() {
    const apiKey = await askQuestion('Enter your API key: ');
    const appId = await askQuestion('Enter your Application Identifier: ');

    let continueLoop = true;

    while (continueLoop) {
        const option = await askQuestion('Choose an option:\n1. Create a subscriber\n2. Trigger a notification\n3. Create a topic\n4. Add subscriber to a topic\n5. Send a notification to a topic\n6. Exit\n');

        switch (option) {
            case '1':
                await createSubscriber(apiKey);
                break;
            case '2':
                const subscriberId = await askQuestion('Enter the Subscriber ID: ');
                const templateId = await askQuestion('Enter the Notification Template ID: ');
                await triggerNotification(apiKey, templateId, subscriberId);
                break;
            case '3':
                await createTopic(apiKey);
                break;
            case '4':
                await addSubscriberToTopic(apiKey);
                break;
            case '5':
                await triggerEventToTopic(apiKey);
                break;
            case '6':
                continueLoop = false;
                break;
            default:
                console.log('Invalid option');
                break;
        }
    }

    rl.close();
}

main().catch((error) => {
    console.error('An error occurred:', error);
});
