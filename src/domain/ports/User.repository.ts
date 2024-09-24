import { User } from "../entities/User";

export interface UserRepository {
  createUser(user: Partial<User>): Promise<void>;
  getUserByProviderId(providerId: string): Promise<User | null>;
}
