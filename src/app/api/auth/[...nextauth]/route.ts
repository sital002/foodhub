import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { User } from "@/database/models/UserModel";
import { connectToDB } from "@/database/database";

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET || "",
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
  ],
  callbacks: {
    async session({ session }) {
      await connectToDB();
      // store the user id from MongoDB to session
      const sessionUser = await User.findOne({ email: session?.user?.email });
      console.log("Session User", sessionUser);
      session.user.id = sessionUser._id.toString()!;

      console.log("Session", session);
      return session;
    },
    async signIn({ account, profile, user, credentials }) {
      try {
        await connectToDB();

        // check if user already exists
        const userExists = await User.findOne({ email: profile?.email });

        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          await User.create({
            email: profile?.email,
            profile: {
              url: profile?.avatar_url,
            },
            name: profile?.name,
          });
        }

        return true;
      } catch (error: any) {
        console.log("Error checking if user exists: ", error.message);
        return false;
      }
    },
  },
  theme: {
    colorScheme: "light", // "auto" | "dark" | "light"
    brandColor: "", // Hex color code
    logo: "", // Absolute URL to image
    buttonText: "", // Hex color code
  },
});

export { handler as GET, handler as POST };
