import { MeetupItem } from "./MeetupItem";
import classes from "./MeetupList.module.css";

export function MeetupList({ meetups }) {
  return (
    <ul className={classes.list}>
      {meetups.map(({ id, image, title, description, address }) => (
        <MeetupItem
          key={id}
          id={id}
          image={image}
          title={title}
          description={description}
          address={address}
        />
      ))}
    </ul>
  );
}
