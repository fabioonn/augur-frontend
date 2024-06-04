import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  card: {
    margin: '16px',
  },
});

const DistributorCard = ({ distributor }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="div">
          {distributor.name}
        </Typography>
        <Typography color="textSecondary">
          Shipped Last Month: {distributor.lastMonthShipped}
        </Typography>
        <Typography color="textSecondary">
          Forecasted to Ship: {distributor.forecastedShipped}
        </Typography>
        <Typography color="textSecondary">
          Year-to-Date Average: {distributor.yearToDateAvg}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DistributorCard;
