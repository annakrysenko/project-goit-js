export function queueBtn(e) {
  if (e.target.className === 'queue') {
    const getArrayForQueue = JSON.parse(localStorage.getItem('add-to-queue'));
    getArrayForQueue.push(movie);
    localStorage.setItem('add-to-queue', JSON.stringify(getArrayForQueue));
    refs.modal.removeEventListener('click', queueBtn);
  }
}
