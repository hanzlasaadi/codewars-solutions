// Statement
/*
Here are some classic Christmas cracker jokes.

There is a made up API URL (http://great.jokes/christmas) that you can call to a get list of Christmas jokes in JSON format.

Your challenge
Write an async function which takes an apiUrl and jokeId which returns a promise.
The data will need to be filtered to get the specified joke by id.
When you got the joke it should be accessible through a simple API of saySetup and sayPunchLine methods.
Handle error cases

If a joke can't be found throw an error message in this format new Error('No jokes found id: {jokeId}').
Getting jokes from a another API URL may return a different data shape, throw this error message new Error('No jokes at url: {url}') for an unexpected shape.
Throw error in a promise style

Info
Get the data using the mocked fetch(url) function, which implements the basics of the fetch api. Learn about fetch. Learn about async/await.

Joke data shape:

{
  jokes: [{ 
    id: 101,
    setup: "Who is Santa's favorite singer?",
    punchLine: "Elf-is Presley!"
  },
...moreJokes]
// Use for your tests ^^
*/

//Prep
/*
- fetch promise, destructure incoming data
- throw error if data not correct
- find jojke based on jokeId provided
- throw error if jokeId not correct
- return an object containing functions called 'saySetup' & 'sayPunchLine' to be called from outside
- Catch the error in catch block and throw error PROMISE style.
*/

//function explanation
async function sayJoke(apiUrl, jokeId) {
  try {
    const data = await fetch(apiUrl);
    const { jokes } = await data.json();
    if (!jokes) throw new Error(`No jokes at url: ${apiUrl}`);

    const theJoke = jokes.find((aJoke) => aJoke.id === jokeId);
    if (!theJoke) throw new Error(`No jokes found id: ${jokeId}`);

    return {
      saySetup() {
        return theJoke.setup;
      },
      sayPunchLine() {
        return theJoke.punchLine;
      },
    };
  } catch (err) {
    throw new Error(err.message);
  }
}

//jest tests
/*
// Try TDD
// See description for example test data
const asyncTime = 500;
describe('Bad Christmas jokes', asyncTime, () => {
  const url = jokesUrla
  
  // Just a starting point to test async functions
  it('say the setup line', async (done) => {
    const joke = await sayJoke(url, 101);
    Test.assertEquals(joke.saySetup(), "Who is Santa's favorite singer?");
    done();
  });
    
});
*/
