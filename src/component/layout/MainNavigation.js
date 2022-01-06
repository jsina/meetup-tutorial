import { useContext } from "react";
import { Link } from "react-router-dom";

import { FavoriteContext } from "../../store/FavoriteContext";
import classes from "./MainNavigation.module.css";

export function MainNavigation() {
  const ctx = useContext(FavoriteContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetup</div>
      <ul>
        <li>
          <Link to="/">All Meetups</Link>
        </li>
        <li>
          <Link to="/new-meetup">Add New Meetups</Link>
        </li>
        <li>
          <Link to="/favorites">
            Favorite <span className={classes.badge}>{ctx.totalFavorites}</span>
          </Link>
        </li>
      </ul>
    </header>
  );
}
