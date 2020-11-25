import React from 'react';
import Button from '@material-ui/core/Button'
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import VideocamOffOutlinedIcon from '@material-ui/icons/VideocamOffOutlined';
import PersonalVideoOutlinedIcon from '@material-ui/icons/PersonalVideoOutlined';

export default function buttons(){
    return(
        <div>
            <Button>
                <MicNoneOutlinedIcon style={{ fontSize: 50 }}/>
            </Button>
            <Button>
                <VideocamOffOutlinedIcon style={{ fontSize: 50 }}/>
            </Button>
            <Button size='xlarge'>
                <PersonalVideoOutlinedIcon style={{ fontSize: 50 }}/>
            </Button>
            <Button
                variant='contained' 
                size = "large"
                id="login" 
                color="secondary">Leave Meeting
            </Button>
        </div>
    )
}
