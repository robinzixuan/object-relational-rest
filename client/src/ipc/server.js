import { app, dialog, ipcMain, shell } from 'electron';
import endpoints from './endpoints';
import { EXAMPLE_PROJECT_SCHEMA } from './constants';

const fs = require('fs');

export default function registerIPC(window) {
    // Helper function that sends a string message to rendering process
    // to be logged and to be displayed as a toast
    function sendNotificationToClient(message) {
        window.webContents.send(endpoints.SERVER_SEND_NOTIFICATION, message);
    }

    ipcMain.on(endpoints.CLIENT_REQUEST_SAVE_SCHEMA, (event, schemaString) => {
        dialog.showSaveDialog({
            filters: [
                { name: 'Schema File', extensions: ['schema'] }
            ]
        }, (filePath) => {
            if (filePath) {
                fs.writeFile(filePath, schemaString, () => {
                    window.webContents.send(endpoints.SERVER_RESPONSE_SAVE_SCHEMA, filePath);
                })
            }
        })
    })

    ipcMain.on(endpoints.CLIENT_REQUEST_GENERATE_CODE, (event, schemaJSON) => {
        
        window.webContents.send(endpoints.SERVER_RESPONSE_GENERATE_CODE);
    })
}

// Helper function that get the data from constants.js
function generateCode(schema) {
    var header = `from django.db import models
from rest_framework import serializers, viewsets
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from django.conf.urls import url
from rest_framework.documentation import include_docs_urls
    
`;
    var code = [header];
    var projectName = schema.projectName;
    var classes = schema.classes;
    classes.forEach(function(cls) {
        var className = cls.className;
        code.push(`class ${className}(models.Model):\n`);
        var attributes = cls.attributes;
        attributes.forEach(function(attribute) {
            var attributeName = attribute.name;
            var attributeType = attribute.type;
            code.push(`    ${attributeName} = models.${attributeType}\n`)
        });
        code.push(`\nclass ${className}Serializer(serializers.ModelSerializer):\n`);
        code.push(`    class Meta:
        model = ${className}
        fields = '__all__'\n\n`);
        code.push(`class ${className}ViewSet(viewsets.ModelViewSet):
        queryset = ${className}.objects.all()
        serializer_class = ${className}Serializer\n\n`);
    });
    code.push(`router = DefaultRouter()\n`);
    classes.forEach(function(cls) {
        var className = cls.className;
        var endpointName = cls.endpointName;
        code.push(`router.register(r'${endpointName}', ${className}ViewSet)\n`);
    });
    code.push(`\nurlpatterns = [
        path('', include(router.urls)),
        url(r'^docs/', include_docs_urls(title='${projectName}')),
]`);
    return code;
}

function writeFile(code) {
    var str = code.join("");
    fs.writeFileSync('/Users/luohaozheng/desktop/output.py', str);
}

// writeFile(generateCode(EXAMPLE_PROJECT_SCHEMA));