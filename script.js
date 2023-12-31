
let selectedElement = null;

// Event listener for mouse clicks on the canvas
document.getElementById('canvas').addEventListener('mousedown', function (event) {
    const target = event.target;

    if (target.classList.contains('shape') || target.tagName === 'IMG') {
        selectedElement = target;
    } else if (window.getSelection().toString() !== '') {
        selectedElement = window.getSelection().focusNode.parentNode;
    } else {
        selectedElement = null;
    }
});

// Format bar functions



function updateText() {
    const textInput = document.getElementById('textInput').value;
    if (selectedElement) {
        selectedElement.innerText = textInput;
    } else {
        document.getElementById('canvas').innerText = textInput;
    }
}

function updateHeight() {
    const heightInput = document.getElementById('heightInput').value;
    if (selectedElement) {
        selectedElement.style.height = heightInput + 'px';
    } else {
        document.getElementById('canvas').style.height = heightInput + 'px';
    }
}

function updateWidth() {
    const widthInput = document.getElementById('widthInput').value;
    if (selectedElement) {
        selectedElement.style.width = widthInput + 'px';
    } else {
        document.getElementById('canvas').style.width = widthInput + 'px';
    }
}

function updatePadding() {
    const paddingInput = document.getElementById('paddingInput').value;
    if (selectedElement) {
        selectedElement.style.padding = paddingInput + 'px';
    } else {
        document.getElementById('canvas').style.padding = paddingInput + 'px';
    }
}

function applyStyle(style) {
    if (selectedElement) {
        selectedElement.style[style] = style === 'underline' || style === 'strikeThrough' ?
            'none' : 'normal';
    } else {
        document.execCommand(style, false, null);
    }
}

function executeCommand(command) {
    document.execCommand(command, false, null);
}

function updateShadowSize() {
    const shadowSizeInput = document.getElementById('shadowSizeInput').value;
    if (selectedElement) {
        selectedElement.style.boxShadow = `0 0 ${shadowSizeInput}px rgba(0, 0, 0, 0.5)`;
    } else {
        document.getElementById('canvas').style.boxShadow = `0 0 ${shadowSizeInput}px rgba(0, 0, 0, 0.5)`;
    }
}

function updateRotate() {
    const rotateInput = document.getElementById('rotateInput').value;
    if (selectedElement) {
        selectedElement.style.transform = `rotate(${rotateInput}deg)`;
    } else {
        document.getElementById('canvas').style.transform = `rotate(${rotateInput}deg)`;
    }
}

function updateFontFamily() {
    const fontFamilyInput = document.getElementById('fontFamilyInput').value;
    if (selectedElement) {
        selectedElement.style.fontFamily = fontFamilyInput;
    } else {
        document.getElementById('canvas').style.fontFamily = fontFamilyInput;
    }
}

function updateFontSize() {
    const fontSizeInput = document.getElementById('fontSizeInput').value;
    if (selectedElement) {
        selectedElement.style.fontSize = fontSizeInput + 'px';
    } else {
        document.getElementById('canvas').style.fontSize = fontSizeInput + 'px';
    }
}

function updateBackgroundColor() {
    const backgroundColorInput = document.getElementById('backgroundColorInput').value;
    if (selectedElement) {
        selectedElement.style.backgroundColor = backgroundColorInput;
    } else {
        document.getElementById('canvas').style.backgroundColor = backgroundColorInput;
    }
}

function updateColor() {
    const colorInput = document.getElementById('colorInput').value;
    if (selectedElement) {
        selectedElement.style.color = colorInput;
    } else {
        document.getElementById('canvas').style.color = colorInput;
    }
}

function updateBorderRadius() {
    const borderRadiusInput = document.getElementById('borderRadiusInput').value;
    if (selectedElement) {
        selectedElement.style.borderRadius = borderRadiusInput + 'px';
    } else {
        document.getElementById('canvas').style.borderRadius = borderRadiusInput + 'px';
    }
}

// File and shape insertion functions

function insertImage() {
    const imageInput = document.getElementById('imageInput');
    const canvas = document.getElementById('canvas');

    if (imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const img = new Image();
            img.src = e.target.result;
            if (selectedElement) {
                selectedElement.appendChild(img);
            } else {
                canvas.appendChild(img);
            }
        };

        reader.readAsDataURL(imageInput.files[0]);
    }
}

function insertCircle() {
    const canvas = document.getElementById('canvas');
    const circle = document.createElement('div');
    circle.classList.add('shape', 'circle');
    if (selectedElement) {
        selectedElement.appendChild(circle);
    } else {
        canvas.appendChild(circle);
    }
}

function insertRectangle() {
    const canvas = document.getElementById('canvas');
    const rectangle = document.createElement('div');
    rectangle.classList.add('shape', 'rectangle');
    if (selectedElement) {
        selectedElement.appendChild(rectangle);
    } else {
        canvas.appendChild(rectangle);
    }
}

function insertTriangle() {
    const canvas = document.getElementById('canvas');
    const triangle = document.createElement('div');
    triangle.classList.add('shape', 'triangle');
    if (selectedElement) {
        selectedElement.appendChild(triangle);
    } else {
        canvas.appendChild(triangle);
    }
}
function moveElement(direction) {
    if (selectedElement) {
        let left = parseFloat(selectedElement.style.left) || 0;
        let top = parseFloat(selectedElement.style.top) || 0;

        // Check if the selected element has child images
        const images = selectedElement.querySelectorAll('img.movable');

        switch (direction) {
            case 'left':
                selectedElement.style.left = left - 10 + 'px';
                break;
            case 'right':
                selectedElement.style.left = left + 10 + 'px';
                break;
            case 'up':
                selectedElement.style.top = top - 10 + 'px';
                break;
            case 'down':
                selectedElement.style.top = top + 10 + 'px';
                break;
        }

        // Move child images along with the selected element
        images.forEach((image) => {
            let imgLeft = parseFloat(image.style.left) || 0;
            let imgTop = parseFloat(image.style.top) || 0;

            switch (direction) {
                case 'left':
                    image.style.left = imgLeft - 10 + 'px';
                    break;
                case 'right':
                    image.style.left = imgLeft + 10 + 'px';
                    break;
                case 'up':
                    image.style.top = imgTop - 10 + 'px';
                    break;
                case 'down':
                    image.style.top = imgTop + 10 + 'px';
                    break;
            }
        });
    }
}


// ... (existing code) ...

// File and shape insertion functions

function insertImage() {
    const imageInput = document.getElementById('imageInput');
    const canvas = document.getElementById('canvas');

    if (imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const img = new Image();
            img.src = e.target.result;
            img.classList.add('movable'); // Add the 'movable' class to the created image
            if (selectedElement) {
                selectedElement.appendChild(img);
            } else {
                canvas.appendChild(img);
            }
        };

        reader.readAsDataURL(imageInput.files[0]);
    }
}


// ... (existing code) ...

// Apply styles to either the canvas or the selected element
function applyAllStyles() {
    if (selectedElement) {
        const formatBarStyles = document.getElementById('format-bar').style;

        // Apply all styles from the format bar to the selected element
        for (let i = 0; i < formatBarStyles.length; i++) {
            const property = formatBarStyles[i];
            const value = formatBarStyles.getPropertyValue(property);
            const priority = formatBarStyles.getPropertyPriority(property);
            selectedElement.style.setProperty(property, value, priority);
        }
    } else {
        // Apply styles to the entire canvas if no element is selected
        const canvas = document.getElementById('canvas');
        const formatBarStyles = document.getElementById('format-bar').style;

        for (let i = 0; i < formatBarStyles.length; i++) {
            const property = formatBarStyles[i];
            const value = formatBarStyles.getPropertyValue(property);
            const priority = formatBarStyles.getPropertyPriority(property);
            canvas.style.setProperty(property, value, priority);
        }
    }
}
// ... (existing code) ...

// Move selected element
function moveElement(direction) {
    if (selectedElement) {
        let left = parseFloat(selectedElement.style.left) || 0;
        let top = parseFloat(selectedElement.style.top) || 0;

        switch (direction) {
            case 'left':
                selectedElement.style.left = left - 10 + 'px';
                break;
            case 'right':
                selectedElement.style.left = left + 10 + 'px';
                break;
            case 'up':
                selectedElement.style.top = top - 10 + 'px';
                break;
            case 'down':
                selectedElement.style.top = top + 10 + 'px';
                break;
        }
    }
}

// Update shape color
function updateShapeColor() {
    const shapeColorInput = document.getElementById('shapeColorInput').value;
    if (selectedElement && selectedElement.classList.contains('shape')) {
        selectedElement.style.backgroundColor = shapeColorInput;
    }
}

// Undo and redo functionality
const undoStack = [];
const redoStack = [];

function saveState() {
    const canvasClone = document.getElementById('canvas').cloneNode(true);
    undoStack.push(canvasClone);
    redoStack.length = 0; // Clear redo stack when a new state is saved
}

function undo() {
    const canvas = document.getElementById('canvas');
    if (undoStack.length > 1) {
        redoStack.push(undoStack.pop());
        const prevState = undoStack[undoStack.length - 1].cloneNode(true);
        canvas.innerHTML = '';
        canvas.appendChild(prevState);
    }
}

function redo() {
    const canvas = document.getElementById('canvas');
    if (redoStack.length > 0) {
        const nextState = redoStack.pop().cloneNode(true);
        undoStack.push(nextState);
        canvas.innerHTML = '';
        canvas.appendChild(nextState);
    }
}

// Event listener for keyboard shortcuts (Ctrl+Z for undo, Ctrl+Y for redo)
document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'z') {
        undo();
    } else if (event.ctrlKey && event.key === 'y') {
        redo();
    }
});

// ... (existing code) ...

// File and shape insertion functions

function insertImage() {
    const imageInput = document.getElementById('imageInput');
    const canvas = document.getElementById('canvas');

    if (imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const img = new Image();
            img.src = e.target.result;
            img.classList.add('movable');
            if (selectedElement) {
                selectedElement.appendChild(img);
            } else {
                canvas.appendChild(img);
            }
            saveState(); // Save state after inserting an image
        };

        reader.readAsDataURL(imageInput.files[0]);
    }
}

// ... (existing code) ...
// Add this function to your existing JavaScript code
function updateShadowColor() {
    const shadowColorInput = document.getElementById('shadowColorInput').value;
    if (selectedElement) {
        selectedElement.style.boxShadow = `0 0 10px ${shadowColorInput}`;
    } else {
        document.getElementById('canvas').style.boxShadow = `0 0 10px ${shadowColorInput}`;
    }
}
// Add this function to your existing JavaScript code
function updateOpacity() {
    const opacityInput = document.getElementById('opacityInput').value;
    const opacityValueElement = document.getElementById('opacityValue');
    opacityValueElement.textContent = opacityInput;

    if (selectedElement) {
        selectedElement.style.opacity = opacityInput;
    } else {
        document.getElementById('canvas').style.opacity = opacityInput;
    }
}
// Add this function to your existing JavaScript code
function insertTextBox() {
    const canvas = document.getElementById('canvas');
    const textBox = document.createElement('div');
    textBox.contentEditable = true;
    textBox.classList.add('movable', 'text-box');
    if (selectedElement) {
        selectedElement.appendChild(textBox);
    } else {
        canvas.appendChild(textBox);
    }
    saveState(); // Save state after inserting a text box
}

// Modify the existing event listener in your JavaScript code
document.getElementById('canvas').addEventListener('mousedown', function (event) {
    const target = event.target;

    if (target.classList.contains('shape') || target.tagName === 'IMG' || target.classList.contains('text-box')) {
        selectedElement = target;
    } else if (window.getSelection().toString() !== '') {
        selectedElement = window.getSelection().focusNode.parentNode;
    } else {
        selectedElement = null;
    }
});

// File and shape insertion functions


// Modify the existing event listener in your JavaScript code
document.getElementById('canvas').addEventListener('mousedown', function (event) {
    const target = event.target;

    if (target.classList.contains('shape') || target.tagName === 'IMG' || target.classList.contains('text-box') || target.id === 'canvas') {
        selectedElement = target;
    } else if (window.getSelection().toString() !== '') {
        selectedElement = window.getSelection().focusNode.parentNode;
    } else {
        selectedElement = null;
    }
});
// Add this function to your existing JavaScript code
function updateShadowColor() {
    const shadowColorInput = document.getElementById('shadowColorInput').value;
    if (selectedElement) {
        selectedElement.style.boxShadow = `0 0 10px ${shadowColorInput}`;
    } else {
        document.getElementById('canvas').style.boxShadow = `0 0 10px ${shadowColorInput}`;
    }
}

// Add this function to your existing JavaScript code
function updateOpacity() {
    const opacityInput = document.getElementById('opacityInput').value;
    const opacityValueElement = document.getElementById('opacityValue');
    opacityValueElement.textContent = opacityInput;

    if (selectedElement) {
        selectedElement.style.opacity = opacityInput;
    } else {
        document.getElementById('canvas').style.opacity = opacityInput;
    }
}

// Add this function to your existing JavaScript code
// Add this function to your existing JavaScript code
// Add this function to your existing JavaScript code
function saveCanvasAsHTML() {
    const canvasContent = document.getElementById('canvas').innerHTML;

    // Create a Blob containing the HTML content
    const blob = new Blob([canvasContent], { type: 'text/html' });

    // Create a temporary link and trigger a download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'canvas_content.html';
    link.click();
}
function updateMargin(property) {
    const marginInput = document.getElementById(`${property}Input`).value;
    if (selectedElement) {
        selectedElement.style[property] = marginInput + 'px';
    } else {
        document.getElementById('canvas').style[property] = marginInput + 'px';
    }
}

function addLink() {
    const linkUrl = prompt('Enter the link URL:');
    if (linkUrl !== null && linkUrl !== '') {
        if (selectedElement) {
            if (selectedElement.tagName === 'A') {
                selectedElement.href = linkUrl;
            } else {
                const link = document.createElement('a');
                link.href = linkUrl;
                link.target = "_blank"; // Open link in a new tab
                selectedElement.appendChild(link);
                selectedElement = link;
            }
        } else {
            const link = document.createElement('a');
            link.href = linkUrl;
            link.target = "_blank"; // Open link in a new tab
            document.getElementById('canvas').appendChild(link);
            selectedElement = link;
        }
        saveState();
    }
}

document.getElementById('canvas').addEventListener('click', function (event) {
    const target = event.target;

    if (target.tagName === 'A') {
        event.preventDefault(); // Prevent the default link behavior
        const linkUrl = target.href;
        window.open(linkUrl, '_blank'); // Open the link in a new tab
    }
});
function saveCanvasAsImage() {
    const canvas = document.getElementById('canvas');

    // Use html2canvas to capture the canvas content as an image
    html2canvas(canvas, { scale: 2 }).then((canvasImage) => {
        // Create a temporary link and trigger a download
        const link = document.createElement('a');
        link.href = canvasImage.toDataURL('image/png');
        link.download = 'canvas_image.png';
        link.click();
    });
} function enableImageInsertion() {
    const imageInput = document.getElementById('imageInput');
    imageInput.click();
}