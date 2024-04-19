export default async function EventPage({ params }) {
  const uuid = params.uuid;
<<<<<<< HEAD
  console.log(uuid);
  let headerList = {
    Accept: "application/json",
    apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  };
  let response = await fetch("https://pexwboaieovroxjkczsc.supabase.co/rest/v1/events?id=eq." + uuid, {
    headers: headerList,
  });

  let data = await response.json();
  console.log(data);
  const eventInfo = data[0];

=======
  let headersList = {
    Accept: "application/json",
    apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  };
  let response = await fetch(
    "https://uwrwptibotlxlvcdeicv.supabase.co/rest/v1/events?id=eq." + uuid,
    {
      headers: headersList,
    }
  );
  let data = await response.json();
  const eventInfo = data[0];
>>>>>>> f61aaed47ee4cf1a342d1b0b67ef347113e84267
  return (
    <article>
      <h1>{eventInfo.name}</h1>
      <dl>
        <dt>Hvornår</dt>
        <dd>{eventInfo.when}</dd>
      </dl>
      <p>{eventInfo.description}</p>
    </article>
  );
}
