export default function () {
  document.getElementById('fix-stu-info-btn').addEventListener('click', async () => {
    const user = {
      name: document.getElementById('fix-stu-info-name').innerHTML.trim(),
      id: document.getElementById('fix-stu-info-id').innerHTML.trim(),
      sex: document.getElementById('fix-stu-info-sex').innerHTML.trim(),
      nation: document.getElementById('fix-stu-info-nation').innerHTML.trim(),
      register: document.getElementById('fix-stu-info-register').innerHTML.trim(),
      grade: document.getElementById('fix-stu-info-grade').innerHTML.trim(),
      faculty: document.getElementById('fix-stu-info-faculty').innerHTML.trim(),
      major: document.getElementById('fix-stu-info-major').innerHTML.trim(),
      class: document.getElementById('fix-stu-info-class').innerHTML.trim(),
      birth: document.getElementById('fix-stu-info-birth').innerHTML.trim(),
      email: document.getElementById('fix-stu-info-email').innerHTML.trim(),
      status: document.getElementById('fix-stu-info-status').innerHTML.trim(),
    };

    const res = await window.electronAPI.fixStuInfo(user);
    if (res) {
      document.getElementById('fix-stu-info-name').innerHTML = '';
      document.getElementById('fix-stu-info-id').innerHTML = '';
      document.getElementById('fix-stu-info-sex').innerHTML = '';
      document.getElementById('fix-stu-info-nation').innerHTML = '';
      document.getElementById('fix-stu-info-register').innerHTML = '';
      document.getElementById('fix-stu-info-grade').innerHTML = '';
      document.getElementById('fix-stu-info-faculty').innerHTML = '';
      document.getElementById('fix-stu-info-major').innerHTML = '';
      document.getElementById('fix-stu-info-class').innerHTML = '';
      document.getElementById('fix-stu-info-birth').innerHTML = '';
      document.getElementById('fix-stu-info-email').innerHTML = '';
      document.getElementById('fix-stu-info-status').innerHTML = '';
      alert('添加成功');
    } else {
      alert('添加失败');
    }
  });
};
