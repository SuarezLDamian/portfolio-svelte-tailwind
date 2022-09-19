<script lang="ts">
  import ProjectCard from "./ProjectCard.svelte";

  const projects = [
    {
      title: "Euphoria Club NFT Collection",
      description: "A landing page to mint pieces from a collection of 4,420 NFT artworks.",
      extra: "The Smart Contract is currently deployed on Ethereum Rinkeby testnet.",
      image: "./euphoriaclub.png",
      technologies: ["TypeScript", "React.js", "Next.js", "Solidity", "Hardhat", "Ethers.js", "Tailwind", "Vercel"],
      repository: "https://github.com/SuarezLDamian/euphoria-club-client",
      link: "https://euphoriaclub.net/",
    },
    {
      title: "NFTicket",
      description: "A DApp to buy NFT tickets for events.",
      extra: "The Smart Contract is currently deployed on Polygon Mumbai testnet.",
      image: "./nfticket.png",
      technologies: ["TypeScript", "React.js", "Next.js", "Solidity", "Hardhat", "Ethers.js", "Firebase", "GraphQL", "RainbowKit", "ChakraUI", "Vercel"],
      repository: "https://github.com/SuarezLDamian/nfticket-client",
      link: "https://nfticket-client.vercel.app/",
    },
    {
      title: "Kame House Comic Store",
      description: "Back end of a desktop app for a retail store with multiple branches.",
      extra: "The database is hosted on Microsoft Azure.",
      image: "./backend.jpg",
      technologies: [".NET", "C#", "SQL", "Azure"],
    }
  ]
</script>

<section id="projects" class="py-24 grid place-items-center bg-base-200">
  <h2 class="font-lato text-5xl font-bold text-sky-400 ">My projects</h2>
  <p class="font-lato text-xl sm:text-2xl px-24 mt-8">
    These are some of the most relevant projects I've worked on over the last months.
  </p>
  <div class="mt-12 sm:px-24 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-16">
    {#each projects as project}
      <ProjectCard 
        title={project.title}
        description={project.description}
        extra={project.extra}
        image={project.image}
        technologies={project.technologies}
        repository={project.repository}
        link={project.link}
      />
    {/each}
  </div>
</section>
