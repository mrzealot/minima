$(function () {
    const nanobar = new Nanobar({
        id: 'progressbar'
    })

    $(document).on('scroll', function() {
        const num = $(window).scrollTop()
        const denom = $(document).height() - $(window).height()
        const percentage = num / denom * 100
        nanobar.go(percentage)
    })
})