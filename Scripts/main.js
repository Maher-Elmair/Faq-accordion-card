let questions = document.getElementsByClassName("question");
let text = document.getElementsByClassName("text_faq");

Array.from(questions).forEach((question) =>
    question.addEventListener('click', () => {
        question.parentNode.classList.toggle("active");
        // if (question.parentNode.classList.contains("active")){
        //     question.parentNode.classList.toggle("active");
        // } else {
        //     questions.forEach((question) => question.parentNode.classList.remove("active"));
        //     question.parentNode.classList.add("active");
        // }
    })
);
