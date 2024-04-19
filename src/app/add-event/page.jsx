import { redirect } from "next/navigation";
<<<<<<< HEAD

export default async function AddEventPage() {
  async function submit(formData) {
    "use server";
    let headerList = {
=======
export default async function AddEventPage() {
  async function submit(formData) {
    "use server";
    let headersList = {
>>>>>>> f61aaed47ee4cf1a342d1b0b67ef347113e84267
      Accept: "application/json",
      apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      Prefer: "return=representation",
      "Content-Type": "application/json",
    };
    let bodyContent = JSON.stringify({
      name: formData.get("name"),
      when: formData.get("when"),
      description: formData.get("description"),
    });
<<<<<<< HEAD
    let response = await fetch("https://pexwboaieovroxjkczsc.supabase.co/rest/v1/events", {
      method: "POST",
      body: bodyContent,
      headers: headerList,
    });
=======
    let response = await fetch(
      "https://uwrwptibotlxlvcdeicv.supabase.co/rest/v1/events",
      {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      }
    );
>>>>>>> f61aaed47ee4cf1a342d1b0b67ef347113e84267
    let data = await response.json();
    const id = data[0].id;
    redirect("/events/" + id);
  }
  return (
    <form action={submit}>
      <div className="formcontrol">
<<<<<<< HEAD
        <label htmlFor="form_name">Title</label>
        <input id="form_name" type="text" name="name" />
      </div>
      <div className="formcontrol">
        <label htmlFor="form_when">Hvornår</label>
        <input id="form_when" type="date" name="when" required />
=======
        <label htmlFor="form_name">Titel</label>
        <input id="form_namne" type="text" name="name" />
      </div>
      <div className="formcontrol">
        <label htmlFor="form_when">Hvornår</label>
        <input id="form_when" type="date" name="when" />
>>>>>>> f61aaed47ee4cf1a342d1b0b67ef347113e84267
      </div>
      <div className="formcontrol">
        <label htmlFor="form_description">Andet du vil sige?</label>
        <input id="form_description" type="text" name="description" />
      </div>
      <button>Gem</button>
    </form>
  );
}
