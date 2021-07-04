import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
   // backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '5px',
    maxHeight: '100%',
    position: 'relative',
    width: '100%',
   //maxWidth: '700px',
    
  },
  readMore:{
//alignItems:'right',
//display: 'flex',
margin: '5px 0 0 300px'

  },
  heading: {
    //fontSize: theme.typography.pxToRem(15),
    flexBasis: '85%',
    flexShrink: 0,
  },
  secondaryHeading: {
    //fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    marginTop:'5px'
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px'
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop:'10px'
  },
  postmsg:{
    whiteSpace: 'pre-line',
  },
}));

export default useStyles;