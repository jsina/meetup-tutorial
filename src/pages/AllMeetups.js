import { useEffect, useState } from "react";
import { MeetupList } from "../component/meetups/MeetupList";

export function AllMeetups() {
  const [meetups, setMeetups] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://nextjs-tutorial-ebe8f-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const tempMeetups = [];
        for (let key in data) {
          tempMeetups.push({
            id: key,
            ...data[key],
          });
        }
        setMeetups(tempMeetups);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section>
        <h2>Loading...</h2>
      </section>
    );
  }
  return (
    <section>
      <h2>AllMeetups</h2>
      <MeetupList meetups={meetups} />
    </section>
  );
}
