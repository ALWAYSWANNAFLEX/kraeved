$('.grid').isotope({
    layoutMode: 'packery',
    itemSelector: '.grid-item',
    percentPosition: true,
    packery: {
      columnWidth: '.grid-sizer'
    }
  });
  