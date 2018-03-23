// export default function() {

//   // These comments are here to help you get started. Feel free to delete them.

//   /*
//     Config (with defaults).

//     Note: these only affect routes defined *after* them!
//   */

//   // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
//   // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
//   // this.timing = 400;      // delay for each request, automatically set to 0 during testing

//   /*
//     Shorthand cheatsheet:

//     this.get('/posts');
//     this.post('/posts');
//     this.get('/posts/:id');
//     this.put('/posts/:id'); // or this.patch
//     this.del('/posts/:id');

//     http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
//   */
// }

export default function() {
  this.namespace = '/api';
  
  let rentals = [{
      type: 'rentals',
      id: 'grand-old-mansion',
      attributes: {
        title: 'Grand Old Mansion',
        owner: 'Veruca Salt',
        city: 'San Francisco',
        type: 'Estate',
        bedrooms: 15,
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
        description: "This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests."
      },
      relationships: {
        "comments": {
            "data": [{
                "id": "21",
                "type": "comment"
            },{
                "id": "32",
                "type": "comment"
            }, {
                "id": "43",
                "type": "comment"
            }]
        }
      }
    }, {
      type: 'rentals',
      id: 'urban-living',
      attributes: {
        title: 'Urban Living',
        owner: 'Mike Teavee',
        city: 'Seattle',
        type: 'Condo',
        bedrooms: 1,
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg',
        description: "A commuters dream. This rental is within walking distance of 2 bus stops and the Metro."
      }
    }, {
      type: 'rentals',
      id: 'downtown-charm',
      attributes: {
        title: 'Downtown Charm',
        owner: 'Violet Beauregarde',
        city: 'Portland',
        type: 'Apartment',
        bedrooms: 3,
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
        description: "Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet."
      }
    }];

    let comments = [{
          id: "21",
          type: "comment",
          attributes: {
            message: "This is very nice"
          }
      },{
          id: "32",
          type: "comment",
          attributes: {
            message: "This is just okay"
          },
      }, {
          id: "43",
          type: "comment",
          attributes: {
            message: "I dont know what to say, its whatever"
          }
      }];

  this.get('/rentals', function(db, request) {
    if(request.queryParams.city !== undefined) {
      let filteredRentals = rentals.filter(function(i) {
        return i.attributes.city.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
      });
      return { data: filteredRentals };
    } else {
      return { data: rentals };
    }
  });

  // Find and return the provided rental from our rental list above
  this.get('/rentals/:id', function (db, request) {
    return { data: rentals.find((rental) => request.params.id === rental.id) };
  });

  this.get('/comments/:id', function (db, request) {
    return { data: comments.find((comment) => request.params.id === comment.id) };
  });
}