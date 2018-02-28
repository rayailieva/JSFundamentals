function solve([text]) {

    text = text.replace(/\s*([.,!?:;])\s*/g,
        (match, g1) => `${g1} `);

    text = text.replace(/\s+([.,!?:;])/g,
        (match,g1) => ' ');

    text = text.replace(/\.\s*\.\s*\.\s*!/g, "...!");

    text = text.replace(/\.\s+(\d+)/g,
        (match, g1) => `.${g1}`);

    text = text.replace(/"\s*([^\"]+)\s*"/g,
        (match, g1) => `"${g1.trim()}"`);


    console.log(text);
}

solve([`Terribly formatted text . With chaotic spacings." Terrible quoting "! Also
this date is pretty confusing : 20 . 12. 16 .
`]);
solve([`Make,sure to give:proper spacing where is needed... !`]);