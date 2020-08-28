import React from "react";
import Typography from "@material-ui/core/Typography";
import { Box, Button, Popover } from "@material-ui/core";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { blue, blueGrey } from "@material-ui/core/colors";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(blue[400]),
    backgroundColor: blue[400],
    "&:hover": {
      backgroundColor: blueGrey[400],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function BoardCss() {
  const classes = useStyles();
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <ColorButton
            variant="contained"
            color="primary"
            className={classes.margin}
            {...bindTrigger(popupState)}
          >
            Game Board
          </ColorButton>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Box p={2}>
              <Typography>
                Flair Play. Sin Sacrificio, no hay resultados.
              </Typography>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
