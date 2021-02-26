import { updatePostLikes } from "./posts";

export const postLike = (like) => async () => {
  // const res = await fetch(`/api/postLike/${postId}`, {
  const res = await fetch(`/api/postLikes/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(like),
  });
  // if (res.ok) {
  //   updatePostLikes(like);
  //   return res;
  // }
};
