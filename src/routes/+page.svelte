<script>

</script>


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
</body>


<style>

:root{
    --blue: #0D3B66;
    --eggshell: #FAF0CA;
    --yellow: #F4D35E;
    --orange: #EE964B;
    --tomato: #F95738;
    --mainFont: font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

body {
    background-color: var(--eggshell);
}

header {
    background-color: var(--yellow);
    font-family: var(--mainFont);
    border-radius: .25em;
    text-align: center;
    font-size: 3em;
    width: 32%; 
    margin: 25px auto 0 auto;
}

footer {
    user-select: none;
    font-family: var(--mainFont);
    background-color: var(--yellow);
    border-radius: .5em;
    color: black;
    text-align: center;
    font-size: 1em;
    position: fixed;
    bottom: 15px; 
    width: 15%;
    left: 50%;
    transform: translateX(-50%);
}

footer a {
    margin: 0 10px;
}

footer img {
    vertical-align: middle;
    border-radius: 50%;
    margin-top: 10px;
    margin-bottom: 10px;
    user-select: none;
}

footer img.no-circle {
    user-select: none;
    border-radius: 0;
}

pEmail {
    user-select: all;
    vertical-align: top;
    margin-top: 10px;
    margin-bottom: 10px;
}

</style>