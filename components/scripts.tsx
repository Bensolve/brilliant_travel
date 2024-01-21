if (typeof window !== 'undefined') {
  // Check if running on the client side
  const nextButton = document.getElementById('next') as HTMLButtonElement | null;
  const prevButton = document.getElementById('prev') as HTMLButtonElement | null;
  const slideElement = document.getElementById('slide');

  if (nextButton && slideElement) {
    nextButton.onclick = function () {
      let lists = document.querySelectorAll('.item');
      if (lists.length > 0) {
        slideElement.appendChild(lists[0].cloneNode(true));
        slideElement.removeChild(lists[0]);
      }
    };
  }

  if (prevButton && slideElement) {
    prevButton.onclick = function () {
      let lists = document.querySelectorAll('.item');
      if (lists.length > 0) {
        slideElement.insertBefore(lists[lists.length - 1].cloneNode(true), slideElement.firstChild);
        slideElement.removeChild(lists[lists.length - 1]);
      }
    };
  }
}
