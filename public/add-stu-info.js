export default function () {
  document.getElementById('add-stu-info-btn').addEventListener('click', async () => {
    const user = {
      name: document.getElementById('add-stu-info-name').innerHTML.trim(),
      id: document.getElementById('add-stu-info-id').innerHTML.trim(),
      sex: document.getElementById('add-stu-info-sex').innerHTML.trim(),
      nation: document.getElementById('add-stu-info-nation').innerHTML.trim(),
      register: document.getElementById('add-stu-info-register').innerHTML.trim(),
      grade: document.getElementById('add-stu-info-grade').innerHTML.trim(),
      faculty: document.getElementById('add-stu-info-faculty').innerHTML.trim(),
      major: document.getElementById('add-stu-info-major').innerHTML.trim(),
      class: document.getElementById('add-stu-info-class').innerHTML.trim(),
      birth: document.getElementById('add-stu-info-birth').innerHTML.trim(),
      email: document.getElementById('add-stu-info-email').innerHTML.trim(),
      status: document.getElementById('add-stu-info-status').innerHTML.trim(),
    };

    const { affectedRows: num } = await window.electronAPI.addStuInfo(user);
    if (num !== 0) {
      document.getElementById('add-stu-info-name').innerHTML = '';
      document.getElementById('add-stu-info-id').innerHTML = '';
      document.getElementById('add-stu-info-sex').innerHTML = '';
      document.getElementById('add-stu-info-nation').innerHTML = '';
      document.getElementById('add-stu-info-register').innerHTML = '';
      document.getElementById('add-stu-info-grade').innerHTML = '';
      document.getElementById('add-stu-info-faculty').innerHTML = '';
      document.getElementById('add-stu-info-major').innerHTML = '';
      document.getElementById('add-stu-info-class').innerHTML = '';
      document.getElementById('add-stu-info-birth').innerHTML = '';
      document.getElementById('add-stu-info-email').innerHTML = '';
      document.getElementById('add-stu-info-status').innerHTML = '';
      alert('添加成功');
    } else {
      alert('添加失败');
    }
  });
};
