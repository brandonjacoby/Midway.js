'use strict'

class Midway
  constructor: ->
    @centerHorizontalItems = $('.midway-horizontal')
    @centerVerticalItems = $('.midway-vertical')

    @horizontalCss =
      display: 'inline'
      position: 'absolute'
      left: '50%'

    @verticalCss =
      display: 'inline'
      position: 'absolute'
      top: '50%'

    @update()

  update: ->
    @centerHorizontalItems
      .each ->
        $(@).css 'marginLeft', (-$(@).outerWidth() / 2)
      .css @horizontalCss

    @centerVerticalItems
      .each ->
        $(@).css 'marginTop', (-$(@).outerHeight() / 2)
      .css @verticalCss

$(document).ready ->
  _midwayAlignment = new Midway()
  $(window).on 'load, resize', _midwayAlignment.update
