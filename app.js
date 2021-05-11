// Establishing global variable for play
let playerScore = 0;
let category = '';
let value = 0;

// Creating variables to use for event listeners and choices
const qCard = document.querySelector('#qCard');
const qText = document.querySelector('#qText');
const scoreBoard = document.querySelector('.scoreBoard');
const choice1 = document.querySelector('#choice_1');
const choice2 = document.querySelector('#choice_2');
const choice3 = document.querySelector('#choice_3');
const choice4 = document.querySelector('#choice_4');


// Object of questions, answers, and point values for the game board
const qAndA = {

    movies: {
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
            question: 'This film out of South Korea became the first foreign language Oscar winner for Best Picture.',
            answers: ['Parasite', 'A Taxi Driver', 'The Age of Shadows', 'Burning']
        },
        400: {
            value: 400,
            question: 'Famed and award winning actor Paul Newman made his final theatrical appearance in this Sam Mendes film.',
            answers: ['Road to Perdition', 'American Beauty', 'Twilight', 'Where the Money Is']
        },
        500: {
            value: 500,
            question: 'The PG-13 film rating was created in response to outrage over scenes depicted in this 80s film.',
            answers: ['Indiana Jones and the Temple of Doom', 'Red Dawn', 'Escape From New York', 'Gremlins']
        }
    },

    filmLit: {
        100: {
            value: 100,
            question: 'Famously rejected by nearly half a dozen publishing houses, this author went on to become the wealthiest woman in England.',
            answers: ['J.K. Rowling', 'Virginia Woolf', 'Agatha Christie', 'P.D. James']
        }, 
        200: {
            value: 200,
            question: 'In 1988, she scored her first #1 bestseller with "Queen of the Damned", the third novel of her Vampire Chronicles.',
            answers: ['Anne Rice', 'Laurell K. Hamilton', 'Nancy Collins', 'Nancy Baker']
        }, 
        300: {
            value: 300,
            question: 'Like Michael Chrichton, Arthur Conan Doyle wrote a thriller with this title about a land inhabited by dinosaurs.',
            answers: ['The Lost World', 'Land of the Lost', 'Jurassic Park', 'Prey']
        }, 
        400: {
            value: 400,
            question: '"The Last of the Mohicans" takes place against the backdrop of this 18th century war.',
            answers: ['The French and Indian War', 'The War of 1812', 'Seven Years\'s War', 'The American Revolution']
        }, 
        500: {
            value: 500,
            question: 'Brian Garfield\'s wife had her purse stolen, so Brian wrote this novel about a vigilante whose wife has been murdered.',
            answers: ['Death Wish', 'The Fugitive', 'My Wife\'s Murder', 'Gone Girl']
        }
    },

    elements: {
        100: {
            value: 100,
            question: 'While the most abundant element in the universe, this element does not appear naturally on Earth.',
            answers: ['Hydrogen', 'Helium', 'Lithium', 'Berylium']
        }, 
        200: {
            value: 200,
            question: 'The father of the modern periodic table, he famously designed it based on a love of Solitaire.',
            answers: ['Mendeleev', 'Moseley', '', '']
        }, 
        300: {
            value: 300,
            question: 'The creator of the Periodic Table incorrectly stated this family of elements did not exist.',
            answers: ['The Noble Gases', 'Alkali Metals', 'Halogens', 'Silicons']
        }, 
        400: {
            value: 400,
            question: 'This is the term for the various forms of a single element.',
            answers: ['Allotrope', 'Compound', 'Ion', 'Molecule']
        }, 
        500: {
            value: 500,
            question: 'This atomic number was theorized by Richard Feynman to be the theoretical limit of the periodic table.',
            answers: ['137', '124', '142', '121']
        }
    },

    legos: {
        100: {
            value: 100,
            question: 'A carpenter, Ole Kirk Christiansen, founded Lego in the 1930s to make wooden toys; he coined the company name from the words "leg godt", "play well" in this, his native language',
            answers: ['Danish', 'Dutch', 'German', 'Finnish']
        }, 
        200: {
            value: 200,
            question: 'Popular sets from the building series include such landmarks as Big Ben, the Eiffel Tower, and this World Heritage Site and masterpiece of Indian culture.',
            answers: ['The Taj Mahal', 'Angkar Wot', 'Dilwara Temple', 'The Sun Temple']
        }, 
        300: {
            value: 300,
            question: 'In 2016 NASA\'s Juno probe completed its 5-year voyage to Jupiter; on board is a minifigure of this 17th century Italian, telescope in hand.',
            answers: ['Galileo', 'Schiparelli', 'Cassini', 'Giaconni']
        }, 
        400: {
            value: 400,
            question: 'In 2015, Lego Group inaugurated its own off-shore wind farm & every employee was given a model wind farm kit, symbolizing the company\'s goal of being 100% based on this type of energy by 2020.',
            answers: ['renewable', 'wind', 'solar', 'green']
        }, 
        500: {
            value: 500,
            question: 'The Mindstorms construction kit, which allows children to build & program their own robotic devices, grew out of the company\'s longstanding partnership with the famous Media Lab of this Cambridge, Massachusetts school.',
            answers: ['MIT', 'Harvard', 'Boston University', 'Carnegie Mellon']
        }
    },

    brandNames: {
        100: {
            value: 100,
            question: 'Due to lawsuits, in the 1940s Pinesol had to change its name to Pine-sol to avoid confusion with this other cleaning brand.',
            answers: ['Lysol', 'Pine Fresh', 'Cleansol', 'Clorox']
        }, 
        200: {
            value: 200,
            question: 'Crepe paper filters used in gas masks during World War 1 evolved into this brand of tissue.',
            answers: ['Kleenex', 'Puffs', 'Charmin', 'Cottonelle']
        }, 
        300: {
            value: 300,
            question: 'Launched nationally in 1953, this wrap that clings to leftovers was Dow Chemical\'s first consumer product.',
            answers: ['Saran Wrap', 'Cling Wrap', 'Plastic Wrap', 'Reynolds Wrap']
        }, 
        400: {
            value: 400,
            question: 'In 1958 this credit card began as BankAmericard when cards with a $500 limit were sent out as an experiment.',
            answers: ['Visa', 'American Express', 'MasterCard', 'Discover']
        }, 
        500: {
            value: 500,
            question: 'The strawberry flavor of this 5-letter Coca-Cola brand is a favorite spirit offering at shrines in Thailand.',
            answers: ['Fanta', 'Barq\'s', 'Costa', 'Chico']
        }
    },

    astronomy: {
        100: {
            value: 100,
            question: 'On this planet named for a king amongst gods, the largest circular storm in our solar system takes place.',
            answers: ['Jupiter', 'Saturn', 'Neptune', 'Venus']
        }, 
        200: {
            value: 200,
            question: 'This is the largest asteroid known to exist.',
            answers: ['Ceres', 'Vesta', 'Icarus', 'Eros']
        }, 
        300: {
            value: 300,
            question: 'This was the first spacecraft to life a human beign into space.',
            answers: ['Vostok 1', 'Sputnik', 'Luna 1', 'Mercury 3']
        }, 
        400: {
            value: 400,
            question: 'This astronomer challenged the understanding of science and theologians when he published "On the Revolutions of the Heavenly Spheres".',
            answers: ['Copernicus', 'Galileo', 'Euclid', 'Kepler']
        }, 
        500: {
            value: 500,
            question: 'This refers to the time period between two successive occurenes of a specific type of alignment between a planet, or one of its moons, with the Sun and the Earth.',
            answers: ['Synodic Period', 'Conjunction', 'Sidereal Period', 'Aphelion']
        }
    }
};

/* This function displays the modal card with question and answer choices when a category and value has been selected.  It turns on the modal view, then injects the text of the question and builds a temporary array for the answers so they can be randomized while maintaining original syntax. */
const showQuestion = (category, value) => {
    qCard.style.display = 'block';
    qText.innerText = qAndA[category][value].question;
    let randAnswerArray = [];
    let tempArray = [qAndA[category][value].answers[0], qAndA[category][value].answers[1], qAndA[category][value].answers[2], qAndA[category][value].answers[3]];
    for (let i = 0; i < 4; i ++) {
        let randChoice = Math.floor(Math.random() * tempArray.length);
        randAnswerArray.push(tempArray[randChoice]);
        tempArray.splice(randChoice, 1);
    }
    choice1.innerText = randAnswerArray[0];
    choice1.setAttribute('category', category);
    choice1.setAttribute('value', value);
    choice2.innerText = randAnswerArray[1];
    choice2.setAttribute('category', category);
    choice2.setAttribute('value', value);
    choice3.innerText = randAnswerArray[2];
    choice3.setAttribute('category', category);
    choice3.setAttribute('value', value);
    choice4.innerText = randAnswerArray[3];
    choice4.setAttribute('category', category);
    choice4.setAttribute('value', value);

}

/* Turns the modal card back off to redisplay the game board */
const answerQuestion = (e) => {
    qCard.style.display = 'none';
    console.log(e.currentTarget);
    category = e.currentTarget.getAttribute('category');
    value = e.currentTarget.getAttribute('value');
    console.log(category);
    console.log(value);
    if (e.currentTarget.innerText === qAndA[category][value].answers[0]) {
        alert('Correct!');
        playerScore += qAndA[category][value].value;
    } else {
        alert('Sorry, we were looking for ' + qAndA[category][value].answers[0])
    }
    
    updateScore();
}

// Function updates player score on board screen
const updateScore = () => {
    if (playerScore >= 6300) {
        alert('Congratulation!  You\'ve managed to get enough points to win!');
    }
    scoreBoard.innerText = 'Current Score: ' + playerScore;
}

/* Creates an event listener on all question spaces of the board that will activate the showQuestion funciton */
// document.querySelectorAll('.qButtons').forEach(question => question.addEventListener('click', showQuestion));

/* Creates event listener on the answer choices for answering the questions */
document.querySelectorAll('.aButtons').forEach(playerAnswer => playerAnswer.addEventListener('click', answerQuestion));