import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import styles from './App.module.css'
import { Grid, CardContent, Card, CardMedia, CardActionArea, CardActions, Button } from '@material-ui/core';
import coronaImage from './images/coranaImage.png'
import geopins from './images/geopins.png'
import useHotjar from 'react-use-hotjar';

const myCustomLogger = console.info;

const App = () => {

  const { initHotjar } = useHotjar();

  React.useEffect(() => {
    initHotjar(2374355, 6, myCustomLogger);
  }, [initHotjar]);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            ashokhein.me
          </Typography>
        </Toolbar>
      </AppBar>

      <div className={styles.container}>
        <Grid container spacing={3} justify="center">
            <Grid item xs={12} md={3} className={styles.card}>
            <Card className={styles.cartheight}>
                <CardActionArea>
                    <CardMedia
                    className={styles.cardmedia}
                    image={coronaImage}
                    title="COVID-19 Tracker"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        COVID-19
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Track COVID-19 statistics
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" href="https://covid19-tracker.ashokhein.me">
                    Go
                    </Button>
                </CardActions>
                </Card>
            </Grid>          
            <Grid item xs={12} md={3} className={styles.card}>
            <Card className={styles.cartheight}>
                <CardActionArea>
                <CardMedia
                    className={styles.cardmedia}
                    image={geopins}
                    title="COVID-19 Tracker"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        GEO PINS
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Multi User Realtime Geo Pins Blogging.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" href="https://geopins.ashokhein.me">
                    Go
                    </Button>
                </CardActions>
                </Card>
            </Grid>                                             
        </Grid>
      </div>
    </>
  )
}

export default App
