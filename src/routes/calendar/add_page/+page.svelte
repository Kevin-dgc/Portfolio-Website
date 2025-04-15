<script>
    import '$lib/calendar/data.js';
    import { addEvent } from '$lib/calendar/data.js';
    import { getData } from '$lib/calendar/data.js';


// Bind variables to each of the six text boxes
let org = '';
let name = '';
let date = '';
let time = '';
let link = '';
let description = '';

// This function is called when the "Add" button is clicked.
// It calls the imported function with the six parameters.
function handleAdd() {
    if(org == '' || name == '' || date == '' || time == '' || link == '' || description == ''){
        // tell user to input all data
    }
    else{
      let [year, month, day] = date.split('-'); // ["2025", "01", "01"]
      let cleanedDate = `${Number(month)}/${Number(day)}/${year}`; // "1/1/2025"
        addEvent(org, name, cleanedDate, time, link, description);
        org = '';
        name = '';
        date = '';
        time = '';
        link = '';
        description = '';
        // console.log("Current event list:", getData());
    }
}
</script>

<style>
    /* Basic styling for layout */
    .container {
      max-width: 600px;
      margin: 2rem auto;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    input {
      padding: 0.5rem;
      font-size: 1rem;
    }
    button {
      padding: 0.75rem;
      font-size: 1rem;
      cursor: pointer;
    }
    .back-button {
    display: inline-block;
    margin-bottom: 20px;
    text-decoration: none;
    color: #333;
    padding: 5px 10px;
    border-radius: 4px;
    background-color: #f0f0f0;
    }
  
    .back-button:hover {
    background-color: #e0e0e0;
    }
  </style>
  
  <a href="/calander" class="back-button">← Back to Months</a>
  <div class="container">
    <!-- Each input is bound to a variable -->
    <input type="text" bind:value={org} placeholder="Enter org name" />
    <input type="text" bind:value={name} placeholder="Enter name of event" />
    <input id="calendar" type="date" bind:value={date} />
    <input list="timeList" bind:value={time} name = "time" />
    <datalist id = "timeList">
      <option value = "8:00 AM"></option>
      <option value = "9:00 AM"></option>
      <option value = "10:00 AM"></option>
      <option value = "11:00 AM"></option>
      <option value = "12:00 PM"></option>
      <option value = "1:00 PM"></option>
      <option value = "2:00 PM"></option>
      <option value = "3:00 PM"></option>
      <option value = "4:00 PM"></option>
      <option value = "5:00 PM"></option>
      <option value = "6:00 PM"></option>
      <option value = "7:00 PM"></option>
      <option value = "8:00 PM"></option>
    </datalist>
    <input type="text" bind:value={link} placeholder="Enter link to social" />
    <input type="text" bind:value={description} placeholder="Enter description of event" />
  
    <!-- Clicking the button calls handleAdd, which in turn calls the imported function -->
    <button on:click={handleAdd}>Add</button>
  </div>
