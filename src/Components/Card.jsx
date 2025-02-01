import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  transform: (props) => (props.expand ? "rotate(180deg)" : "rotate(0deg)"),
}));

export default function RecipeReviewCard({
  title,
  date,
  image,
  description,
  isExpanded,
  onExpandClick,
  onFavoriteClick,
  isFavorite,
  onShareClick,
  onMoreClick,
}) {
  return (
    <Card
      sx={{
        width: 345,
        height: 450, 
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            C
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={onMoreClick}>
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={date}
      />
      <CardMedia
        component="img"
        sx={{ height: 200, objectFit: "cover" }} 
        image={image}
        alt="chat image"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ padding: 1 }}>
        <IconButton
          aria-label="add to favorites"
          onClick={onFavoriteClick}
          sx={{ color: isFavorite ? red[500] : "inherit" }}
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" onClick={onShareClick}>
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={isExpanded}
          onClick={onExpandClick}
          aria-expanded={isExpanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
    </Card>
  );
}
