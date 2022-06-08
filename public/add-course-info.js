export default function () {
  document.getElementById('add-course-info-btn').addEventListener('click', async () => {
    const cou = {
      ser: document.getElementById('add-course-info-ser').innerHTML.trim(),
      name: document.getElementById('add-course-info-name').innerHTML.trim(),
      credit: document.getElementById('add-course-info-credit').innerHTML.trim(),
      per: document.getElementById('add-course-info-per').innerHTML.trim(),
      tea: document.getElementById('add-course-info-tea').innerHTML.trim(),
      room: document.getElementById('add-course-info-room').innerHTML.trim(),
    };

    const { affectedRows: num } = await window.electronAPI.addCourseInfo(cou);
    if (num !== 0) {
      document.getElementById('add-course-info-ser').innerHTML = '';
      document.getElementById('add-course-info-name').innerHTML = '';
      document.getElementById('add-course-info-credit').innerHTML = '';
      document.getElementById('add-course-info-per').innerHTML = '';
      document.getElementById('add-course-info-tea').innerHTML = '';
      document.getElementById('add-course-info-room').innerHTML = '';
      alert('添加成功');
    } else {
      alert('添加失败');
    }
  });
};
