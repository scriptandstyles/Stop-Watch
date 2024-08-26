const pauseSvg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V6Z"
                        fill="#ffffff" />
                    <path
                        d="M14 6C14 4.11438 14 3.17157 14.5858 2.58579C15.1716 2 16.1144 2 18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V6Z"
                        fill="#ffffff" />
                </svg>`

const resumeSvg = `<svg viewBox="-1 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="Page-1" stroke="none" stroke-width="1" fill="" fill-rule="evenodd">
                        <g transform="translate(-65.000000, -3803.000000)" fill="#ffffff">
                            <g transform="translate(56.000000, 160.000000)">
                                <path
                                    d="M18.074,3650.7335 L12.308,3654.6315 C10.903,3655.5815 9,3654.5835 9,3652.8985 L9,3645.1015 C9,3643.4155 10.903,3642.4185 12.308,3643.3685 L18.074,3647.2665 C19.306,3648.0995 19.306,3649.9005 18.074,3650.7335"
                                    id="play-[#1000]">

                                </path>
                            </g>
                        </g>
                    </g>
                </svg>`


document.addEventListener('DOMContentLoaded', () => {
    let pause = document.querySelector('.pause')
    let start = document.querySelector('.start')
    let reset = document.querySelector('.reset')
    let interval;
    let ms = 0 //miliseconds-counter
    let s = 0 //seconds-counter
    let m = 0 //minute counter
    let h = 0 //hour counter

    start.addEventListener('click', () => {
        pause.classList.add('show')
        reset.classList.add('show')
        start.classList.remove('show')
        startTimer()
    })

    pause.addEventListener('click', () => {
        if (!pause.classList.contains('resume')) {
            pause.classList.add('resume')
            pause.innerHTML = resumeSvg
            pause.setAttribute('title', 'Resume')
            clearInterval(interval)
        }
        else {
            pause.classList.remove('resume')
            pause.innerHTML = pauseSvg
            pause.setAttribute('title', 'Pause')
            startTimer()
        }
    })

    reset.addEventListener('click', () => {
        pause.classList.remove('show')
        reset.classList.remove('show')
        start.classList.add('show')
        pause.classList.remove('resume')
        pause.innerHTML = pauseSvg
        pause.setAttribute('title', 'Pause')
        clearInterval(interval)
        document.getElementById('time-display').innerHTML = `00 : 00 : 00`
        document.getElementById('ms-display').innerHTML = `00`
        ms = 0
        s = 0
        m = 0
        h = 0
    })

    // FUNCTION STARTS THE TIMER WITH THE RELATIVE TIME VALUES
    function startTimer() {
        interval = setInterval(() => {
            ms++
            if (ms === 10) {
                s++
                ms = 0
            }
            if (s === 60) {
                m++
                s = 0
            }
            if (m === 60) {
                h++
                m = 0
            }

            document.getElementById('time-display').innerHTML = `${formatTime(h.toString())} : ${formatTime(m.toString())} : ${formatTime(s.toString())}`
            document.getElementById('ms-display').innerHTML = `${formatTime(ms.toString())}`
        }, 100);
    }

    // FUNCTION FORMATS THE PARAMETER AND RETURN THE FORMMATED DATA
    function formatTime(time) {
        time = time.padStart(2, '0')
        return time
    }
})