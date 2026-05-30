import { onUnmounted } from 'vue'

export function useHold(action, interval = 60) {
    let timer = null

    function start() {
        stop()
        action()
        timer = setInterval(action, interval)
    }

    function stop() {
        if (timer) {
            clearInterval(timer)
            timer = null
        }
    }

    onUnmounted(stop)

    return { start, stop }
}
