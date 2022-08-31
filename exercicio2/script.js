const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

//a
console.log(minhaString.trim() + minhaString.trim().length);
//b
console.log(minhaString + minhaString.length); //apresentam 58 caracteres antes 52 depois
//c
console.log(minhaString.replace("________", "\"sticioso\""));
