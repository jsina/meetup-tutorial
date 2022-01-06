import { useContext } from "react";
import { MeetupList } from "../component/meetups/MeetupList";
import { FavoriteContext } from "../store/FavoriteContext";

export function Favorites() {
  const ctx = useContext(FavoriteContext);
  const meetups = ctx.favoriteMeetups;
  const { totalFavorites } = ctx;

  const content = totalFavorites ? (
    <>
      <h2>AllMeetups</h2>
      <MeetupList meetups={meetups} />
    </>
  ) : (
    <>
      <h2>There is no Favorite meetups, add one!</h2>
    </>
  );

  return <section>{content}</section>;
}
