export default function () {
  document.getElementById('add-course-score-btn').addEventListener('click', async () => {
    const { value: cid } = document.getElementById('add-course-score-cou-input');
    const { value: sid } = document.getElementById('add-course-score-stu-input');
    const { value: score } = document.getElementById('add-course-score-score-input');

    if (!cid || !sid || !score) return;

    const { affectedRows: num } = await window.electronAPI.addScore(cid, sid, score);

    if (num !== 0) {
      document.getElementById('add-course-score-cou-input').value = '';
      document.getElementById('add-course-score-stu-input').value = '';
      document.getElementById('add-course-score-score-input').value = '';
      alert('添加成功');
    } else {
      alert('添加失败');
    }
  });
}
