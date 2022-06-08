export default function () {
  document.getElementById('stu-choose-course-btn').addEventListener('click', async () => {
    const { value: cid } = document.getElementById('stu-choose-course-cou-input');
    const { value: sid } = document.getElementById('stu-choose-course-stu-input');

    if (!cid || !sid) return;

    const { affectedRows: num } = await window.electronAPI.chooseCourse(cid, sid);

    if (num !== 0) {
      document.getElementById('stu-choose-course-cou-input').value = '';
      document.getElementById('stu-choose-course-stu-input').value = '';
      alert('添加成功');
    } else {
      alert('添加失败');
    }
  });
};
