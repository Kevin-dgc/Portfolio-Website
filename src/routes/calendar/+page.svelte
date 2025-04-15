<!-- 12 month view -->

<script>
    import "$lib/calendar/data.js";
    const months = [   
      { name: "Jan", num: 1, days: 31, img: "months/1.png"},   
    { name: "Feb", num: 2, days: 28, img: "months/2.png"},   
    { name: "Mar", num: 3, days: 31, img: "months/3.png"},   
    { name: "Apr", num: 4, days: 30, img: "months/4.png"},   
    { name: "May", num: 5, days: 31, img: "months/5.png"},   
    { name: "Jun", num: 6, days: 30, img: "months/6.png"},   
    { name: "Jul", num: 7, days: 31, img: "months/7.png"},   
    { name: "Aug", num: 8, days: 31, img: "months/8.png"},   
    { name: "Sep", num: 9, days: 30, img: "months/9.png"},   
    { name: "Oct", num: 10, days: 31, img: "months/10.png"},  
    { name: "Nov", num: 11, days: 30, img: "months/11.png"},   
    { name: "Dec", num: 12, days: 31, img: "months/12.png"} ]

const currentYear = new Date().getFullYear();

  
</script>
<div class="back-button">
  <button class="back-button" onclick="window.location.href='/'">
    ← Back to Home Page
  </button>
</div>

<h1> Year {currentYear}</h1>

<div class="months-grid">
    {#each months as month, i}
      <a href="/calendar/month?monthIndex={i}" class="month-card">
        <h2>
          <img alt="{month.name}" src="calendar/{month.img}" style="max-width: 100%; height: auto;" />
          <!-- <div class="month-name">{month.name}</div> -->
        </h2>
      </a>
    {/each}
</div>

<footer class="footer">
  <!-- Add / Remove Button -->

  <!-- Add -->
  <a href="/calendar/add_page" class="add_button"> 
    <h2> Add</h2>
  </a>

  <!-- Remove -->
  <a href="/calendar/remove_page" class="add_button"> 
    <h2> Remove</h2>
  </a>
</footer>

<style>
  
  .months-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    max-width: 1000px;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    .months-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  .month-card {
    background-color: #f5f5f500;
    border-radius: 8px;
    padding: 5px;
    text-align: center;
    text-decoration: none;
    color: #333;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0);
    transition: transform 0.2s ease-in-out;
  }
  
  .month-card:hover {
    transform: translateY(-5px);
  }
  
  h1 {
    text-align: center;
    margin-bottom: 40px;
    color: white;
  }
  
  h2 {
    margin: 0;
    color: white;
  }
  
  /* .month-name {
    margin-top: 5px;
    font-size: 1.2rem;
  } */

  .footer {
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: center;
  }
  .add_button{
    text-align: center;
  }
  /* .total {
    background-image: url('calendar/frontPageBG.png');
    background-size: cover;
    min-height: 100vh;
    background-repeat: no-repeat;
    background-position: center center;
  } */
  :global(body) {
    background-image: url('calendar/frontPageBG.png');
    background-size: cover;
  }
  .back-button {
    background: none;
    background-color: transparent;
    color: white;
    position: relative;
    left: 2px;
  }
</style>