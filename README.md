This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.




### /// steps in the project ///

1.npm i mongoose react-icons


for backend
2. create a mongo cluster 
3.  Add ip 0.0.0.0/0  in network access of mongodb
4.  connect mongodb in vscode in libs/mongo.js

❓ Your doubt:
“In React with Express + Mongoose, when I cd backend and run the server, the terminal immediately shows DB connected — why doesn’t that happen in Next.js when I run npm run dev?”

In React + Express, you're running a custom backend (usually server.js or index.js) where you write:
That code runs immediately when the Node.js server starts — that's why you see "DB Connected" in the terminal as soon as the backend runs.

⚠️ But in Next.js App Router, it's different:
next dev starts a development server

It does not run your DB connection code by default

MongoDB only connects when a server-side route (API, SSR, server action) calls connectDB()

That’s why:

You don't see "DB Connected" automatically in the terminal like in Express.

## You’d need to call your connectDB() function somewhere server-side.

For example:

In an API route (/api/test)



5. creating schema in model

6. crud operation 
   i) insert and create
   ii) delete and edit 

7. in the crud operaton 
    we need an id   only for delete (app/api/topic/[id]/route.js )  and edit (app/edittopic/[id]page.jsx)
    no need for create and read(show) (app/api/topic/route.js)


8. in the edit route we need to make two api 
 i) for fetching the data and stroing the value in the form
 ii) updating the data