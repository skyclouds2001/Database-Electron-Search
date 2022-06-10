export default function () {
  document.getElementById('fix-course-info-btn').addEventListener('click', async () => {
    const cou = {
      ser: document.getElementById('fix-course-info-ser').innerHTML.trim(),
      name: document.getElementById('fix-course-info-name').innerHTML.trim(),
      credit: document.getElementById('fix-course-info-credit').innerHTML.trim(),
      per: document.getElementById('fix-course-info-per').innerHTML.trim(),
      tea: document.getElementById('fix-course-info-tea').innerHTML.trim(),
      room: document.getElementById('fix-course-info-room').innerHTML.trim(),
    };

    const res = await window.electronAPI.fixCourseInfo(cou);
    if (res) {
      document.getElementById('fix-course-info-ser').innerHTML = '';
      document.getElementById('fix-course-info-name').innerHTML = '';
      document.getElementById('fix-course-info-credit').innerHTML = '';
      document.getElementById('fix-course-info-per').innerHTML = '';
      document.getElementById('fix-course-info-tea').innerHTML = '';
      document.getElementById('fix-course-info-room').innerHTML = '';
      alert('修改成功');
    } else {
      alert('修改失败');
    }
  });
};
