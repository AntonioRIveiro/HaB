/**
 * El objetivo del ejercicio es crear un nuevo array que contenga
 * todos los hashtags del array `tweets`, pero sin repetir
 * 
 * Nota: como mucho hay 2 hashtag en cada tweet
 */

const tweets = [
    'aprendiendo #javascript en  Vigo',
    'empezando el segundo módulo del bootcamp!',
    'hack a boss bootcamp vigo #javascript #codinglive']

let globalHashtags = [];

function getHastagFromTweet(tweet) {
    const DEFAULT_HASHTAG_LENGTH = 10;

    let hashtags = [];

    const positionFirstHashtag = tweet.indexOf('#');
    const positionSecondHashTag = tweet.indexOf('#', positionFirstHashtag + 1);

    if (positionFirstHashtag != -1) {
        const firstHashTag = tweet.slice(positionFirstHashtag, positionFirstHashtag + DEFAULT_HASHTAG_LENGTH + 1);
        hashtags.push(firstHashTag);
    }

    if (positionSecondHashTag != -1) {
        const secondHashTag = tweet.slice(positionSecondHashTag, positionSecondHashTag + DEFAULT_HASHTAG_LENGTH + 1);
        hashtags.push(secondHashTag);
    }

    return hashtags;
}

for (let tweet of tweets) {
    let hashtags = getHastagFromTweet(tweet);

    for (let hashtag of hashtags) {
        if (globalHashtags.indexOf(hashtag) == -1) {
            globalHashtags.push(hashtag)
        }
    }

}
console.log(`los hastag repetidos son: ${globalHashtags}`);
