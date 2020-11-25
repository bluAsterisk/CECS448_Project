import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import image from '../../assests/images/PenguinBWIcon.svg';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
  }));


const tileData = [
   {
     img: image,
     user: 'Jeff',
     cols: 2,
   },
   {
    img: image,
    user: 'Emily',
    cols: 2,
  },
  {
    img: image,
    user: 'Ricky',
    cols: 2,
  },
];

export default function ChatPage(){
    const classes = useStyles();
    return(
        <div>
            <GridList 
            cellHeight={160} 
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
        </div>
    )
}