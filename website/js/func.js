var poolData = {
  UserPoolId: '',
  ClientId: '',
};

var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

var userData = {
  Pool: userPool,
}

function start(){
  var userName = $("#username").val();
  userData.Username = userName;
  var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
  cognitoUser.setAuthenticationFlowType('CUSTOM_AUTH');
  var AuthenticateDetails = {
    Username: userName
  }
  cognitoUser.initiateAuth(AuthenticateDetails, {
    onSuccess: function(result) {
      console.log("SUCCESS");
    },
    onFailure: function(err) {
      console.log("FAILED");
    },
    customChallenge: function(challengeParams) {
      var challengeResponses = 'RESULT';
      cognitoUser.sendCustomChallengeAnswer(challengeResponses, this);
    }
  })

}

function next(){

}