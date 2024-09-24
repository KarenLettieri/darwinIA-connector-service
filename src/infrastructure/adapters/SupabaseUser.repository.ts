import { createClient, SupabaseClient } from "@supabase/supabase-js";

import { UserRepository } from "../../domain/ports/User.repository";

export class SupabaseUserRepository implements UserRepository {
  private supabaseClient: SupabaseClient;

  private constructor() {
    this.supabaseClient = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_KEY!,
    );
  }
  async createUser(user: any) {
    const { data, error } = await this.supabaseClient.from("users").insert([
      {
        provider_id: user.provider_id,
        provider: user.provider,
        email: user.email,
        name: user.name,
        picture: user.picture,
      },
    ]);
    if (error) {
      console.error("Error al insertar el usuario:", error);
    }
  }

  async getUserByProviderId(providerId: string) {
    try {
      const { data, error } = await this.supabaseClient
        .from("users")
        .select("*")
        .eq("telegram_id", providerId);
      if (error) {
        throw new Error("Error al obtener el usuario:" + error.message);
      }
      return data[0];
    } catch (error) {
      console.error("Error al obtener el usuario:", error);
      return null;
    }
  }

  static create() {
    return new SupabaseUserRepository();
  }
}
