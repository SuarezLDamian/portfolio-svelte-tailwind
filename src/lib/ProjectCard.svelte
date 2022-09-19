<script lang="ts">
  export let title:string;
  export let description:string;
  export let extra:string;
  export let image:string;
  export let technologies:string[];
  export let repository:string;
  export let link:string;
</script>

<div class="card card-compact w-96 bg-base-100 shadow-xl">
    <figure><img src={image} alt="Project" class="max-w-full max-h-56" /></figure>
    <div class="card-body">
      <h2 class="card-title">{title}</h2>
      <p>{description}</p>
      <p>{extra}</p>
      <div class="grid grid-cols-4 gap-2 justify-center items-center">
        {#each technologies as tech}
          <div class="badge badge-secondary">{tech}</div>
        {/each}
      </div>
      
      <div class="card-actions justify-center m-2">
        <div class="grid grid-cols-2 gap-4">
          {#if repository}
            <a class="btn btn-primary" href={repository} target="_blank">Repository</a>
          {:else}
            <a class="btn btn-disabled" href={repository} target="_blank">Repository</a>
          {/if}
          {#if link}
            <a class="btn btn-primary" href={link} target="_blank">Project</a>
          {:else}
            <a class="btn btn-disabled" href={link} target="_blank">Project</a>
          {/if}
        </div>
      </div>
    </div>
</div>