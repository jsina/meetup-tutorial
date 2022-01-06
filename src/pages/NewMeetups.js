import { NewMeetupForm } from "../component/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";
export function NewMeetups() {
  let navigate = useNavigate();

  async function addNewMeetupHandler(meetup) {
    await fetch(
      "https://nextjs-tutorial-ebe8f-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      {
        body: JSON.stringify(meetup),
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
      }
    );
    navigate("/");
  }
  return <NewMeetupForm addNewMeetup={addNewMeetupHandler} />;
}
