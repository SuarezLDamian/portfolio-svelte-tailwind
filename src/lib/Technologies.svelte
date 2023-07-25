<script lang="ts">

    const frontend = [
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            name: "HTML5"
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            name: "CSS3"
        },    
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            name: "JavaScript"
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
            name: "TypeScript"
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
            name: "Next.js"
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            name: "React.js"
        },
        {
            image: "./blazor.png",
            name: "Blazor"
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            name: "React Native"
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
            name: "Svelte"
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg",
            name: "Electron"
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
            name: "Redux"
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
            name: "GraphQL"
        },
        {
            image: "./ethers.svg",
            name: "Ethers.js"
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
            name: "Sass"
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
            name: "Bootstrap"
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
            name: "Tailwind CSS"
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
            name: "Material UI"
        },
        {
            image: "./antd.svg",
            name: "Ant Design"
        },
        {
            image: "./chakra.svg",
            name: "Chakra UI"
        },        
    ]

    const backend = [
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            name: "JavaScript"
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
            name: "TypeScript"
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            name: "Node.js"
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
            name: "Express"
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
            name: "C#"
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
            name: ".NET Core"
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
            name: ".NET Framework"
        },
    ]

    const smartContracts = [
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",
            name: "Solidity"
        },
        {
            image: "./hardhat.svg",
            name: "Hardhat"
        },
        {
            image: "./truffle.svg",
            name: "Truffle"
        },
        {
            image: "./the-graph.svg",
            name: "The Graph"
        },
        {
            image: "./infura_logo_black.svg",
            name: "Infura"
        },
        {
            image: "./alchemy.png",
            name: "Alchemy"
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/polygon/polygon-original.svg",
            name: "Polygon"
        },
    ]

    const testing = [
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg",
            name: "Mocha"
        },
        {
            image: "./chai.svg",
            name: "Chai"
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
            name: "Jest"
        }
    ]

    const databases = [
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
            name: "SQL Server"
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
            name: "MySQL"
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
            name: "PostgreSQL"
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            name: "MongoDB"
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
            name: "Firebase"
        },
    ]

    const infrastructure = [
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
            name: "AWS"
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
            name: "Azure"
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg",
            name: "Heroku"
        },
        {
            image: "./vercel.svg",
            name: "Vercel"
        },
    ]

    const tools = [

        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
            name: "Git"
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
            name: "Github"
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg",
            name: "Bitbucket"
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
            name: "Jenkins"
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
            name: "Docker"
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
            name: "Jira"
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg",
            name: "Confluence"
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg",
            name: "Trello"
        },
        {
            image: "./notion.svg",
            name: "Notion"
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
            name: "Webpack"
        },
        {
            image: "./vite.svg",
            name: "Vite"
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
            name: "npm"
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg",
            name: "Yarn"
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuget/nuget-original.svg",
            name: "NuGet"
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg",
            name: "eslint"
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
            name: "VS Code"
        },
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg",
            name: "Visual Studio"
        },
        {
            image: "./macos.svg",
            name: "Mac OS"
        },  
        {
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
            name: "Windows"
        },  
    ]
</script>

<section id="technologies" class="px-12 py-24 grid place-items-center">
    <h2 class="font-lato text-5xl font-bold text-sky-400">Technologies</h2>
    <p class="font-lato text-xl sm:text-2xl my-8">
        Throughout my career I have used a wide variety of languages, frameworks and tools. <br>
        I'm comfortable working with:
    </p>
    <p class="font-lato text-2xl sm:text-3xl font-bold text-sky-400">
        Front-end
    </p>
    <div class="my-12 grid grid-cols-2 sm:grid-cols-4 gap-8 place-items-center">
        {#each frontend as technology}
            <div class="flex flex-col items-center">
                <img src={technology.image} alt={technology.name} height="65px" width="65px"/>
                <p class="font-bold mt-4">{technology.name}</p>
            </div>
        {/each}
    </div>
    <p class="mt-6 font-lato text-2xl sm:text-3xl font-bold text-sky-400">
        Back-end
    </p>
    <div class="my-12 grid grid-cols-2 sm:grid-cols-4 gap-8 place-items-center">
        {#each backend as technology}
            <div class="flex flex-col items-center">
                <img src={technology.image} alt={technology.name} height="65px" width="65px"/>
                <p class="font-bold mt-4">{technology.name}</p>
            </div>
        {/each}
    </div>
    <p class="mt-6 font-lato text-2xl sm:text-3xl font-bold text-sky-400">
        Smart Contracts
    </p>
    <div class="my-12 grid grid-cols-2 sm:grid-cols-4 gap-8 place-items-center">
        {#each smartContracts as technology}
            <div class="flex flex-col items-center justify-between">
                <img src={technology.image} alt={technology.name} height="65px" width="65px"/>
                <p class="font-bold mt-4">{technology.name}</p>
            </div>
        {/each}
    </div>
    <p class="mt-6 font-lato text-2xl sm:text-3xl font-bold text-sky-400">
        Testing
    </p>
    <div class="my-12 grid grid-cols-2 sm:grid-cols-3 gap-8 place-items-center">
        {#each testing as technology}
            <div class="flex flex-col items-center">
                <img src={technology.image} alt={technology.name} height="65px" width="65px"/>
                <p class="font-bold mt-4">{technology.name}</p>
            </div>
        {/each}
    </div>
    <p class="mt-6 font-lato text-2xl sm:text-3xl font-bold text-sky-400">
        Databases
    </p>
    <div class="my-12 grid grid-cols-2 sm:grid-cols-3 gap-8 place-items-center">
        {#each databases as technology}
            <div class="flex flex-col items-center">
                <img src={technology.image} alt={technology.name} height="65px" width="65px"/>
                <p class="font-bold mt-4">{technology.name}</p>
            </div>
        {/each}
    </div>
    <p class="mt-6 font-lato text-2xl sm:text-3xl font-bold text-sky-400">
        Infrastructure
    </p>
    <div class="my-12 grid grid-cols-2 sm:grid-cols-4 gap-8 place-items-center">
        {#each infrastructure as technology}
            <div class="flex flex-col items-center">
                <img src={technology.image} alt={technology.name} height="65px" width="65px"/>
                <p class="font-bold mt-4">{technology.name}</p>
            </div>
        {/each}
    </div>
    <p class="mt-6 font-lato text-2xl sm:text-3xl font-bold text-sky-400">
        Other tools
    </p>
    <div class="my-12 grid grid-cols-2 sm:grid-cols-4 gap-8 place-items-center">
        {#each tools as technology}
            <div class="flex flex-col items-center">
                <img src={technology.image} alt={technology.name} height="65px" width="65px"/>
                <p class="font-bold mt-4">{technology.name}</p>
            </div>
        {/each}
    </div>
</section>

