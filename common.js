// Common JS for handling quiz submissions
document.addEventListener('DOMContentLoaded', function () {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            let score = 0;
            const totalQuestions = 10; // Total questions per quiz

            // Calculate score based on correct answers
            const answers = {
                'javascript-quiz': ['A', 'C', 'B', 'A', 'C', 'B', 'A', 'B', 'C', 'A'], // Correct answers for JavaScript
                'html-css-quiz': ['A', 'B', 'C', 'A', 'C', 'B', 'A', 'B', 'C', 'A'], // Correct answers for HTML & CSS
                'data-science-quiz': ['A', 'B', 'C', 'A', 'B', 'C', 'A', 'B', 'C', 'A'] // Correct answers for Data Science
            };

            const quizName = form.getAttribute('id');
            const userAnswers = new FormData(form);

            for (let [name, value] of userAnswers.entries()) {
                const questionNumber = name.slice(1); // Extract question number from the input name
                if (value === answers[quizName][questionNumber - 1]) {
                    score++;
                }
            }

            alert(`Your score is ${score} out of ${totalQuestions}`);
            form.reset();
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const quizzes = document.querySelectorAll('form');
    quizzes.forEach(quiz => {
        quiz.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Your answers have been submitted!');
            // You can add more functionality here to process the answers
        });
    });
});
