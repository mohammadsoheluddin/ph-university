PH University Project

A.     Project Details:
        1. This is backend based project.
        2. I've made this using express, mongoose, typescript.
        3. There mainly three part admin, faculty and student.
        4. I've used mongodb database management system.
        5. Used ESLint and Prettier for the purpose of formatting and correctting project code.
        6. I've made interface, schema, model, controller, service file respectively for student purpose.
        7. After that we make a connection with mongodb database.

B.     Necessary dependencies and dev-dependencies for this project:
        1. npm init -y
        2. npm install express
        3. npm install mongoose --save
        4. npm install typescript --save-dev
        5. npm i cors
        6. npm i --save-dev @types/cors
        7. npm i dotenv
        8. npx tsc -init
        9. npm i --save-dev @types/node
        10. npm i --save-dev @types/express
        11. npm i ts-node-dev --save-dev
        12. npm i validator
        13. npm i @types/validator
        14. npm install zod
        15. npm i bcrypt (for password encryption purpose)
        16. npm install --save @types/bcrypt
        17. npm i http-status (npm)

C.     Some Common Command:
        1. npm run build (tsc)
        2. npx tsc --version
        3. npm run start-dev (ts-node-dev --respawn --transpile-only src/server.ts)
        4. npx tsc src/index.ts

D.     ESLint Setup:
        1.      Add the following code at the top of tsconfig.json
                a. "include": ["src"], // which files to compile
                b. "exclude": ["node_modules"], // which files to skipInstall ESLint using:
        2.     npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
        3.     ESLint Initialization: npx eslint --init (npm init @eslint/config)
        4.     Some package.json script: 
                a. "start.prod": "node ./dist/server.js",
                b. "start-dev": "ts-node-dev --respawn --transpile-only src/server.ts",
                c. "build": "tsc",
                d. "lint": "npx eslint src --ignore-pattern .ts",
                e. "lint:fix": "npx eslint src --fix",
                f. "prettier": "prettier --ignore-path .gitignore --write \"./src/**/*.+(js|ts|json)\"",
                g. "prettier:fix": "npx prettier --write src",
        5.      Check Error, Warning and fixing ESLint Context:
                a. npm run lint
                b. npm run lint --fix

E.    Prettier Setup:
        1.    Install Prettier: npm install --save-dev prettier
        2.    Create a file in root directory of your project including following code (.prettierrc.json)
              //{
                //"semi": true,
                //"singleQuote": true
              //}
        3.    Using following command code will be formatted: 
                a. npm run prettier
                b. npm run prettier:fix
        4.    Avoiding Conflict between ESLint and Prettier: npm install --save-dev eslint-config-prettier
    
F.    Important Functon and other things what should remember for next any project:
        a. next(err), 4 middleware (err, req, res, next), NextFunction
        b. http status (npm)

G.    Vercel Deployment Process:
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

H.    Recap Vercel Deployment at a glance:
        1.    ESLint (forgot why write this)
        2.    vercel.json
        3.    src/app.ts, server.ts 
        4.    npm i -g vercel
        5.    vercel -v
        6.    vercel login
        7.    vercel --prod
        8.    Inspect link
I.    Project Summary:
