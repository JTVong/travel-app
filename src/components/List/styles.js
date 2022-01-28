import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1), minWidth: 120, marginBottom: '30px'
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  loading: {
    height: '600px', display: 'flex', justifyContent: 'center', alignItem: 'center'
  },
  container: {
    padding: '30px'
  },
  marginBottom: {
    marginBottom: '30px'
  },
  list: {
    height: '85vh', overflow: 'auto'
  },
  card: {
    height: '20vh'
  }
}));