

        let updateTimeout = null;

        function resetParam3Randomly(param) {
            const param3Input = document.getElementById(param);
            const minValue = parseInt(param3Input.min);
            const maxValue = parseInt(param3Input.max);
            const randomValue = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
            param3Input.value = randomValue;
        }

        function integerVal() {
            if (tointeger == 1) {
                tointeger = 0
            } else {
                tointeger = 1
            } 
            updatePattern();
        }

        function ditheringVal() {
            if (beyerDithering == 1) {
                beyerDithering = 0
            } else {
                beyerDithering = 1
            } 
            updatePattern();
        }

        function floydsteinVal() {
            if (floydsteinDithering == 1) {
                floydsteinDithering = 0
            } else {
                floydsteinDithering = 1
            } 
            updatePattern();
        }

        function invertVal() {
            if (invert == 1) {
                invert = 0
            } else {
                invert = 1
            } 
            updatePattern();
        }

        function selectStringsEndingWithRaku(arr) {
          if (!Array.isArray(arr)) {
            throw new Error("Input must be an array.");
          }

          const rakuStrings = arr.filter(str => str.endsWith('楽'));

          if (rakuStrings.length === 0) {
            return []; // Return an empty array if no strings end with '楽'
          }

          const randomIndex = Math.floor(Math.random() * rakuStrings.length);
          return [rakuStrings[randomIndex]]; // Return an array containing the single randomly selected element
        }

        function selectStringsEndingWithGray(arr) {
          if (!Array.isArray(arr)) {
            throw new Error("Input must be an array.");
          }

          const grayStrings = arr.filter(str => str.endsWith('鼠'));

          if (grayStrings.length === 0) {
            return []; // Return an empty array if no strings end with '鼠'
          }

          const randomIndex = Math.floor(Math.random() * grayStrings.length);
          return [grayStrings[randomIndex]]; // Return an array containing the single randomly selected element
        }

        function omoshiroiSelect() {
            rakufuncts = selectStringsEndingWithRaku(functions);
            const randomIndex = Math.floor(Math.random() * rakufuncts.length);
            const textarea = document.getElementById('function-code');

            textarea.value = functionPrefix + rakufuncts[randomIndex] + functionPostfix;

            randomizeValues();
        }

        function grayscaleSelect() {
            grayfuncts = selectStringsEndingWithGray(functions);
            const randomIndex = Math.floor(Math.random() * grayfuncts.length);
            const textarea = document.getElementById('function-code');

            textarea.value = functionPrefix + grayfuncts[randomIndex] + functionPostfix;

            randomizeValues();
        }



        function updatePattern() {
            if (updateTimeout) {
                clearTimeout(updateTimeout);
            }

            updateTimeout = setTimeout(() => {
                const param1 = parseInt(param1Input.value);
                const param2 = parseInt(param2Input.value);
                const param3 = parseInt(param3Input.value);
                const modfun = parseInt(modfunInput.value);

                if (omoshiroi) {
                    modfunInput.value = omoshiroiSelect();
                    modfun = parseInt(modfunInput.value);
                }

                try {
                    eval(functionCode.value);
                    
                    const data = imageData.data;
                    for (let y = 0; y < baseSize; y++) {
                        for (let x = 0; x < baseSize; x++) {

                            let value = 0;

                            // EVAL FUNCTION
                            if (modfun != 1) {
                                value = f(x, y, param1, param2, param3) % modfun;
                            } else {
                                value = f(x, y, param1, param2, param3);                                
                            }

                            if (tointeger == 1) {
                                value = Math.round(value);
                            }

                            if (beyerDithering == 1) {
                                value = bayerDither(x, y, value);
                            }



                            if (invert) value = 1 - value;
                            const color = value * 255;
                            
                            const idx = (y * baseSize + x) * 4;
                            data[idx] = data[idx + 1] = data[idx + 2] = color;
                            data[idx + 3] = 255;
                        }
                    }

                    if (floydsteinDithering == 1) {
                        applyFloydSteinberg(imageData, canvas.width, canvas.height);
                    }                    
                    
                    bufferCtx.putImageData(imageData, 0, 0);
                    
                    ctx.imageSmoothingEnabled = false;
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(bufferCanvas, 0, 0, canvas.width, canvas.height);
                    
                } catch (error) {
                    alert('Error in function code: ' + error.message);
                }
            }, 50);
        }

        let rotationCount = 0; // Keep track of rotations




        function floydSteinDither(imageData, width, height) {
          const data = imageData.data;

          function getPixelIndex(x, y) {
            return (y * width + x) * 4;
          }

          function getPixelValue(x, y) {
            if (x < 0 || x >= width || y < 0 || y >= height) {
              return 0; // Out of bounds, treat as black
            }
            const index = getPixelIndex(x, y);
            return data[index] / 255; // Convert 0-255 to 0-1
          }

          function setPixelValue(x, y, value) {
            if (x < 0 || x >= width || y < 0 || y >= height) {
              return; // Out of bounds, do nothing
            }
            const index = getPixelIndex(x, y);
            data[index] = Math.round(value * 255);
            data[index + 1] = Math.round(value * 255); // Grayscale, so R=G=B
            data[index + 2] = Math.round(value * 255);
          }

          for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
              const oldValue = getPixelValue(x, y);
              const newValue = Math.round(oldValue); // 0 or 1
              setPixelValue(x, y, newValue);
              const error = oldValue - newValue;

              // Distribute error
              setPixelValue(x + 1, y, getPixelValue(x + 1, y) + error * (7 / 16));
              setPixelValue(x - 1, y + 1, getPixelValue(x - 1, y + 1) + error * (3 / 16));
              setPixelValue(x, y + 1, getPixelValue(x, y + 1) + error * (5 / 16));
              setPixelValue(x + 1, y + 1, getPixelValue(x + 1, y + 1) + error * (1 / 16));
            }
          }
          return imageData;
        }

        // Example usage (assuming you have a canvas and 2D context):

        function applyFloydSteinberg(ctx, cw, ch){
            
            const ditheredImageData = floydSteinDither(imageData, cw, ch);
            ctx.drawImage(ditheredImageData, 0, 0, cw, ch);
        }




        function bayerDither(x, y, value) {
            const bayerMatrix = [
              [0, 8, 2, 10],
              [12, 4, 14, 6],
              [3, 11, 1, 9],
              [15, 7, 13, 5]
            ];

            const matrixSize = bayerMatrix.length; // Size of the Bayer matrix

            // for (let y = 0; y < /* ... image height ... */; y++) {
              // for (let x = 0; x < baseSize; x++) {
                // const value = /* ... your original color value (0-1) ... */;
                const color255 = value * 255;

                const matrixX = x % matrixSize; // Wrap x within matrix dimensions
                const matrixY = y % matrixSize; // Wrap y within matrix dimensions

                const threshold = bayerMatrix[matrixY][matrixX] / (matrixSize * matrixSize); // Normalize threshold

                let ditheredColor;
                if (value > threshold) {
                  ditheredColor = 255;
                } else {
                  ditheredColor = 0;
                }

              // }
            // }

            return ditheredColor;
        }


        function rotate90CCW() {
            const canvas = document.getElementById("canvas");
            const ctx = canvas.getContext("2d");
            const scale = 3;

            const radians = (90 * Math.PI) / 180;

            const originalWidth = canvas.width / scale;
            const originalHeight = canvas.height / scale;

            const rotatedWidth = Math.abs(originalWidth * Math.cos(radians)) + Math.abs(originalHeight * Math.sin(radians));
            const rotatedHeight = Math.abs(originalWidth * Math.sin(radians)) + Math.abs(originalHeight * Math.cos(radians));

            canvas.width = rotatedWidth * scale;
            canvas.height = rotatedHeight * scale;

            ctx.setTransform(1, 0, 0, 1, 0, 0);

            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.rotate(radians * (rotationCount + 1)); // Rotate by accumulated angle
            ctx.scale(scale, scale);

            // ***THE FIX: Only clear the *newly rotated* area***
            ctx.clearRect(-rotatedWidth / 2, -rotatedHeight / 2, rotatedWidth, rotatedHeight);

            ctx.drawImage(bufferCanvas, -originalWidth / 2, -originalHeight / 2);

            rotationCount++; // Increment rotation count
        }

        function flipCanvas(originalCanvas) {
            // Create a new canvas with the same dimensions
            const flippedCanvas = document.createElement('canvas');
            const width = originalCanvas.width;
            const height = originalCanvas.height;
            flippedCanvas.width = width;
            flippedCanvas.height = height;
            
            // Get the context for both canvases
            const ctx = flippedCanvas.getContext('2d');
            
            // Save the current context state
            ctx.save();
            
            // Translate and scale to flip both horizontally and vertically
            ctx.translate(width, height);
            ctx.scale(-1, -1);
            
            // Draw the original canvas onto the new one
            ctx.drawImage(originalCanvas, 0, 0);
            
            // Restore the context state
            ctx.restore();
            
            return flippedCanvas;
        }

        function saveImage() {
            const link = document.createElement('a');
            link.download = 'pattern.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        }

        function saveImage4X() {

            const tempCanvas = document.createElement('canvas');
            const tempCtx = tempCanvas.getContext('2d');
            tempCanvas.width = canvas.width * 2;
            tempCanvas.height = canvas.height * 2;

            // Draw original (top-left)
            tempCtx.drawImage(canvas, 0, 0);

            // Draw horizontally flipped (top-right)
            tempCtx.save();
            tempCtx.translate(canvas.width * 2, 0);
            tempCtx.scale(-1, 1);
            tempCtx.drawImage(canvas, 0, 0);
            tempCtx.restore();

            // Draw vertically flipped (bottom-left)
            tempCtx.save();
            tempCtx.translate(0, canvas.height * 2);
            tempCtx.scale(1, -1);
            tempCtx.drawImage(canvas, 0, 0);
            tempCtx.restore();

            // Draw both flipped (bottom-right)
            tempCtx.save();
            tempCtx.translate(canvas.width * 2, canvas.height * 2);
            tempCtx.scale(-1, -1);
            tempCtx.drawImage(canvas, 0, 0);
            tempCtx.restore();

            // Save the combined image
            const link = document.createElement('a');
            link.download = 'pattern.png';
            link.href = tempCanvas.toDataURL('image/png');
            link.click();

        }

        const functionPrefix = `  function f(x, y, param1, param2, param3) {
if (x === 0) return 0;
        
return `;

        const functionPostfix = `

}
        `;

        function selectRandomFunction() {
            const randomIndex = Math.floor(Math.random() * functions.length);
            const textarea = document.getElementById('function-code');

            textarea.value = functionPrefix + functions[randomIndex] + functionPostfix;

//          EXPERIMENTAL
//          textarea.value = functionPrefix + generateRandomExpression('param1', 'param2', 'param3') + functionPostfix;

            randomizeValues();
        }

        function randomizeValues() {
            resetParam3Randomly('param1');
            resetParam3Randomly('param2');
            resetParam3Randomly('param3');

            updatePattern();
        }

        /**
         * Generates an array of colors representing a quantized gradient between two colors
         * @param {string} startColor - Starting color in hex format (e.g. '#ff0000')
         * @param {string} endColor - Ending color in hex format (e.g. '#0000ff')
         * @param {number} steps - Number of colors to generate in the gradient
         * @returns {string[]} Array of hex color strings
         */
        function generateQuantizedGradient(startColor, endColor, steps) {
          // Convert hex to RGB
          const hexToRgb = (hex) => {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16)
            } : null;
          };

          // Convert RGB to hex
          const rgbToHex = (r, g, b) => {
            const componentToHex = (c) => {
              const hex = Math.round(c).toString(16);
              return hex.length === 1 ? '0' + hex : hex;
            };
            return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
          };

          const start = hexToRgb(startColor);
          const end = hexToRgb(endColor);

          if (!start || !end) {
            throw new Error('Invalid hex color format');
          }

          const gradient = [];

          // Calculate step size for each color component
          const stepR = (end.r - start.r) / (steps - 1);
          const stepG = (end.g - start.g) / (steps - 1);
          const stepB = (end.b - start.b) / (steps - 1);

          // Generate colors
          for (let i = 0; i < steps; i++) {
            const r = start.r + (stepR * i);
            const g = start.g + (stepG * i);
            const b = start.b + (stepB * i);
            gradient.push(rgbToHex(r, g, b));
          }

          return gradient;
        }

        function generateRandomExpression(params) {
          const operators = ['+', '-', '*', '/', '%', '&', '|', '^', '~'];
          const operands = ['x', 'y'];

          function getRandomElement(array) {
            return array[Math.floor(Math.random() * array.length)];
          }

          function generateSubExpression() {
            const operand1 = getRandomElement(operands);
            const operator = getRandomElement(operators);
            const operand2 = Math.random() < 0.5 ? getRandomElement(operands) : 
                              Math.random() < 0.5 ? getRandomElement(params) : 
                              Math.random() < 0.5 ? `(${generateSubExpression()})` : 
                              Math.floor(Math.random() * 10); 

            return `(${operand1} ${operator} ${operand2})`;
          }

          let expression = generateSubExpression();

          // Add more layers of complexity
          for (let i = 0; i < Math.floor(Math.random() * 3); i++) {
            const newOperator = getRandomElement(operators);
            const newOperand = Math.random() < 0.5 ? generateSubExpression() : 
                              Math.random() < 0.5 ? getRandomElement(params) : 
                              Math.random() < 0.5 ? `(${generateSubExpression()})` : 
                              Math.floor(Math.random() * 10); 
            expression = `(${expression} ${newOperator} ${newOperand})`;
          }

          return expression + ` % ${getRandomElement(params)}`; 
        }