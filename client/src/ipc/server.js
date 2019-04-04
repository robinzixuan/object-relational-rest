import { app, dialog, ipcMain, shell } from 'electron';
import endpoints from './endpoints';

export default function registerIPC(window) {
    // Helper function that sends a string message to rendering process
    // to be logged and to be displayed as a toast
    function sendNotificationToClient(message) {
        window.webContents.send(endpoints.SERVER_SEND_NOTIFICATION, message);
    }
}