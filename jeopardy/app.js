

// Establishing global variable for play
let playerScore = 0;
let category = '';
let value = 0;

// Creating variables to use for event listeners and choices
const qCard = document.querySelector('#qCard');
const qText = document.querySelector('#qText');
const scoreBoard = document.querySelector('.scoreBoard');
const title = document.querySelector('h1');
const choice1 = document.querySelector('#choice_1');
const choice2 = document.querySelector('#choice_2');
const choice3 = document.querySelector('#choice_3');
const choice4 = document.querySelector('#choice_4');


// Array to randomize responses on correct answers
const affirmations = [' smarty-pants.', ' wisenheimer.', ' aren\'t you smart.', ' how\'d you know that?', ' that wasn\'t easy!', ' you made that look easy.', ' do I need to make this harder?'];

const beginAgain = ['Let\'s start from the beginning, shall we?', 'Let\'s start at the very beginning, a very good place to start...', 'How do you feel about starting over?', 'If we start over, I bet you can do better'];

// Object of questions, answers, and point values for the game board
const qAndA = {

    movies: {
        100: {
            value: 100,
            question: 'This was the first movie to gross over $1 billion at the Box Office.',
            answers: ['Titanic', 'Jurassic Park', 'Star Wars: The Phantom Menace', 'The Lord of the Rings: Return of the King'],
            answered: false,
        }, 
        200: {
            value: 200,
            question: 'Due to his dramatic weight gain to play the role, this Batman actor was called "Fatman" by many on the set.',
            answers: ['Christian Bale', 'Michael Keaton', 'Adam West', 'George Clooney'],
            answered: false,
        },
        300: {
            value: 300,
            question: 'This film out of South Korea became the first foreign language Oscar winner for Best Picture.',
            answers: ['Parasite', 'A Taxi Driver', 'The Age of Shadows', 'Burning'],
            answered: false,
        },
        400: {
            value: 400,
            question: 'Famed and award winning actor Paul Newman made his final theatrical appearance in this Sam Mendes film.',
            answers: ['Road to Perdition', 'American Beauty', 'Twilight', 'Where the Money Is'],
            answered: false,
        },
        500: {
            value: 500,
            question: 'The PG-13 film rating was created in response to outrage over scenes depicted in this 80s film.',
            answers: ['Indiana Jones and the Temple of Doom', 'Red Dawn', 'Escape From New York', 'Gremlins'],
            answered: false,
        }
    },

    filmLit: {
        100: {
            value: 100,
            question: 'Famously rejected by nearly half a dozen publishing houses, this author went on to become the wealthiest woman in England.',
            answers: ['J.K. Rowling', 'Virginia Woolf', 'Agatha Christie', 'P.D. James'],
            answered: false,
        }, 
        200: {
            value: 200,
            question: 'In 1988, she scored her first #1 bestseller with "Queen of the Damned", the third novel of her Vampire Chronicles.',
            answers: ['Anne Rice', 'Laurell K. Hamilton', 'Nancy Collins', 'Nancy Baker'],
            answered: false,
        }, 
        300: {
            value: 300,
            question: 'Like Michael Chrichton, Arthur Conan Doyle wrote a thriller with this title about a land inhabited by dinosaurs.',
            answers: ['The Lost World', 'Land of the Lost', 'Jurassic Park', 'Prey'],
            answered: false,
        }, 
        400: {
            value: 400,
            question: '"The Last of the Mohicans" takes place against the backdrop of this 18th century war.',
            answers: ['The French and Indian War', 'The War of 1812', 'Seven Years\'s War', 'The American Revolution'],
            answered: false,
        }, 
        500: {
            value: 500,
            question: 'Brian Garfield\'s wife had her purse stolen, so Brian wrote this novel about a vigilante whose wife has been murdered.',
            answers: ['Death Wish', 'The Fugitive', 'My Wife\'s Murder', 'Gone Girl'],
            answered: false,
        }
    },

    elements: {
        100: {
            value: 100,
            question: 'While the most abundant element in the universe, this element does not appear naturally on Earth.',
            answers: ['Hydrogen', 'Helium', 'Lithium', 'Berylium'],
            answered: false,
        }, 
        200: {
            value: 200,
            question: 'The father of the modern periodic table, he famously designed it based on a love of Solitaire.',
            answers: ['Mendeleev', 'Moseley', 'Heisenberg', 'Plank'],
            answered: false,
        }, 
        300: {
            value: 300,
            question: 'The creator of the Periodic Table incorrectly stated this family of elements did not exist.',
            answers: ['The Noble Gases', 'Alkali Metals', 'Halogens', 'Silicons'],
            answered: false,
        }, 
        400: {
            value: 400,
            question: 'This is the term for the various forms of a single element.',
            answers: ['Allotrope', 'Compound', 'Ion', 'Molecule'],
            answered: false,
        }, 
        500: {
            value: 500,
            question: 'This atomic number was theorized by Richard Feynman to be the theoretical limit of the periodic table.',
            answers: ['137', '124', '142', '121'],
            answered: false,
        }
    },

    legos: {
        100: {
            value: 100,
            question: 'A carpenter, Ole Kirk Christiansen, founded Lego in the 1930s to make wooden toys; he coined the company name from the words "leg godt", "play well" in this, his native language',
            answers: ['Danish', 'Dutch', 'German', 'Finnish'],
            answered: false,
        }, 
        200: {
            value: 200,
            question: 'Popular sets from the building series include such landmarks as Big Ben, the Eiffel Tower, and this World Heritage Site and masterpiece of Indian culture.',
            answers: ['The Taj Mahal', 'Angkar Wot', 'Dilwara Temple', 'The Sun Temple'],
            answered: false,
        }, 
        300: {
            value: 300,
            question: 'In 2016 NASA\'s Juno probe completed its 5-year voyage to Jupiter; on board is a minifigure of this 17th century Italian, telescope in hand.',
            answers: ['Galileo', 'Schiparelli', 'Cassini', 'Giaconni'],
            answered: false,
        }, 
        400: {
            value: 400,
            question: 'In 2015, Lego Group inaugurated its own off-shore wind farm & every employee was given a model wind farm kit, symbolizing the company\'s goal of being 100% based on this type of energy by 2020.',
            answers: ['renewable', 'wind', 'solar', 'green'],
            answered: false,
        }, 
        500: {
            value: 500,
            question: 'The Mindstorms construction kit, which allows children to build & program their own robotic devices, grew out of the company\'s longstanding partnership with the famous Media Lab of this Cambridge, Massachusetts school.',
            answers: ['MIT', 'Harvard', 'Boston University', 'Carnegie Mellon'],
            answered: false,
        }
    },

    brandNames: {
        100: {
            value: 100,
            question: 'Due to lawsuits, in the 1940s Pinesol had to change its name to Pine-sol to avoid confusion with this other cleaning brand.',
            answers: ['Lysol', 'Pine Fresh', 'Cleansol', 'Clorox'],
            answered: false,
        }, 
        200: {
            value: 200,
            question: 'Crepe paper filters used in gas masks during World War 1 evolved into this brand of tissue.',
            answers: ['Kleenex', 'Puffs', 'Charmin', 'Cottonelle'],
            answered: false,
        }, 
        300: {
            value: 300,
            question: 'Launched nationally in 1953, this wrap that clings to leftovers was Dow Chemical\'s first consumer product.',
            answers: ['Saran Wrap', 'Cling Wrap', 'Plastic Wrap', 'Reynolds Wrap'],
            answered: false,
        }, 
        400: {
            value: 400,
            question: 'In 1958 this credit card began as BankAmericard when cards with a $500 limit were sent out as an experiment.',
            answers: ['Visa', 'American Express', 'MasterCard', 'Discover'],
            answered: false,
        }, 
        500: {
            value: 500,
            question: 'The strawberry flavor of this 5-letter Coca-Cola brand is a favorite spirit offering at shrines in Thailand.',
            answers: ['Fanta', 'Barq\'s', 'Costa', 'Chico'],
            answered: false,
        }
    },

    astronomy: {
        100: {
            value: 100,
            question: 'On this planet named for a king amongst gods, the largest circular storm in our solar system takes place.',
            answers: ['Jupiter', 'Saturn', 'Neptune', 'Venus'],
            answered: false,
        }, 
        200: {
            value: 200,
            question: 'This is the largest asteroid known to exist.',
            answers: ['Ceres', 'Vesta', 'Icarus', 'Eros'],
            answered: false,
        }, 
        300: {
            value: 300,
            question: 'This was the first spacecraft to life a human beign into space.',
            answers: ['Vostok 1', 'Sputnik', 'Luna 1', 'Mercury 3'],
            answered: false,
        }, 
        400: {
            value: 400,
            question: 'This astronomer challenged the understanding of science and theologians when he published "On the Revolutions of the Heavenly Spheres".',
            answers: ['Copernicus', 'Galileo', 'Euclid', 'Kepler'],
            answered: false,
        }, 
        500: {
            value: 500,
            question: 'This refers to the time period between two successive occurenes of a specific type of alignment between a planet, or one of its moons, with the Sun and the Earth.',
            answers: ['Synodic Period', 'Conjunction', 'Sidereal Period', 'Aphelion'],
            answered: false,
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

// Hides the modal card, determines whether selected answer is correct and notifies player
const answerQuestion = (e) => {
    qCard.style.display = 'none';
    category = e.currentTarget.getAttribute('category');
    value = e.currentTarget.getAttribute('value');
    console.log(qAndA[category][value].answered);
    if (qAndA[category][value].answered === true) {
        Swal.fire({
            icon: 'warning',
            title: 'Already Answered',
            text: 'You have already answered this question, please choose another.',
            confirmButtonText: 'Oops',
          })
        // alert('You have already answered this question, please choose another.');
    } else if (e.currentTarget.innerText === qAndA[category][value].answers[0]) {
        playerScore += qAndA[category][value].value;
        qAndA[category][value].answered = true;
        Swal.fire({
            icon: 'success',
            title: 'Correct!',
            text: 'Good job,' + affirmations[Math.floor(Math.random() * affirmations.length)],
          })
        // alert('Correct!');
    } else {
        playerScore -= qAndA[category][value].value;
        qAndA[category][value].answered = true;
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Sorry, we were looking for ' + qAndA[category][value].answers[0],
            confirmButtonText: 'I\'ll get it next time',
          })
        // alert('Sorry, we were looking for ' + qAndA[category][value].answers[0])
    }
    
    updateScore();
}

// This function checks player score for win/lose conditions and updates the score in the DOM
const updateScore = () => {
    scoreBoard.innerText = 'Current Score: ' + playerScore;
    if (playerScore < 0 ) {
        Swal.fire({
            icon: 'warning',
            title: 'Low Score',
            text: 'Unfortunately, your score has gone negative',
            confirmButtonText: 'Bummer',
            willClose: restart,
          })
        // alert('Unfotunately, you\'ve lost too many points, try again.')
        
    }
}

const startOver = () => {
    document.location.reload();
}

// Restarts the game by reloading the entire page, setting all states back to origin
const restart = () => {
    Swal.fire({
        icon: 'info',
        title: 'Start Over',
        text: '' + beginAgain[Math.floor(Math.random() * beginAgain.length)],
        confirmButtonText: 'Let\'s do it!',
        willClose: startOver,
      })
    // alert('Let\'s start from the beginning, shall we?');
    // document.location.reload();
}

// Sets a game timer of 5 minutes and logs current player score when time is up
const endGame = () => {
    alert('In five minutes you managed to score ' + playerScore + ' points.  Reload the page and see if you can score higher!');
    restart();
}

window.setTimeout(endGame, 300000);

/* Creates event listener on the answer choices for answering the questions */
document.querySelectorAll('.aButtons').forEach(playerAnswer => playerAnswer.addEventListener('click', answerQuestion));

title.addEventListener('click', restart);