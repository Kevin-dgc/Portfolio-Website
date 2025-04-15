<!-- 30 day view -->

<script>
    import { page } from '$app/stores';
    import { fetchJSON } from '$lib/calendar/data.js';

    fetchJSON();

    const months = [   
      { name: "January", num: 1, days: 31, img: "months/1BGRemove.png"},   
      { name: "February", num: 2, days: 28, img: "months/2.png"},   
      { name: "March", num: 3, days: 31, img: "months/3.png"},   
      { name: "April", num: 4, days: 30, img: "months/4.png"},   
      { name: "May", num: 5, days: 31, img: "months/5.png"},   
      { name: "June", num: 6, days: 30, img: "months/6.png"},   
      { name: "July", num: 7, days: 31, img: "months/7.png"},   
      { name: "August", num: 8, days: 31, img: "months/8.png"},   
      { name: "September", num: 9, days: 30, img: "months/9.png"},   
      { name: "October", num: 10, days: 31, img: "months/10.png"},  
      { name: "November", num: 11, days: 30, img: "months/11.png"},   
      { name: "December", num: 12, days: 31, img: "months/12.png"} 
    ];

    const currentYear = new Date().getFullYear();
    
    $: monthIndex = parseInt($page.url.searchParams.get('monthIndex') || '0');
    $: selectedMonth = months[monthIndex];

    $: days = Array.from({ length: selectedMonth.days }, (_, i) => i + 1);
    $: monthNums = Array.from({ length: selectedMonth.num }, (_, i) => i + 1);

    
    $: firstDayOfMonth = new Date(currentYear, selectedMonth.num - 1, 1).getDay();
    $: blankDays = Array(firstDayOfMonth).fill(null);

    let date = "3/10/10"
  </script>
<div class="total">
  <div class="calendar-container">
    <a href="/calendar" class="back-button">← Back to Months</a>
    <h1>{selectedMonth.name} {currentYear}</h1>
    
    <div class="calendar">
      <div class="weekday-labels">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      
      <div class="days-grid">
        {#each blankDays as _, i}
          <div class="day blank"></div>
        {/each}
        
        {#each days as day, i}
          <a href={`/calendar/month/day?date=${selectedMonth.num}/${day}/${currentYear}`}>
            <div class="day">
              <div class="day-number">{day}</div>
            </div>
          </a>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  @import './calender_month.css';
</style>
