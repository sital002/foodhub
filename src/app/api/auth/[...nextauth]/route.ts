import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"


const handler = NextAuth({
    secret:process.env.NEXTAUTH_SECRET || "",
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID || "",
            clientSecret: process.env.GOOGLE_SECRET || "",
            }),
            GithubProvider({
                clientId: process.env.GITHUB_ID || "",
                clientSecret: process.env.GITHUB_SECRET || "",
            })
      ],
      theme: {
        colorScheme: "light", // "auto" | "dark" | "light"
        brandColor: "", // Hex color code
        logo: "", // Absolute URL to image
        buttonText: "" // Hex color code
      }



})

export { handler as GET, handler as POST }