function head(title) {
    document.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="head bg1"><h1>${title}</h1></div>`);
}

function navigation() {
    document.write(`<div class="navigation bg2"></div>`);
}

function post() {
        document.write(`<div class="post bg3"></div>`);
}

function aside() {
     document.write(`<div class="aside bg4"></div>`);
}

function footer() {
    document.write(`<div class="footer bg1"></div>
    
    </body>
    </html>`);
    
}