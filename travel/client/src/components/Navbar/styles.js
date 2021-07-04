import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
//import { green, purple } from '@material-ui/core/colors';

//import { deepPurple } from '@material-ui/core/colors';




const theme = createMuiTheme({

  palette: {
    primary: {
      light: '#16559a',
      main: '#ad8aa8',
      dark: '#7c6aa2',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fae4ce',
      main: '#ebabab',
      dark: '#ab81a3',
      contrastText: '#000',
    },
  },
});

export default makeStyles((theme) => ({


  appBar: {
    //borderRadius: 15,
    textAlign: 'left',
    margin: '-10px 0px 50px 0px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    backgroundColor: '#ffffff',
    overflowX: 'hidden',
    position: 'sticky'
  },
  heading: {
    // color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
    align: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    color: '#193c46',
    "@media (max-width: 900px)": {
      fontSize: '20px',
    },

  },
  /*image: {
    marginLeft: '15px',
  },*/
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    margin: '0px 0px 0px 0px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    "@media (max-width: 600px)": {
      display: 'none',
    },
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'stretch',
    width: '100%',
    //align:'center',
    //alignContent:'center'
  },
  avatar: {
    color: '#000',
    backgroundColor: 'light blue',
    "@media (max-width: 600px)": {
      marginLeft: '40px',
    },
    "@media (max-width:300px)":{
      display: 'none',
    }
  },
  logout: {
    backgroundColor: theme.palette.primary,
    "@media (max-width: 600px)": {
      marginRight: '50px',
    }
    //color: theme.palette.primary.dark
  },
  home: {
    backgroundColor: theme.palette.primary,
    "@media (max-width: 600px)": {
      marginRight: '10px',
      marginLeft: '10px'
    }
    //color: theme.palette.primary.dark
  },
  signin: {
    backgroundColor: theme.palette.secondary
    //color: theme.palette.secondary.dark
  }
}));
