document.addEventListener('DOMContentLoaded', function () {
    let items = document.querySelectorAll('.lanche');

    if ('IntersectionObserver' in window) {
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -150px 0px'
        });

        items.forEach(item => {
            observer.observe(item);
        });
    } else {
        items.forEach(item => {
            item.classList.add('visible');
        });
    }
});
      