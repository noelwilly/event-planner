import AddComment from "@/app/components/AddComment";

export default async function EventPage({ params }) {
  const uuid = params.uuid;
  let headerList = {
    Accept: "application/json",
    apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  };
  const response = await fetch("https://pexwboaieovroxjkczsc.supabase.co/rest/v1/events?id=eq." + uuid, {
    headers: headerList,
  });

  const data = await response.json();

  const eventInfo = data[0];

  const responseComments = await fetch("https://pexwboaieovroxjkczsc.supabase.co/rest/v1/events_id=eq." + uuid, {
    headers: headerList,
  });

  const comments = await responseComments.json();
  console.log(comments);

  return (
    <article>
      <h1>{eventInfo.name}</h1>
      <dl>
        <dt>Hvornår</dt>
        <dd>{eventInfo.when}</dd>
      </dl>
      <p>{eventInfo.description}</p>
      <section>
        <h2>Kommentarer</h2>
        {comments.map((c) => (
          <div key={c.id}>
            <h3>{c.name}</h3>
            <p>{c.comment}</p>
          </div>
        ))}
        <AddComment uuid={uuid}></AddComment>
      </section>
    </article>
  );
}
