<script>
    import '$lib/calendar/data.js';
    import { removeEvent } from '$lib/calendar/data.js';
    import { getData } from '$lib/calendar/data.js';


// Bind variables to each of the six text boxes
let name = '';

// This function is called when the "Add" button is clicked.
// It calls the imported function with the six parameters.
function handleRemove() {
    if(name == ''){ // change this to a unqiue ID instead of name str
        // tell user to input all data
    }
    else{
        removeEvent(name);
        name = '';
    }
}
</script>

<style>
  @import './calender_remove.css';
</style>
  
  <a href="/calander" class="back-button">← Back to Months</a>

  <div class="container">
    <!-- Each input is bound to a variable -->
    <input type="text" bind:value={name} placeholder="Name of Event to remove" />
  
    <!-- Clicking the button calls handleAdd, which in turn calls the imported function -->
    <button on:click={handleRemove}>Remove</button>
  </div>
