import conf from "../conf/config";
import {Client, ID, Databases, Storage, Query} from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectid)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseid,
                conf.appwriteCollectionid,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite Service :: createPost :: error", error);
        }
    }

    async updatePost(slug,{title,content,featuredImage,status,userId}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseid,
                conf.appwriteCollectionid,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status 
                }
            )
        } catch (error) {
            console.log("Appwrite Service :: updatePost :: error", error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseid,
                conf.appwriteCollectionid,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite Service :: deletePost :: error", error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseid,
                conf.appwriteCollectionid,
                slug
            )
        } catch (error) {
            console.log("Appwrite Service :: getPost :: error", error);
        }
    }

    async getallPost(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseid,
                conf.appwriteCollectionid,
                queries
            )
        } catch (error) {
            console.log("Appwrite Service :: getallPost :: error", error);
        }
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketid,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite Service :: uploadFile :: error", error);
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketid,
                fileId
            )
            return true;
        } catch (error) {
            console.log("Appwrite Service :: deleteFile :: error", error);
            return false;
        }
    }

    async getFilePreview(fileId){
        try {
            return this.bucket.getFilePreview(
                conf.appwriteBucketid,
                fileId
            )
        } catch (error) {
            console.log("Appwrite Service :: getFilePreview :: error", error);
        }
    }

}

const service = new Service();

export default service;