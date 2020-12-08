import React from 'react';
import Header from '../Header/Header'
import Buttons from './Buttons'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import image from '../../assests/images/PenguinBWIcon.svg';
import {withAuthorization} from '../Session'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 1080,
      height: 720,
    },
  }));


const tileData = [
   {
     img: image,
     user: 'Jeff',
     cols: 3,
   },
   {
    img: image,
    user: 'Emily',
    cols: 1,
  },
  {
    img: image,
    user: 'Ricky',
    cols: 1,
  },{
    img: image,
    user: 'Becky',
    cols: 1,
  },
];

const condition = authUser => !!authUser;

function ChatPage(){
    const classes = useStyles();
    return(
        <div>
            <Header />
            <Grid container 
                justify ='center' 
                alignItems="center" 
                style={{ minHeight: '100vh' }}>
                <Grid item>
                    <GridList 
                    cellHeight={300} 
                    className={classes.gridList} 
                    cols={3}>
                    {tileData.map((tile) => (
                        <GridListTile key={tile.img} cols={tile.cols || 1}>
                            <img src={tile.img} alt={tile.title} />
                            <GridListTileBar 
                            title={tile.user}
                            />
                        </GridListTile>
                        ))}
                    </GridList>
                    <Buttons />
                </Grid>
            </Grid>
        </div>
    )
}


export default withAuthorization(condition)(ChatPage);