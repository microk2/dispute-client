export class Client {
  public static get isProduction(): boolean {
    return process.env.NODE_ENV === "production";
  }

  public static get allowedOrigins(): string[] {
    // Only allow requests coming from Gamepoints.
    const origins: string[] = ["http://gamepoints.org"];

    // Localhost for testing in development mode
    if (!Client.isProduction) {
      origins.push("http://localhost");
    }

    return origins;
  }
}
