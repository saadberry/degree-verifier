import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
  header: {
    marginBottom: theme.spacing(1),
  },
  userContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.2)',
    borderRadius: '5px',
  },
  link: {
    marginTop: theme.spacing(1),
  },
}));

function GetStudents() {
  const classes = useStyles();
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get('http://localhost:8000/users');
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.header}>
        Student List
      </Typography>
      {users.map((user) => (
        <Paper className={classes.userContainer} key={user._id}>
          <Typography variant="h4" component="h4" style={{ fontWeight: 'bold' }}>
            {user.name} {user.LastName}
          </Typography>
          <Typography variant="body1">Student ID: {user.rollnumber}</Typography>
          <Typography variant="body1">Email: {user.email}</Typography>
          <Typography variant="body1">Batch: {user.batch}</Typography>
          <Typography variant="body1">Degree Verified: {user.isVerified ? "True" : "False"} </Typography>
          <Typography variant="body1" className={classes.link}>
            Degree link:{' '}
            {user.url ? (
              <Link href={user.url}>{user.url}</Link>
            ) : (
              'Degree not uploaded yet'
            )}
          </Typography>
        </Paper>
      ))}
    </div>
  );
}

export default GetStudents;
