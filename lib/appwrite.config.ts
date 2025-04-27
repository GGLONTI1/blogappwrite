import { Client, Databases } from "appwrite";

if (!process.env.NEXT_PUBLIC_ENDPOINT || !process.env.PROJECT_ID) {
  throw new Error(
    "Environment variables NEXT_PUBLIC_ENDPOINT and NEXT_PUBLIC_PROJECT must be defined"
  );
}

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT)
  .setProject(process.env.PROJECT_ID);

const databases = new Databases(client);

export { databases };
