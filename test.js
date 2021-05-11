const testing = {
    one: 100,
    two: 'question',
    three: ['test1', 'test2', 'test3', 'test4']
};

const movies = {
    100: {
        value: 100,
        question: 'This was the first movie to gross over $1 billion at the Box Office.',
        answers: ['Titanic', 'Jurassic Park', 'Star Wars: The Phantom Menace', 'The Lord of the Rings: Return of the King'],
    }, 
    200: {
        value: 200,
        question: 'Due to his dramatic weight gain to play the role, this Batman actor was called "Fatman" by many on the set.',
        answers: ['Christian Bale', 'Michael Keaton', 'Adam West', 'George Clooney']
    },
    300: {
        value: 300,
        question: 'This film out of South Korea became the first Oscar winner for Best Picture.',
        answers: ['Parasite', 'A Taxi Driver', 'The Age of Shadows', 'Burning']
    },
    400: {
        value: 400,
        question: 'Famed and award winning actor Paul Newman made his final theatrical appearance in this Same Mendes film.',
        answers: ['Road to Perdition', 'American Beauty', 'Twilight', 'Where the Money Is']
    },
    500: {
        value: 500,
        question: 'The PG-13 film rating was created in response to outrage over scenes depicted in this 80s film.',
        answers: ['Indiana Jones and the Temple of Doom', 'Red Dawn', 'Escape From New York', 'Gremlins']
    }
};

const testRun = (category, score) => {
    console.log(movies[score].answers);
    console.log(typeof category);
    console.log(testing)
}