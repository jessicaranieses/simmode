function calculateResult() {
    let score = {
        a: 0,
        b: 0,
        c: 0
    };

    const answers = document.querySelectorAll('input[type="radio"]:checked');
    answers.forEach(answer => {
        score[answer.value]++;
    });

    const name = document.getElementById('name').value;
    let result = name + ", ";

    if (score.a >= score.b && score.a >= score.c) {
        result += "you're all about Data Analysis and Visualization! You dive deep into the data and love to see it come alive visually.";
    } else if (score.b >= score.a && score.b >= score.c) {
        result += "you resonate with Regression Analysis & Diagnostics! You're methodical, analytical, and always seeking patterns.";
    } else {
        result += "you're an explorer of Advanced Regression Analysis. You're not afraid to experiment and you're always eager to learn new tools like Jamovi!";
    }

    document.getElementById('result').innerText = result;
}
