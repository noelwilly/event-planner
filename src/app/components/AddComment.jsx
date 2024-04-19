"use client";
import { useState } from "react";

export default function AddComment(uuid) {
  const [userComments, setUserComments] = useState([]);
  async function submit(e) {
    e.preventDefault();
    const FormData = new FormData(e.target);
    const headerList = {
      Accept: "application/json",
      apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      Prefer: "return=representation",
      "Content-Type": "application/json",
    };
    const bodyContent = JSON.stringify({
      name: formData.get("name"),
      comment: formData.get("comment"),
      event_id: uuid,
    });
    const response = await fetch("https://pexwboaieovroxjkczsc.supabase.co/rest/v1/events_comments", {
      method: "POST",
      body: bodyContent,
      headers: headerList,
    });

    const newComment = await response.json();
    setUserComments((currentComments) => currentComments.concat(newComment[0]));
  }
  return (
    <form onSubmit={submit}>
      <input type="text" name="name" />
      <textarea name="comment"></textarea>
      <button>Send NU</button>
    </form>
  );
}
