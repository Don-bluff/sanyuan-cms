module.exports = ({ env }) => {
  const dbUrl = env('DATABASE_URL');

  return {
    connection: dbUrl
      ? {
          client: 'postgres',
          connection: dbUrl,
          ssl: {
            rejectUnauthorized: false,
          },
        }
      : {
          client: 'postgres',
          connection: {
            host: env('DATABASE_HOST', 'localhost'),
            port: env.int('DATABASE_PORT', 5432),
            database: env('DATABASE_NAME', 'sanyuan-cms'),
            user: env('DATABASE_USERNAME', 'postgres'),
            password: env('DATABASE_PASSWORD', 'your-password'),
            ssl: false,
          },
        },
  };
};
