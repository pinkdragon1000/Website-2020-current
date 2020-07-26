### Sita Robinson's Website (2020-current)
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Problems with old website
* Not much reusability 
* A lot of repetitiveness in code

Technique to new website 
* Using arrays and dictionaries (objects) to hold website information.  This information is stored in the `utils/` folder under `src/`.   
* Using the map function to reduce repetitiveness of components. 


**[View the application](http://www.sitarobinson.com)**

The idea is to separate the application data from the main project structure (components).

```
┌─────────────┐     ╭────────────╮    
│ Application |     |  Project   |
|     Data    ├─────┤ Structure  |
|   (utils)   |     |(components)| 
└─────────────┘     ╰────────────╯   
```

**High Level Project Structure** 

```
 ── Website-2020-current/
    ├── public/
    ├── src/
        ├──components/
           ├──page-content/
           ├──reusable-components/
           ├──app.js 
        ├──utils/
```

**Project Dependencies.**  

Install using `npm i`.
```
"react": "^16.13.1",
"react-dom": "^16.13.1",
"react-scripts": "3.4.1",
"style-it": "^2.1.4"
```
        
**Running the application**

```
npm start
```

**Deploying the application**  

In a command line enter the command `firebase init` and select the Hosting option.  

Then run the following commands to deploy: 

```
npm run build
firebase deploy
```


