import React from 'react'
import Gallery from 'react-photo-gallery'

export default class CroissongGallery extends React.Component {
    render () {
      return (
        <Gallery photos={PHOTO_SET} />
      )
    }
}

const PHOTO_SET = [
  {
    src: 'images/room_small.jpg',
    width: 300,
    height: 300,
    aspectRatio: 1,
    lightboxImage: {
      src: 'images/room.jpg',
      srcset: [
	/* 'http://example.com/example/img1_1024.jpg 1024w',
	   'http://example.com/example/img1_800.jpg 800w',
	   'http://example.com/example/img1_300.jpg 300w', */
	/* 	'http://example.com/example/img1_320.jpg 320w', */
      ]
    }
  },
  {
    src: 'images/book_small.jpg',
    width: 300,
    height: 300,
    aspectRatio: 1,
    lightboxImage: {
      src: 'images/book.jpg',
      srcset: [
	/* 	'http://example.com/example/img1_1024.jpg 1024w', */
	/* 	'http://example.com/example/img1_800.jpg 800w', */
	/* 	'http://example.com/example/img1_300.jpg 300w', */
	/* 	'http://example.com/example/img1_320.jpg 320w', */
      ]
    }
  },
  {
    src: 'images/castle_small.jpg',
    width: 300,
    height: 300,
    aspectRatio: 1,
    lightboxImage: {
      src: 'images/castle.jpg',
      srcset: [
	/* 	'http://example.com/example/img1_1024.jpg 1024w', */
	/* 	'http://example.com/example/img1_800.jpg 800w', */
	/* 	'http://example.com/example/img1_300.jpg 300w', */
	/* 	'http://example.com/example/img1_320.jpg 320w', */
      ]
    }
  }
]
