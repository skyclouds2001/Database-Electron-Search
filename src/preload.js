const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  searchStuInfo: (...args) => ipcRenderer.invoke('search-stu-info', ...args),
  searchCourseInfo: (...args) => ipcRenderer.invoke('search-course-info', ...args),
  addStuInfo: (...args) => ipcRenderer.invoke('add-stu-info', ...args),
  addCourseInfo: (...args) => ipcRenderer.invoke('add-course-info', ...args),
  deleteStuInfo: (...args) => ipcRenderer.invoke('delete-stu-info', ...args),
  deleteCourseInfo: (...args) => ipcRenderer.invoke('delete-course-info', ...args),
  fixStuInfo: (...args) => ipcRenderer.invoke('fix-stu-info', ...args),
  fixCourseInfo: (...args) => ipcRenderer.invoke('fix-course-info', ...args),
  chooseCourse: (...args) => ipcRenderer.invoke('choose-course', ...args),
  addScore: (...args) => ipcRenderer.invoke('add-score', ...args),
});
