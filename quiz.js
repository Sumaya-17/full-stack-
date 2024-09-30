// Quiz Data (for demo purposes)
const quizzes = [
    { title: "JavaScript Basics", score: 75 },
    { title: "HTML & CSS", score: 85 },
    { title: "Data Science", score: 90 }
];

// Leaderboard Data (for demo purposes)
const leaderboardData = [
    { name: "John Doe", score: 95 },
    { name: "Jane Smith", score: 85 },
    { name: "Samuel Green", score: 80 }
];

// Handle Quiz
document.getElementById('startQuiz').addEventListener('click', function () {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';
    quizzes.forEach(quiz => {
        const quizItem = document.createElement('div');
        quizItem.className = 'quiz-item mb-3 p-3 bg-light rounded';
        quizItem.innerHTML = `<strong>${quiz.title}</strong> - Score: ${quiz.score}%`;
        quizContainer.appendChild(quizItem);
    });
});

// Show Leaderboard
const leaderboard = document.getElementById('leaderboard');
leaderboard.innerHTML = '';
leaderboardData.forEach(player => {
    const playerItem = document.createElement('li');
    playerItem.textContent = `${player.name} - ${player.score} pts`;
    leaderboard.appendChild(playerItem);
});

document.getElementById('createQuiz').addEventListener('click', function () {
    const manageQuizzes = document.getElementById('manage-quizzes');
    manageQuizzes.innerHTML = '<p>Entering contestant details...</p>';

    const contestantForm = document.getElementById('contestant-form');
    contestantForm.classList.remove('hidden');
    contestantForm.classList.add('fadeIn');

    // Resetting the form on click
    document.getElementById('contestantDetails').reset();
});

// Handle form submission
document.getElementById('contestantDetails').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('contestantName').value;
    const email = document.getElementById('contestantEmail').value;
    const selectedQuiz = document.getElementById('quizSelection').value;

    alert(`Contestant ${name} has entered the ${selectedQuiz} quiz.`);
});

// Toggle Navbar
document.getElementById('toggleNavbar').addEventListener('click', function () {
    const navbar = document.getElementById('verticalNavbar');
    navbar.classList.toggle('hidden');
});
// Select the elements
const createQuizButton = document.getElementById('createQuiz');
const contestantForm = document.getElementById('contestant-form');

// Add click event listener to the "Create New Quiz" button
createQuizButton.addEventListener('click', function () {
    // Show the contestant details form
    contestantForm.classList.remove('hidden'); // Remove the hidden class to show the form
});

// Handle the contestant form submission
document.getElementById('contestantDetails').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    const name = document.getElementById('contestantName').value;
    const email = document.getElementById('contestantEmail').value;
    const selectedQuiz = document.getElementById('quizSelection').value;

    // Create a new list item for contestant details
    const contestantList = document.getElementById('contestantList');
    const contestantItem = document.createElement('li');
    contestantItem.className = 'list-group-item';
    contestantItem.textContent = `${name} (${email}) - Selected Quiz: ${selectedQuiz}`;

    // Append the new item to the list
    contestantList.appendChild(contestantItem);

    // Reset the form
    document.getElementById('contestantDetails').reset();
});
