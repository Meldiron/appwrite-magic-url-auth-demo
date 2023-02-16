import { Client, Account, ID } from 'appwrite';

const client = new Client()
    .setEndpoint('http://localhost/v1')
    .setProject('myEmailApp');

const account = new Account(client);

export const login = async (email: string) => {
    await account.createMagicURLSession(ID.unique(), email, 'http://localhost:5173/finish-login');
}

export const finishLogin = async (userId: string, secret: string) => {
    await account.updateMagicURLSession(userId, secret);
}

export const getAccount = async () => {
    return await account.get();
};
