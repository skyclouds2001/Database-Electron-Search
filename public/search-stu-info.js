export default function () {
  document.getElementById('search-stu-info-btn').addEventListener('click', async () => {
    const { value } = document.getElementById('search-stu-info-input');

    if (!value) return;

    const res = await window.electronAPI.searchStuInfo(value);

    if (Array.isArray(res) && res.length !== 0) {
      const stu = res[0];
      document.getElementById('search-stu-info-show').innerHTML = formatTable(stu);
      document.getElementById('search-stu-info-input').value = '';
      alert('查询成功');
    } else {
      alert('查询失败');
    }
  });
}

function formatTable (stu) {
  return `<table class="show">
            <tr>
              <th class="show-item">姓名</th>
              <td class="show-item">${stu.stu_name}</td>
              <th class="show-item">学号</th>
              <td class="show-item">${stu.stu_id}</td>
              <th class="show-item">性别</th>
              <td class="show-item">${!stu.stu_sex[0] ? '男' : '女'}</td>
            </tr>
            <tr>
              <th class="show-item">国籍</th>
              <td class="show-item">${stu.stu_nation}</td>
              <th class="show-item">户籍</th>
              <td class="show-item">${stu.stu_register}</td>
              <th class="show-item">年级</th>
              <td class="show-item">${stu.stu_grade}</td>
            </tr>
            <tr>
              <th class="show-item">学院</th>
              <td class="show-item">${stu.stu_faculty}</td>
              <th class="show-item">专业</th>
              <td class="show-item">${stu.stu_major}</td>
              <th class="show-item">班级</th>
              <td class="show-item">${stu.stu_class}</td>
            </tr>
            <tr>
              <th class="show-item">生日</th>
              <td class="show-item">${stu.stu_birth.toLocaleDateString().replace('/', '-')}</td>
              <th class="show-item">邮箱</th>
              <td class="show-item">${stu.stu_email}</td>
              <th class="show-item">状态</th>
              <td class="show-item">${!stu.stu_status[0] ? '在读' : '休学'}</td>
            </tr>
          </table>`;
}
