document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.question');
        const answer = item.querySelector('.answer');
        const toggleIcon = item.querySelector('.toggle-icon');

        question.addEventListener('click', () => {
            const isOpen = answer.style.display === 'block';

            if (isOpen) {
                answer.style.display = 'none';
                toggleIcon.textContent = '➕';
            } else {
                answer.style.display = 'block';
                toggleIcon.textContent = '➖';
            }
        });
    });
});
