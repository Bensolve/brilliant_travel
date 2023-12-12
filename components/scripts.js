// components/scripts.js

if (typeof window !== 'undefined') {
    // Check if running on the client side
    document.getElementById('next').onclick = function() {
      let lists = document.querySelectorAll('.item');
      document.getElementById('slide').appendChild(lists[0]);
    };

    document.getElementById('prev').onclick = function() {
      let lists = document.querySelectorAll('.item');
      document.getElementById('slide').appendChild(lists[0]);
    };
  }
  