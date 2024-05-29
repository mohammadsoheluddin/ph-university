PH University Project

1. This is backend based project.
2. I've made this using express, mongoose, typescript.
3. There mainly three part admin, faculty and student.
4. I've used mongodb database management system.
5. Used ESLint and Prettier for the purpose of formatting and correctting project code.
6. I've made interface, schema, model, controller, service file respectively for student purpose.
7. After that we make a connection with mongodb database.

// Necessary dependencies and dev-dependencies for this project //
npm init -y
npm install express
npm install mongoose --save
npm install typescript --save-dev
npm i cors
npm i --save-dev @types/cors
npm i dotenv
npx tsc -init
npm i --save-dev @types/node
npm i --save-dev @types/express
npm i ts-node-dev --save-dev
npm i validator
npm i @types/validator
npm install zod
npm i bcrypt (for password encryption purpose)
npm install --save @types/bcrypt
npm i http-status (npm)

// Some Run Command //
npm run build (tsc)
npx tsc --version
npm run start-dev (ts-node-dev --respawn --transpile-only src/server.ts)
npx tsc src/index.ts

// ESLint Setup //
==> Add the following code at the top on tsconfig.json
    "include": ["src"], // which files to compile
    "exclude": ["node_modules"], // which files to skip
==> Install ESLint using:
    npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
==> For ESLint Initialization:
    npx eslint --init (npm init @eslint/config)
==> Some package.json script
    "start.prod": "node ./dist/server.js",
    "start-dev": "ts-node-dev --respawn --transpile-only src/server.ts",
    "build": "tsc",
    "lint": "npx eslint src --ignore-pattern .ts",
    "lint:fix": "npx eslint src --fix",
    "prettier": "prettier --ignore-path .gitignore --write \"./src/**/*.+(js|ts|json)\"",
    "prettier:fix": "npx prettier --write src",
==> Check Error and Warning with fixing
    npm run lint
    npm run lint --fix

// Prettier Setup //
==> Install Prettier:
    npm install --save-dev prettier
==> Create a file in root directory of your project folder including following code (.prettierrc.json)
    {
        "semi": true,
        "singleQuote": true
    }
==> Using following command code will be formatted
    npm run prettier
    npm run prettier:fix
==> Protecting Conflict between ESLint and Prettier:
    npm install --save-dev eslint-config-prettier


==> next(err), 4 middleware (err, req, res, next), NextFunction
==> http status (npm)

// Vercel Deployment Process //
1. Create a vercel.json file including following code (see the code above in vercel.json) align with package.json
2. Vercel CLI Install: npm i -g vercel
3. Check vercel version: vercel -v
4. Give Command: vercel login
5. Select GibHub From multiple options
6. We will see success then
7. Give Command: vercel --prod
8. Write: yes
9. Select Option: Write NO beside existing project
10. Give your project name: ecommerce-backend
11. Location just enter do not try to write anything
12. Due to ignore (---)
13. Click on inspect: link visit
14. After clicking on inspect: link then, In vercel Website:
15. You see there your project name and click on it
16. Then you will see project in navigation bar, click on project, then you will see a production link under Domain click on this production link to see your project live.
17. Or you can copy the link and paste in browser to check it working or not.

Recap:
ESLint
vercel.json
src/app.ts, server.ts
npm i -g vercel
vercel -v
vercel login
vercel --prod
Inspect link
