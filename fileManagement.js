//Question 4.a
function filterFilesByType(files, fileType) {
  return files.filter(file => file.type === fileType).map(file => file.name);
}
const files = [
  { name: "document.pdf", size: 3, type: "pdf" },
  { name: "photo.jpg", size: 5, type: "jpg" },
  { name: "report.docx", size: 2, type: "docx" },
  { name: "presentation.ppt", size: 7, type: "ppt" }
];
console.log(filterFilesByType(files, "pdf"));


//Question 4.b
function getTotalSize(files) {
  return files.reduce((total, file) => total + file.size, 0);
}
console.log(getTotalSize(files));


//Question 4.c
function sortFilesBySize(files) {
  return files.sort((a, b) => b.size - a.size);
}
console.log(sortFilesBySize(files));


//Question 4.d
function getLargestFile(files) {
  return files.reduce((largest, file) => (file.size > largest.size ? file : largest), files[0]).name;
}
console.log(getLargestFile(files));


//Question 4.e>>> Answer: 
// - I would use map and filter method