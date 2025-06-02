
document.getElementById('textInput').addEventListener('input', function () {
  document.getElementById('textPreview').innerText = this.value;
});
