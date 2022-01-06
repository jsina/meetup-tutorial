import { useContext } from "react";
import { Card } from "../ui/Card";
import { FavoriteContext } from "../../store/FavoriteContext";
import classes from "./MeetupItems.module.css";

export function MeetupItem({ id, image, title, description, address }) {
  const ctx = useContext(FavoriteContext);

  const isFavorite = ctx.isFavorite(id);

  function addFavoriteHandler() {
    if (isFavorite) {
      ctx.removeFavorite(id);
    } else {
      ctx.addFavorites({
        id,
        image,
        title,
        description,
        address,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div>
          <img className={classes.image} src={image} alt="" />
        </div>
        <div className={classes.content}>
          <h2>{title}</h2>
          <p>{description}</p>
          <address>{address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={addFavoriteHandler}>
            {isFavorite ? `remove favorite` : `Add to favorites`}
          </button>
        </div>
      </Card>
    </li>
  );
}
