import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  [theme.breakpoints.down('xs')]: {
    mainContainer: {
      flexDirection: 'column',
    },

  },
  appBar: {
    //borderRadius: 15,
    margin: '0px 0px 0px 0px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  heading: {
    //color: 'rgba(0,183,255, 1)',
    //color: 'black'
  },
  image: {
   marginLeft: '15px',
  },
  content:{
    marginBottom:'20px',
    minHeight: `calc(90vh - 90px)`,

  },
  appBarSearch:{
    borderRadius:4,
    marginBottom: '1rem',
    display:'flex',
    padding:'16px',
    flexDirection: 'center'
  },
  pagination:{
    borderRadius:4,
    marginTop: '1rem',
    padding:'16px',
  }
}));
