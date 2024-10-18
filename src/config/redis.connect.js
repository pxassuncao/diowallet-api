import redis from 'redis';

export const client = redis.createClient({
  host: '127.0.0.1', // ou qualquer outra configuração necessária
  port: 6379,
});

client.on('error', (err) => console.log('Redis Client Error', err));

