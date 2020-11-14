export const AppConfig = () => ({
  PORT: parseInt(process.env.PORT, 10) || 3000,
  SERVICES: {
    SERVICE_URL: process.env.SERVICE_URL,
  },
});
