<!-- src/lib/ImageCard.svelte -->

<script>
  export let image; // Image URL prop
  export let title; // Title prop
  export let description; // Description prop
</script>

<div class="card">
  <img src={image} alt={title} />
  <div class="card-content">
    <h2 class="card-title">{title}</h2>
    <p class="card-description">{description}</p>
  </div>
</div>

<style>
  .card {
    background-color: #9E9E8F;
    border: 1px solid #ddd;
    border-radius: 10px;
    overflow: hidden;
    width: 300px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 20px;
    text-align: center;
  }

  .card img {
    width: 100%;
    height: auto;
  }

  .card-content {
    padding: 5px;
  }

  .card-title {
    font-size: 1.5em;
    color: white;
    margin: 0 0 10px 0;
  }

  .card-description {
    font-size: 1.3em;
    color: white;
    margin: 0;
  }
</style>
