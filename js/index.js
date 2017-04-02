var taskService = (function () {
     return {
         baseUrl: 'https://jsonplaceholder.typicode.com/photos/',
         getTasks: function () {
             var self = this;           
            $.ajax({
                 url: self.baseUrl,
                 type: 'GET',
                 success: function (response) { // response is an array of objects                   
                     console.log('Success', response);
                     },
                 error: function (response) {
                     console.log('Error', response);
                 }
             })
         }
     }
 })(); 