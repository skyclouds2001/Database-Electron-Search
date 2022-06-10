const articles = [
  'search-stu-info',
  'search-course-info',
  'add-stu-info',
  'add-course-info',
  'delete-stu-info',
  'delete-course-info',
  'fix-stu-info',
  'fix-course-info',
  'choose-stu-course',
  'add-course-score',
];

const index = 0;

window.addEventListener('load', () => {
  document.getElementById(articles[index]).style.display = '';
  document.getElementsByClassName('nav-list-item')[index].classList.add('select');

  document.getElementById('navbar').addEventListener('click', (e) => {
    const { id } = e.target.dataset;

    articles.forEach((item, index) => {
      document.getElementById(item).style.display = index === parseInt(id) - 1 ? '' : 'none';
    });

    Array.from(document.getElementsByClassName('nav-list-item')).forEach((item, index) => {
      const classList = document.getElementsByClassName('nav-list-item')[index].classList;
      index === parseInt(id) - 1 ? classList.add('select') : classList.remove('select');
    });
  });
});
