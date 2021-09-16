<p align='left'>
    <img height="150" src=https://github.com/bocacha/PI-DOGS/blob/main/client/src/images/dog.png?raw=true </img>
</p>

## Description:

Dogs Parade is a Single Page Application, builded to deliver in your screen more than 170 Dogs razes, through an intuitive and friendly User interface.
You will be able to consult every Raze Name, Image, Height, Weight, Life expectation and Raze specific behaviour characteristics, being able to filter / order your queries.
You can also create your own Dog/Raze! Just be sure to have your image ready to upload.



### Technical Description:

Dogs Parade was build developing a Server in Express, wich mount and configure a Data base through Sequelize. The stored data is then renderized on the Client side of Dogs Parade making use of React to build the necessary functional components; Redux to set your data ready in your components Global State, and CSS Styled components to bring you a pleasant view.


### API Data Management:

The Server ( or commonly known as Application Programming Interface - API ) contains:

- Models folder:
  Raza & Temperamento .js files to allow Sequelize build Data tables.
  
- Routes folder:
  An index.js file containing paths where the API will listen Client asynchronous requests like GET / POST utilizing axios.
  
- Middlewares folder:
  errorHandlers & setHeaders .js files to allow the API run smoothly.
  
- App & BD .js files where middlewares are set, and load Data base Tables relationship. 

- An .env file store Data base variables for later connection.

- An Index.js file is in charge of start the Data base, forcing it to erase all records before every run.


### Client User Interface

The Client side of Dogs Parade has the following structure:

- Actions folder:
 An index.js file that describe Action creators, instructions that will be send to Reducer. Mandatory steps to Redux store can work.
 
- Reducer folder:
  An index.js file that manage every action request to the Redux store, declaring its initial state and updating it.
  
- Store folder:
 An index.js file that contains Store configuration. Besides Redux dev tools middleware.
 
- Components folder:
  Every UI component has its place in this folder: Page, Home, Nav, Form, DogDetails & Cards. Most of the logic it's implemented here.
  
- Images folder:
  Storage of the Dog.png, the main logo of Dogs Parade. Was designed using PIXLR site, same as the background and the icon.
  
- App.js :  This file set up the url's to communicate with API, rendering each respective component according to the received path.

- Index.js : Is the file in charge of App.js render inside root tag of Index.Html; wrapping it between Provider & BrowserRouter for the Store & Links to be available in every     React component.
  
