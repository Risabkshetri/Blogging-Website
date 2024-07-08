import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
            
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
               return  userAccount;
            }
        } catch (error) {
          console.log("AppwriteService :: createAccount :: error", error);
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
          console.log("AppwriteService :: login :: error", error);
        }
    }

    // async getCurrentUser() {
    //     try {
    //         return await this.account.get();
    //     } catch (error) {
    //         console.log("AppwriteService :: getCurrentUser :: error", error);
    //     }

    //     return null;
    // }
    async getCurrentUser() {
        try {
            const session = await this.account.getSession('current');
            if (session) {
                return await this.account.get();
            }
        } catch (error) {
            console.log("AppwriteService :: getCurrentUser :: error", error);
        }
        return null;
    }
    

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("AppwriteService :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService



// import conf from '../conf/conf.js';
// import { Client, Account, ID } from 'appwrite';

// class AuthService {
//   client = new Client();
//   account;

//   constructor() {
//     this.client
//       .setEndpoint(conf.appwriteUrl) // Ensure this URL is correct
//       .setProject(conf.appwriteProjectId); // Ensure this Project ID is correct
//     this.account = new Account(this.client);
//   }

//   async createAccount({ email, password, name }) {
//     try {
//       const userAccount = await this.account.create(ID.unique(), email, password, name);
//       if (userAccount) {
//         return this.login({ email, password });
//       } else {
//         return userAccount;
//       }
//     } catch (error) {
//       console.error('AuthService :: createAccount :: error', error);
//       throw error;
//     }
//   }

//   async login({ email, password }) {
//     try {
//       return await this.account.createEmailPasswordSession(email, password);
//     } catch (error) {
//       console.error('AuthService :: login :: error', error);
//       throw error;
//     }
//   }

//   async getCurrentUser() {
//     try {
//       return await this.account.get();
//     } catch (error) {
//       console.error('AuthService :: getCurrentUser :: error', error);
//       return null;
//     }
//   }

//   async logout() {
//     try {
//       await this.account.deleteSessions();
//     } catch (error) {
//       console.error('AuthService :: logout :: error', error);
//     }
//   }
// }

// const authService = new AuthService();

// export default authService;
