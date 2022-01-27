import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  name: {
    cursor: 'pointer'
  },
  chip: {
    margin: '5px 5px 5px 0'
  },
  subtitle: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px',
  },
  spacing: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between'
  },
  card: {
    borderRadius: '20px'
  },
  rating: {
    color: '#ff5400'
  }


}))