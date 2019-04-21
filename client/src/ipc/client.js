import endpoints from './endpoints';
import NotificationService from '../renderer/services/NotificationService';

const { ipcRenderer } = require('electron');

export default function registerIPC() {
    ipcRenderer.on(endpoints.SERVER_SEND_NOTIFICATION, (event, message) => {
        console.log(`[Electron SERVER Notification] ${message}`);
    });

    ipcRenderer.on(endpoints.SERVER_RESPONSE_SAVE_SCHEMA, (event, fileSavedPath) => {
        NotificationService.toast(`Schema file saved at ${fileSavedPath}`, 'success');
    });

    ipcRenderer.on(endpoints.SERVER_RESPONSE_GENERATE_CODE, (event) => {
        NotificationService.toast('Project code generated', 'success');
    });
}

export function requestSaveSchema(schemaJSON) {
    ipcRenderer.send(endpoints.CLIENT_REQUEST_SAVE_SCHEMA, JSON.stringify(schemaJSON, null, 2));
}

export function requestGenerateCode(schemaJSON) {
    ipcRenderer.send(endpoints.CLIENT_REQUEST_GENERATE_CODE, schemaJSON);
}