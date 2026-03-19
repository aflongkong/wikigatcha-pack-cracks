// step 1: open your preferred browser's dev console

// step 2: allow pasting into your console if required
// note: you should always verify code to make sure it can be trusted.
// never paste code into your dev console that you don't trust.

// step 3: paste gePackOpenDelays(min, max) function into your console.
/**
 * randomizes a value between your min and max times in milliseconds
 * @param min 
 * @param max 
 * @returns 
 */
function getPackOpenDelays(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled;
}

// step 4: paste openPacks() function into your console
/**
 * opens packs on a timer
 */
async function openPacks() {
    try {
        var packSource = '/wikipedia_pack_1.png';
        var goldPackSource = '/wikipedia_pack_2_gold.png';
        var packToClick = document.querySelector(`img[src="${packSource}"]`);
        var goldPackToClick = document.querySelector(`img[src="${goldPackSource}"]`);

        if (packToClick === null && goldPackSource === null) {
            throw new Error('no pack found');
        } else {
            var finalPackToClick = packToClick !== null ? packToClick : goldPackToClick;
            finalPackToClick.click();
            setTimeout(function() {
                'clicked, awaiting return'
            }, getPackOpenDelays(4000, 6000));
        }

        var buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            if (button.innerText.trim() === 'BACK TO PACKS') {
                button.click();
                return;
            }
        });
        setTimeout(openPacks, getPackOpenDelays(4000, 6000));
    } catch (ex) {
        // TODO: clean up exception output, it frequently throws this exception.
        console.error('could not open packs. attempting to return to the main screen');
        console.error(ex);

        if (ex != 'no pack found') {
            var buttons = document.querySelectorAll('button');
            buttons.forEach(button => {
                if (button.innerText.trim() === 'BACK TO PACKS') {
                    button.click();
                    return;
                }
            });
        }
        setTimeout(openPacks, getPackOpenDelays(4000, 6000));
    }
}

// step 5: paste this line into your console, it will start running.
openPacks();

// step 6: if the packs stop opening, refresh your browser page. you will need to repeat steps 2 to 5