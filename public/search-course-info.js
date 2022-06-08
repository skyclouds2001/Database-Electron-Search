export default function () {
  document.getElementById('search-course-info-btn').addEventListener('click', async () => {
    const { value } = document.getElementById('search-course-info-input');

    if (!value) return;

    const res = await window.electronAPI.searchCourseInfo(value);

    if (Array.isArray(res) && res.length !== 0) {
      const cou = res[0];
      document.getElementById('search-course-info-show').innerHTML = formatTable(cou);
      document.getElementById('search-course-info-input').value = '';
      alert('查询成功');
    } else {
      alert('查询失败');
    }
  });
}

function formatTable (cou) {
  return `<table class="show">
            <tr>
              <th class="show-item">编号</th>
              <td class="show-item">${cou.cou_ser}</td>
              <th class="show-item">名称</th>
              <td class="show-item">${cou.cou_name}</td>
              <th class="show-item">学分</th>
              <td class="show-item">${cou.cou_credit}</td>
            </tr>
            <tr>
              <th class="show-item">学时</th>
              <td class="show-item">${cou.cou_per}</td>
              <th class="show-item">教师</th>
              <td class="show-item">${cou.cou_tea}</td>
              <th class="show-item">教室</th>
              <td class="show-item">${cou.cou_room}</td>
            </tr>
          </table>`;
}
