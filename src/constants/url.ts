export const URL = process.env.NEXT_PUBLIC_API_URL ?? '';

export const API_URL = `${URL}/api/v1`;
export const WEBSOCKET_URL = `${URL.replace('https://', 'wss://')}/ws`;
