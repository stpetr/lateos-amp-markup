$(function() {
    // Apply `Slick` slider to documents if needed
    $('.docs-links').each(function() {
        var $this = $(this);

        if ($this.children('.doc-link').length > 4) {
            $this.slick({
                dots: true,
                variableWidth: true,
            });
        }
    });

    // Expand blocks on click on read-mode
    $('.info .read-more').on('click', function(e) {
        console.log('qwerty');
        $(this).closest('.info').find('.additional-info').toggleClass('expanded');
        e.stopImmediatePropagation();
        return false;
    });
});