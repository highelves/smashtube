"use client";

import { useState } from "react";
import type { Comment } from "@/lib/watch";

type CommentsProps = {
  initialComments: Comment[];
};

export function Comments({ initialComments }: CommentsProps) {
  const [comments, setComments] = useState(initialComments);
  const [draft, setDraft] = useState("");

  function publishComment() {
    const body = draft.trim();
    if (!body) {
      return;
    }

    setComments((current) => [
      {
        id: `local-${current.length}-${body.length}`,
        author: "You",
        body,
        postedAt: "Just now",
      },
      ...current,
    ]);
    setDraft("");
  }

  return (
    <section aria-label="Comments" className="mt-6">
      <h2 className="text-lg font-semibold">{comments.length} comments</h2>
      <form
        className="mt-4 flex gap-3"
        onSubmit={(event) => {
          event.preventDefault();
          publishComment();
        }}
      >
        <Avatar letter="Y" />
        <div className="min-w-0 flex-1">
          <label htmlFor="comment" className="sr-only">
            Add a comment
          </label>
          <textarea
            id="comment"
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            rows={2}
            placeholder="Add a comment"
            className="w-full resize-none border-b border-[#e5e5e5] bg-transparent py-1 text-sm outline-none focus:border-[#0f0f0f]"
          />
          <div className="mt-2 flex justify-end">
            <button
              type="submit"
              disabled={draft.trim().length === 0}
              className="h-9 rounded-full bg-[#0f0f0f] px-4 text-sm font-medium text-white disabled:bg-[#f2f2f2] disabled:text-[#909090]"
            >
              Comment
            </button>
          </div>
        </div>
      </form>
      <ul className="mt-4 space-y-4">
        {comments.map((comment) => (
          <li key={comment.id} className="flex gap-3">
            <Avatar letter={comment.author.slice(0, 1)} />
            <div className="min-w-0">
              <p className="text-xs text-[#0f0f0f]">
                <span className="font-semibold">{comment.author}</span>{" "}
                <span className="text-[#606060]">{comment.postedAt}</span>
              </p>
              <p className="mt-1 text-sm leading-5">{comment.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Avatar({ letter }: { letter: string }) {
  return (
    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#ef6c00] text-sm font-semibold text-white">
      {letter}
    </span>
  );
}
