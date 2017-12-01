import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
function main()
{
    let muiTheme = getMuiTheme({
        fontFamily: 'Segoe UI',
        palette: {
            canvasColor: "rgba(100, 100, 150, 0.25)",
        }
    });
    ReactDOM.render(<MuiThemeProvider muiTheme={muiTheme}><App /></MuiThemeProvider>, document.getElementById("main"));
}
main();