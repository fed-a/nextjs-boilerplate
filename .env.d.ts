declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_BASE_URL: string;
    DATABASE_URL: string;
    NEXTAUTH_URL: string;
    NEXTAUTH_SECRET: string;
    GITHUB_ID: string;
    GITHUB_SECRET: string;
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
  }
}
