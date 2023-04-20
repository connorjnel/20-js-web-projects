# Plan

1. Create canvas context - DONE
2. Create and draw ball - DONE
3. Create and draw paddle - DONE
4. Create bricks - DONE
5. Draw Score - DONE
6. Add update() - Animate - requestAnimationFrame(cb)
7. Move paddle
8. Keyboard event handlers to move paddle
9. Move ball
10. Add wall boundaries
11. Increase the score when bricks break
12. Lose - Redraw bricks, reset score

<!-- Colors -->

`const colors1 = ['#ff595e', '#ffca3a', '#8ac926', '#1982c4', '#6a4c93'];`
`const colors2 = ['#ffbe0b', '#fb5607', '#ff006e', '#8338ec', '#3a86ff'];`
`const colors3 = ['#af3800', '#fe621d', '#fd5200', '#00cfc1', '#00ffe7'];`

<!-- Set Colors -->

`function setColor(element) {`
`const color = getRandomColor();`
`element.style.background = color;`
` element.style.boxShadow = ``0 0 2px ${color}, 0 0 10px ${color}``; `
`}`

`function removeColor(element) {`
`element.style.background = '#1d1d1d';`
`element.style.boxShadow = '0 0 2px black';`
`}`

`function getRandomColor(color) {`
`return colors[Math.floor(Math.random() * colors.length)];`
`}`
