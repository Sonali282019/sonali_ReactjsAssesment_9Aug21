
import React from 'react';
import { Grid,Paper, Avatar, TextField, Button} from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useHistory } from 'react-router';





export default function Login(){

    const history=useHistory();
    const paperStyle={padding :20,height:'55vh',width:280, margin:"40px auto"}
    const avatarStyle={backgroundColor:'#3f51b5'}
    const btnstyle={margin:'8px 0'}

    const onSubmitHandler = (e) => {
        history.push("/home");
      }
    
        return (
            <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}></Avatar>
                    <h2>Login</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' onClick={onSubmitHandler} variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                
            </Paper>
        </Grid>
        );
    
}
    