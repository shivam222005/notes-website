class NotesApp {
  constructor() {
    this.notes = JSON.parse(localStorage.getItem("notes")) || [];
    this.currentNote = null;
    this.initializeElements();
    this.addEventListeners();
    this.displayNotesList();
  }

  displayNotesList() {
  this.notesList.innerHTML="";
  }
  initializeElements() {
    this.notesList = document.getElementById("notesList");
    this.titleInput = document.getElementById("titleInput");
    this.noteContent = document.getElementById("noteContent");
    this.previewContent = document.getElementById("previewContent");
    this.newNoteBtn = document.getElementById("newNoteBtn");
    this.saveNoteBtn = document.getElementById("saveNoteBtn");
    this.deleteNoteBtn = document.getElementById("deleteNoteBtn");
    this.tabBtns = document.querySelectorAll(".tab-btn");
    this.darkModeBtn = document.getElementById("darkModeToggle");
  }
  addEventListeners() {
    this.newNoteBtn.addEventListener("click", () => this.createNewNote());
    this.saveNoteBtn.addEventListener("click", () => this.saveNote());
    this.deleteNoteBtn.addEventListener("click", () => this.deleteNote());
    this.noteContent.addEventListener("click", () => this.updatePreview());
    this.tabBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => this.switchTab(e));
    });
    this.darkModeBtn.addEventListener("click", () => this.toggleDarkMode());
  }
  createNewNote() {}
  saveNote() {}
  deleteNote() {}
  updatePreview() {}
  switchTab(e) {
    const tab = e.target.dataset.tab;
    this.tabBtns.forEach((btn) => btn.classList.remove("active"));
e.target.classList.add("active");
  

if (tab === "preview"){
    this.noteContent.style.display="none";
    this.previewContent.style.display="block";
} else{
      this.noteContent.style.display="block";
    this.previewContent.style.display="none";

}
  
}
  toggleDarkMode() {}
  loadNote(note){
  this.currentNote=note;
  this.titleInput.value = note.title;
  this.noteContent.value = note.Content;
  this.updatePreview();
  }
updatePreview(){
  const markdown = this.noteContent.value; 
  this.previewContent.lnnerHTML = marked.parse(markdown);

}

 displayNotesList() {
  this.notesList.innerHTML="";
  this.notes.forEach((note) =>{
const noteElement = this.createNoteElement(note);
 this.notesList.appendChild(noteElement);
  });
}

  createNoteElement(note) {
    const div = document.createElement("div");
    div.classList.add("note-item");
    if (this.currentNote && this.currentNote.id === note.id) {
      div.classList.add("active");
    
  }
  const formattedDate = new Date(note.lastModified).toLocaleDateString(
      "en-GB",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    ); // 20 Mar 2025

    div.innerHTML = `
      <h3>${note.title}</h3>
      <p>${formattedDate}</p>
    `;
    div.addEventListener("click", () => this.loadNote(note));
    return div;

}}
new NotesApp();
