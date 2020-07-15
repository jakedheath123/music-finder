export const commentsCheck = comments => {
  return comments.filter(comment =>
    comment.text.split(" ").every(word => word.length < 10)
  );
};
