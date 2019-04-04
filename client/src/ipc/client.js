import endpoints from './endpoints';

const { ipcRenderer } = require('electron');

export default function registerIPC() {
    ipcRenderer.on(endpoints.SERVER_SEND_NOTIFICATION, (event, message) => {
        console.log(`[Electron SERVER Notification] ${message}`);
    })
}