export const commentsCheck = comments => {
  return comments.filter(comment =>
    comment.text.split(" ").some(word => word.length < 10)
  );
};
