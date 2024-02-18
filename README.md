
## YourTaskAPI.com, tu sitio de confianza para crear y manejar tus tareas.
Es un proyecto frontend que realiza peticiones a una CRUD online gratuita que aloja todas tus tareas. Si quieres crear tu propia API y hacer las peticiones con la app, solo debes cambiar el fetch y las cabeceras:

const getTasks=async ()=>{
    const res=await fetch('https://crudapi.co.uk/api/v1/tasks, //Cambias esta peticion
    {
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer jLDitAhPkgOsBUj8opMh8iq2YGs3dfU0RC72Fo8NAcw-JnePqQ"
        },
        method:"GET"
    });
    const data=await res.json();
    dispatch({
        type:'GET_TASKS',
        payload:data.items 
    })
    //console.log(data.items);
}
## Consulta la API utilizada para este proyecto aqui, es importante que si no tienes una API propia, NO CAMBIES EL TOKEN.

https://crudapi.co.uk/help/api-docs

### MIRA AQUI SI QUIERES VERLA FUNCIONAR

https://www.youtube.com/watch?v=MELoXtOcGFw

## Lee la informacion en ingles si deseas ejecutar el proyecto. NO OLVIDES CLONARLO PARA USARLO.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

