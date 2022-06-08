const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

const sql = require('./utils/sql.js');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    title: '学生信息查询',
    icon: './assets/database.png',
    webPreferences: {
      preload: path.join(__dirname, './src/preload.js'),
      contextIsolation: true,
    },
  });

  win.webContents.openDevTools();

  win.loadFile('./public/index.html');
};

app.on('window-all-closed', () => {
  sql.connection.end();
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });

  ipcMain.handle('search-stu-info', async (event, ...args) => {
    try {
      const res = await sql.query(`SELECT * FROM student WHERE stu_id = ${args[0]}`);
      return res;
    } catch (err) {
      return err;
    }
  });

  ipcMain.handle('search-course-info', async (event, ...args) => {
    try {
      const res = await sql.query(`SELECT * FROM course WHERE cou_ser = '${args[0]}'`);
      return res;
    } catch (err) {
      return err;
    }
  });

  ipcMain.handle('add-stu-info', async (event, ...args) => {
    try {
      const [stu] = args;
      const res = await sql.query(`
        INSERT INTO student
          (stu_id, stu_name, stu_birth, stu_sex, stu_nation, stu_register, stu_faculty, stu_major, stu_class, stu_grade, stu_email, stu_status)
        VALUES
          (${stu.id}, ${stu.name}, ${stu.birth}, b${stu.sex}, ${stu.nation}, ${stu.register}, ${stu.faculty}, ${stu.major}, ${stu.class}, ${stu.grade}, ${stu.email}, b${stu.status})
      `);
      return res;
    } catch (err) {
      return err;
    }
  });

  ipcMain.handle('add-course-info', async (event, ...args) => {
    const [cou] = args;
    try {
      const res = await sql.query(`
        INSERT INTO course
          (cou_name, cou_credit, cou_ser, cou_per, cou_tea, cou_term, cou_room)
        VALUES
          (${cou.name}, ${cou.credit}, ${cou.ser}, ${cou.per}, ${cou.tea}, 1, ${cou.room});
      `);
      return res;
    } catch (err) {
      return err;
    }
  });

  ipcMain.handle('delete-stu-info', async (event, ...args) => {
    try {
      const res = await sql.query(`DELETE FROM student WHERE stu_id = ${args[0]}`);
      return res;
    } catch (err) {
      return err;
    }
  });

  ipcMain.handle('delete-course-info', async (event, ...args) => {
    try {
      const res = await sql.query(`DELETE FROM course WHERE cou_ser = ${args[0]}`);
      return res;
    } catch (err) {
      return err;
    }
  });

  ipcMain.handle('fix-stu-info', async (event, ...args) => {
    const [stu] = args;

    try {
      const promises = [];
      Object.keys(stu).forEach(v => stu[v] ? promises.push(sql.query(`UPDATE student SET stu_${v} = ${stu[v]} WHERE stu_id = ${stu.id};`)) : null);

      let res = true;
      (await Promise.allSettled(promises)).forEach(v => v.status === 'rejected' ? (res = false) : null);
      return res;
    } catch (err) {
      return err;
    }
  });

  ipcMain.handle('fix-course-info', async (event, ...args) => {
    const [cou] = args;

    try {
      const promises = [];
      Object.keys(cou).forEach(v => cou[v] ? promises.push(sql.query(`UPDATE course SET cou_${v} = ${cou[v]} WHERE cou_ser = ${cou.ser};`)) : null);

      let res = true;
      (await Promise.allSettled(promises)).forEach(v => v.status === 'rejected' ? (res = false) : null);
      return res;
    } catch (err) {
      return err;
    }
  });

  ipcMain.handle('choose-course', async (event, ...args) => {
    try {
      const res = await sql.query(`INSERT INTO selection (stu_id, cou_ser) VALUES (${args[1]}, ${args[0]})`);
      return res;
    } catch (err) {
      return err;
    }
  });

  ipcMain.handle('add-score', async (event, ...args) => {
    try {
      const res = await sql.query(`UPDATE selection SET score=${args[2]} WHERE cou_ser = ${args[0]} AND stu_id=${args[1]}`);
      return res;
    } catch (err) {
      return err;
    }
  });
});
