// JavaScript code for the Typing Role-Playing Game (TRPG)
// listen for the DOMContentLoaded event to ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Initialize game variables
    // characterName = 'Hero'; // Default character name
    let characterName = 'Hero'; // Default character name
    // gameState = 'paused'; // Default game state
    let gameState = 'paused'; // Default game state
    // currentLevel = 0; // Default current level
    let currentLevel = 0; // Default current level
    // score = 0; // Default score
    let score = 0; // Default score
    // bestWPM = 0; // Default best words per minute
    let bestWPM = 0; // Default best words per minute
    // avgWPM = 0; // Default average words per minute
    let avgWPM = 0; // Default average words per minute

    // Array of words for the game
    const words = [
        "adventure",
        "mystery",
        "exploration",
        "fantasy",
        "quest"
    ];

    // Initialize game elements
    const gameContainer = document.querySelector('.game-container');
    // make a current word variable
    let currentWord = '';
    // make a current word div
    const currentWordDiv = document.createElement('div');
    // set the class for the current word div
    currentWordDiv.classList.add('current-word');
    // put currentWordDiv in the game container
    gameContainer.appendChild(currentWordDiv);
    // make a typing input field
    //const typingInput = document.createElement('input');
    // start game button
    const startGameButton = document.querySelector('#start-game');
    // game status display
    const gameStatusDisplay = document.querySelector('#game-status');
    // pause game button
    const pauseGameButton = document.getElementById('pause-game');
    // reset game button
    const resetGameButton = document.getElementById('reset-game');
    // test div
    const testDiv = document.querySelector('.test-div');
    // place the input field in the game container
    //gameContainer.appendChild(typingInput);
    // default input field attributes
    //typingInput.type = 'text';
    // set the placeholder text
    //typingInput.placeholder = 'Type here...';
    
    // function to start the game
    function startGame() {
    }

    // // while gameState is paused
    // while (gameState === 'paused') {
    //     // listen for click events on the start game button
    //     startGameButton.addEventListener('click', () => {
    //         // call the startGame function
    //         //startGame();
    //         // Start the game
    //         gameState = 'playing';
    //         // random word
    //         let randomWord = words[Math.floor(Math.random() * words.length)];
    //         // Update the game status display
    //         gameStatusDisplay.textContent = 'Running';
    //         // display the pause button
    //         pauseGameButton.style.display = 'inline-block';
    //         // display the reset button
    //         resetGameButton.style.display = 'inline-block';
    //         // Set the text in Current Word Div to the random word
    //         currentWordDiv.textContent = randomWord;
    //         // Hide the start game button
    //         startGameButton.style.display = 'none';
    //     });
    // }

    // listen for click events on the start game button
    startGameButton.addEventListener('click', () => {
        // Start the game
        gameState = 'playing';
        // random word
        let randomWord = words[Math.floor(Math.random() * words.length)];
        // Update the game status display
        gameStatusDisplay.textContent = 'Running';
        // display the pause button
        pauseGameButton.style.display = 'inline-block';
        // display the reset button
        resetGameButton.style.display = 'inline-block';
        // Set the text in Current Word Div to the random word
        currentWordDiv.textContent = randomWord;
        // Hide the start game button
        startGameButton.style.display = 'none';
    });

    // while gameState is playing
    while (gameState === 'playing') {
        // focus the game container
        gameContainer.focus();
    }

    // listen for click events on the pause game button
    pauseGameButton.addEventListener('click', () => {
        // Pause the game
        gameState = 'paused';
        // random word
        let randomWord = words[Math.floor(Math.random() * words.length)];
        gameStatusDisplay.textContent = 'Paused - Press "Start Game" to continue!';
        // Hide the pause button
        pauseGameButton.style.display = 'none';
        // Hide typing input
        //typingInput.style.display = 'none';
        // Set the text in Current Word Div to the random word
        currentWordDiv.textContent = randomWord;
        // display the start game button
        startGameButton.style.display = 'inline-block';
    });

    // listen for click events on the reset game button
    resetGameButton.addEventListener('click', () => {
        // Reset the game
        gameState = 'paused';
        // random word
        let randomWord = words[Math.floor(Math.random() * words.length)];
        gameStatusDisplay.textContent = 'Game reset - Press "Start Game" to begin!';
        // Hide the pause button
        pauseGameButton.style.display = 'none';
        // Hide typing input
        //typingInput.style.display = 'none';
        // Clear the text in Current Word Div
        currentWordDiv.textContent = '';
        // Clear the text in the test div
        testDiv.textContent = '';
        // display the start game button
        startGameButton.style.display = 'inline-block';
    });


});