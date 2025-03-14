<svelte:head>
  <title>Kevin</title>
</svelte:head>


<body>
    <div>
        <header>Welcome to Kevin's Portfolio</header>
            <footer>
                <a href="https://github.com/Kevin-dgc" target="_blank">
                    <img src="/githubLogo.png" alt="GitHub Logo" width="50" height="50">
                </a>

                <a href="Résumé.pdf" target="_blank">
                    <img src="/res.png" alt="resume pdf" width="50" height="50" class="no-circle">
                </a>

                <a href="https://www.linkedin.com/in/kevingeierconney/" target="_blank">
                    <img src="/linkedInLogo.png" alt="LinkedIn Logo" width="50" height="50">
                </a>

                <pEmail>kevingeierconney@gmail.com</pEmail>

            </footer>
    </div>

    <div class="content-container">
        <div class="gallery-container">
            <div class="gallery-item">
                <h3>Spooky Name Generator</h3>
                <button onclick="window.location.href='/spooky'">
                    <img src="/spooky.png" alt="Project One" class="gallery-image">
                </button>
            </div>
        </div>
        
        <div class="text-content">
            <h2>About Me!</h2>
            <p>Hello I am a 2nd Semester CS major at CSUF!.</p>
            <p>I am an ACM Algorithm board member, I help lead workshops on data structures and algorithms!</p>
        </div>
    </div>
            
</body>


<style>
    @import './portfolio.css';
</style>





<script>

</script>
