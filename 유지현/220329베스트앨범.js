function solution(genres, plays) {
  let answer = [];
  let dic = {};
  let songs = [];
  let sortArr = [];

  for (let i = 0; i < genres.length; i++) {
    songs.push({ genre: genres[i], number: i, play: plays[i] });
    dic[genres[i]] = dic[genres[i]] ? dic[genres[i]] + plays[i] : plays[i];
  }

  for (let genre in dic) sortArr.push([genre, dic[genre]]);

  sortArr.sort((x, y) => y[1] - x[1]);

  for (let genre of sortArr) {
    let count = [];

    for (let song of songs) {
      if (song["genre"] === genre[0]) {
        count.push([song["number"], song["play"]]);
      }
    }

    count.sort((x, y) => y[1] - x[1]);
    count.length > 1
      ? answer.push(count[0][0], count[1][0])
      : answer.push(count[0][0]);
  }

  return answer;
}
