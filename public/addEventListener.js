import searchStuInfo from './search-stu-info.js';
import searchCouInfo from './search-course-info.js';
import addStuInfo from './add-stu-info.js';
import addCouInfo from './add-course-info.js';
import deleteStuInfo from './delete-stu-info.js';
import deleteCouInfo from './delete-course-info.js';
import fixStuInfo from './fix-stu-info.js';
import fixCouInfo from './fix-course-info.js';
import chooseCourse from './choose-course.js';
import addScore from './add-score.js';

window.addEventListener('load', () => {
  searchStuInfo();
  searchCouInfo();
  addStuInfo();
  addCouInfo();
  deleteStuInfo();
  deleteCouInfo();
  fixStuInfo();
  fixCouInfo();
  chooseCourse();
  addScore();
});
