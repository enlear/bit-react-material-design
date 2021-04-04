import MUCard from '@material-ui/core/Card';
import MUCardActionArea from '@material-ui/core/CardActionArea';
import MUCardActions from '@material-ui/core/CardActions';
import MUCardContent from '@material-ui/core/CardContent';
import MUCardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import MUTypography from '@material-ui/core/Typography';
import React from 'react';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Components that goes to the Actions sections in the Card
   */
  actions: React.ReactNode[],
  /**
   * Title of the Card
   */
  title: string,
  /**
    * Description of the Card
    */
  description: string,
  /**
   * Card thumbnail URL
   */
  image: string,

};

export const Card = ({ title, description, image, actions, ...rest }: CardProps) => {
  const classes = useStyles();
  return (

    <MUCard className={classes.root}  {...rest}>
      <MUCardActionArea>
        <MUCardMedia
          className={classes.media}
          image={image}
          title={title}
        />
        <MUCardContent>
          <MUTypography gutterBottom variant="h5" component="h2">
            {title}
          </MUTypography>
          <MUTypography variant="body2" color="textSecondary" component="p">
            {description}
          </MUTypography>
        </MUCardContent>
      </MUCardActionArea>
      <MUCardActions>
        {actions}
      </MUCardActions>
    </MUCard>
  )
};