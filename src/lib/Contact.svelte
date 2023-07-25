<script lang="ts">
  import ContactForm from "./ContactForm.svelte";
</script>

<section id="contact" class="px-12 py-24 grid place-items-center bg-base-200">
    <h2 class="text-5xl text-sky-400 font-bold font-lato mb-8">Contact</h2>
    <p class="text-xl sm:text-2xl font-lato">
        I'm always open to new opportunities. <br> Feel free to contact me here:
    </p>
    <div class="my-12 grid grid-cols-2 gap-8">
        <a class="flex flex-col items-center" href="https://linkedin.com/in/leonardo-damian-suarez/" target="_blank">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="Linkedin" height="65px" width="65px"/>
            <p class="font-bold mt-4">Linkedin</p>
        </a>
        <a class="flex flex-col items-center" href="https://github.com/SuarezLDamian/" target="_blank">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" height="65px" width="65px"/>
            <p class="font-bold mt-4">GitHub</p>
        </a>
    </div>
    <ContactForm/>
</section>