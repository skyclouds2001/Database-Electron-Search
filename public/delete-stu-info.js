export default function () {
  document.getElementById('delete-stu-info-btn').addEventListener('click', async () => {
    const { value } = document.getElementById('delete-stu-info-input');

    if (!value) return;

    const { affectedRows: num } = await window.electronAPI.deleteStuInfo(value);

    if (num !== 0) {
      document.getElementById('delete-stu-info-input').value = '';
      alert('删除成功');
    } else {
      alert('删除失败');
    }
  });
};
