

export const commentLike = (like) => async () => {
  const res = await fetch(`/api/commentLikes/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(like),
  });
  if (res.ok) {

    return res;
  }
};
