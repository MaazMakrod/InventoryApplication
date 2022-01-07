# InventoryApplication
An inventory application made for the shopify backend challenge

## Setting up the Application

Please make sure that you meet the following requirements before continuing the setup of the application:

- Have Node.js and NPM installed, you can do so here: https://nodejs.org/en/download/
- Have a MongoDB account, you can sign up for free here: https://www.mongodb.com/cloud/atlas/register
- Have a code editor installed, you can download one here: https://code.visualstudio.com/download
- If possible, use a windows machine as the commands that I will specify works for windows

Once you have met these requirements, go here https://account.mongodb.com/account/login and login to your MongoDB account. Make sure you are under the 'Atlas' tab. Click 'Create a Database', you may also see 'Create a Cluster' or just 'Create'.

<img width="829" alt="image" src="https://user-images.githubusercontent.com/67477587/148616587-1cded469-3a36-4057-9d68-6108acd0b42d.png">

The database can have the following specifications:
 - Cloud Provider: aws
 - Region: Any region with 'Free Tier' is ok

Click create. Now on the left tab, click 'Database Access' and create a new user:
- Enter a username and password that you will remember
- Select read and write to any database

Next, under 'Network Access', click 'Allow Access from Anywhere' and confirm. Navigate ack to your database/cluster and wait for it to be ready. Once it is ready, click 'Connect'

<img width="781" alt="image" src="https://user-images.githubusercontent.com/67477587/148617123-71a7d78c-1069-44b7-a022-dea1155fdc34.png">
 
 Select 'Connect Your Application'
 
 <img width="523" alt="image" src="https://user-images.githubusercontent.com/67477587/148617207-aca98423-7dc3-404d-9fe4-d0fb92d37478.png">

Under select your driver version, choose 'Node.js' as your Driver and '3.0 or later' as your Version. Copy the connection string that will be underneath the previous step.

<img width="523" alt="image" src="https://user-images.githubusercontent.com/67477587/148617441-08d4d538-3f72-442d-a1d4-cb5beda1d92e.png">

Insert your password and username where it says to, you will need this string later.

