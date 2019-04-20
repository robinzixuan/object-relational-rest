import { Toaster, Position } from '@blueprintjs/core';

const NotificationService = {};

const topToaster = Toaster.create({
    position: Position.TOP,
});

NotificationService.toast = (message, intent) => {
    topToaster.show({message, intent, timeout: 2000});
};

export default NotificationService;