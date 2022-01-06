import { useRef } from "react";

import { Card } from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

export function NewMeetupForm({ addNewMeetup }) {
  const titleRef = useRef();
  const imageUrlRef = useRef();
  const addressRef = useRef();
  const descriptionRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const title = titleRef.current.value;
    const image = imageUrlRef.current.value;
    const address = addressRef.current.value;
    const description = descriptionRef.current.value;
    const meetup = {
      title,
      image,
      address,
      description,
    };
    addNewMeetup(meetup);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input ref={titleRef} type="text" required id="title" />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input ref={imageUrlRef} type="url" required id="image" />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input ref={addressRef} type="text" required id="address" />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea ref={descriptionRef} rows={5} required id="description" />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
