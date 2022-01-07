# InventoryApplication
An inventory application made for the shopify backend challenge

## Setting up the Application

Please make sure that you meet the following requirements before continuing the setup of the application:

- Must: Have Node.js and NPM installed, you can do so here: https://nodejs.org/en/download/
- Must: Have a MongoDB account, you can sign up for free here: https://www.mongodb.com/cloud/atlas/register
- Optional: Have a code editor installed, you can download one here: https://code.visualstudio.com/download
- Preferred: If possible, use a windows machine as the commands that I will specify works for windows

Once you have met these requirements, go here https://account.mongodb.com/account/login and login to your MongoDB account. Make sure you are under the 'Atlas' tab. Click 'Create a Database', you may also see 'Create a Cluster' or just 'Create'.

<img width="829" alt="image" src="https://user-images.githubusercontent.com/67477587/148616587-1cded469-3a36-4057-9d68-6108acd0b42d.png">

The database can have the following specifications:
 - Cloud Provider: aws
 - Region: Any region with 'Free Tier' is ok

Click create. Now on the left tab, click 'Database Access' and create a new user:
- Enter a username and password that you will remember
- Select read and write to any database

Next, under 'Network Access', click 'Allow Access from Anywhere' and confirm. Navigate back to your database/cluster and wait for it to be ready. Once it is ready, click 'Connect'

<img width="781" alt="image" src="https://user-images.githubusercontent.com/67477587/148617123-71a7d78c-1069-44b7-a022-dea1155fdc34.png">
 
 Select 'Connect Your Application'
 
 <img width="523" alt="image" src="https://user-images.githubusercontent.com/67477587/148617207-aca98423-7dc3-404d-9fe4-d0fb92d37478.png">

Under select your driver version, choose 'Node.js' as your Driver and '3.0 or later' as your Version. Copy the connection string that will be underneath the previous step.

<img width="523" alt="image" src="https://user-images.githubusercontent.com/67477587/148617441-08d4d538-3f72-442d-a1d4-cb5beda1d92e.png">

Insert your password and username where it says to, you will need this string later. Download the code on this repository by clicking Code and Download as Zip
<img width="669" alt="image" src="https://user-images.githubusercontent.com/67477587/148617998-710e9db9-e328-4dc0-831b-86faced40365.png">

Extract the contents and store the files in a location that is easy to access on your computer, preferably a file path with no spaces. In your file directory, click on the backend folder and open the .env file. This can be done with any text editor or with the code editor if you installed one earlier, like notepad on windows or Text Edit on Apple. 

<img width="175" alt="image" src="https://user-images.githubusercontent.com/67477587/148618263-b9bc61c5-f0b2-49ed-b5f5-6af5eda4fe4b.png">

Where it says DATABASE="...." copy in your connection url you generated earlier replacing the content between the quotation marks (do not delete the quotation marks). This should be the only file you need to change.

Next open up your command line interface, in an Apple laptop/desktop, this is known as the terminal. In your command line/terminal, navigate to the frontend directory and type in the following command: ```npm install``` is this does not work, run: ```npm install --force```. If you are unfamiliar with how to use your command line/terminal, you can learn how to here for a windows command line: https://www.makeuseof.com/tag/a-beginners-guide-to-the-windows-command-line/ and here for Apple's terminal: https://macpaw.com/how-to/use-terminal-on-mac. You should really only need 2 commands, ```npm install``` as I have described earlier and ```cd``` to change directories.

Once you have run npm install in the frontend folder, do the same under the backend folder. Ie. you should do this: ```...some file path...\frontend> npm install``` hit enter and ```...some file path...\backend> npm install``` hit enter.

Next, go to the frontend directory and run a new command as follows, ```npm start```. A window should pop up in your browser. To start the backend of the application. Open up a new terminal/command line interface and navigate to the back end directory. Then run one of the two following commands: ```npm start``` or ```npm run dev```.

The server should start in a few seconds and the application will be fully functional!

