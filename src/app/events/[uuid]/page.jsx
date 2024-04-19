export default async function EventPage({ params }) {
  const uuid = params.uuid;
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
