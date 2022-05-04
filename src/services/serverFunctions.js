export class defaultReq {
  constructor(score, userName, userId, playTime, playToken) {
    this.score = score;
    this.user = {
      name: userName,
      id: userId,
    };
    this.game = {
      time: playTime,
      token: playToken,
    };
  }
}

export function sendScoreToLeaderboards(score, user, game) {
  console.log(score, user, game);
  let req = new defaultReq(score, user.name, user.id, game.time, game.token);
  console.log(req);
}
