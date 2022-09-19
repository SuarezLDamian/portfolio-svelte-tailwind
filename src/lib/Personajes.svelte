<script lang="ts">
    let personajes = fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(data => (personajes = data.results))
</script>

{#each personajes as personaje}
    <h1>{personaje?.name}</h1>
    <img src={personaje?.image} alt="personaje"/>
{/each}