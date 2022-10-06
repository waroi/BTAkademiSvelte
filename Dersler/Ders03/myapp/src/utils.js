export function imagePreview(file) {
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.addEventListener("load", () => resolve(reader.result));
    reader.readAsDataURL(file);
  });
}
