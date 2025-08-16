import conf from "../conf/config.js";
import {Client, Account, ID} from "appwrite";
export class AuthService{
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectid);
        this.account = new Account(this.client)
    }

    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name);
            if(userAccount){
                return this.loginAccount({email,password});
            }
            else {
                return userAccount
            }
        } catch (error) {
            throw error;
        }
    }

    async loginAccount({email,password}){
        try {
            return await this.account.createEmailSession(email,password);
        } catch (error) {
            throw error;
        }
    }

    async getUser(){
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }

        return null;
    }

    async logout(){
        try {
            await this.account.deleteSession();
        } catch (error) {
            throw error;
        }
    }

}

export const authService = new AuthService();

