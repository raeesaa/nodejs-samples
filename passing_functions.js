function say(word)
{
	console.log(word);
}

function execute(someFunction, word)
{
	someFunction(word);
}

execute(say, "Hello");