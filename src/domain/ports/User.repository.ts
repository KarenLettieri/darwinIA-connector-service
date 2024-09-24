export interface UserRepository {
  createUser(expense: any): Promise<void>;
  getUserByProviderId(providerId: string): Promise<any>;
}
