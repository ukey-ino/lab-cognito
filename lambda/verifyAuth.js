exports.handler = async (event, context, callback) => {
  console.log("verify Auth START.");

  if (event.request.challengeAnswer) {
    event.response.answerCorrect = true;
  } else {
    event.response.answerCorrect = false;
  }

  console.log("verify Auth END.")

  callback(null, event);
}