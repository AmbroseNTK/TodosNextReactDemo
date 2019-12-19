import { Card, Typography, makeStyles, CardActionArea, CardMedia, CardContent } from '@material-ui/core';

const useClasses = makeStyles({
    card: {
        width: "90vw"
    },
    media: {
        height: 100
    }
});

export default function about() {
    const classes = useClasses();
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Mimemo Todo App
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        This app demostrates how to build a simple app with Next.js.
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Author: Kiet Nguyen Tuan
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
