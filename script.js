
// SEKCIA 1 kontrola

document.getElementById('button1').addEventListener('click', function() {
    if(document.getElementById('input1').value === "20") {
        document.getElementById('section1').style.display = 'none';
        document.getElementById('section2').style.display = 'block';
    } else {
        alert('Wrong Answer');
    }
});

// SEKCIA 2 kontrola

document.getElementById('button2').addEventListener('click', function() {
    let input2Value = parseInt(document.getElementById('input2').value);
    let input3Value = parseInt(document.getElementById('input3').value);
    if(input2Value + input3Value === 25) {
        document.getElementById('section2').style.display = 'none';
        document.getElementById('section3').style.display = 'block';
    } else {
        alert('Wrong Answer');
    }
});

// SEKCIA 3 kontrola

let correctValues = [false, true, true, true, false]; // Correct answers to the questions.

function drawFace(canvasId, smile) {
    var c = document.getElementById(canvasId);
    var ctx = c.getContext("2d");

    // Draw face
    ctx.beginPath();
    ctx.arc(200, 200, 100, 0, Math.PI*2, true); // Outer circle
    ctx.fillStyle = '#FFFF00'; // Yellow
    ctx.fill();
    ctx.stroke();

    // Left eye
    ctx.beginPath();
    ctx.arc(150, 175, 20, 0, Math.PI*2, true); // Left eye
    ctx.fillStyle = 'black'; // Black
    ctx.fill();

    // Right eye
    ctx.beginPath();
    ctx.arc(250, 175, 20, 0, Math.PI*2, true); // Right eye
    ctx.fillStyle = 'black'; // Black
    ctx.fill();

    // Draw smile or sad face
    ctx.beginPath();
    if(smile) {
        ctx.arc(200, 210, 50, 0, Math.PI, false);  // Smile
    } else {
        ctx.moveTo(150, 210);
        ctx.arc(200, 210, 50, Math.PI, 0, true);  // Sad face
    }
    ctx.stroke();
}

document.getElementById('button3').addEventListener('click', function() {
    let allCorrect = true;

    for(let i = 0; i < correctValues.length; i++) {
        let checkbox = document.getElementById(`checkbox${i}`);
        
        // Check if the checkbox is checked and if the answer is correct
        if(checkbox.checked !== correctValues[i]) {
            allCorrect = false;
            break;
        }
    }

    document.getElementById('section3').style.display = 'none';

    if(allCorrect) {
        // If all answers are correct, draw a smiling face.
        drawFace('myCanvasCorrect', true);
        document.getElementById('sectionCorrect').style.display = 'block';
    } else { drawFace('myCanvasIncorrect', false);
    document.getElementById('sectionIncorrect').style.display = 'block';
}
});