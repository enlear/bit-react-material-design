import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MUAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }),
);

export interface AppbarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Title for the header bar
   */
  title?: string
};

export const Appbar = ({ title, ...rest }: AppbarProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root} {...rest}>
      <MUAppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            {title}
          </Typography>
        </Toolbar>
      </MUAppBar>
    </div>
  )
};