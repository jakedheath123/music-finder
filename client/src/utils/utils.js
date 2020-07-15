export const commentCheck = array => {
  return array.filter(comment =>
    comment.text.split(" ").some(word => word.length < 10)
  );
};
