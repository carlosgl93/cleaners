export const triggerNotification = (
  notificationHook: React.Dispatch<React.SetStateAction<string>>,
  message: string
) => {
  notificationHook(message);
  return setTimeout(() => notificationHook(""), 5000);
};
