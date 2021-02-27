import { updatePostLikes } from "./posts";

export const postLike = (like) => async (dispatch) => {
  const res = await fetch(`/api/postLikes/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(like),
  });
  if (res.ok) {
    dispatch(updatePostLikes(like));
    return res;
  }
};
