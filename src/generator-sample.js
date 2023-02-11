function* workflow() {
  yield "Step one";
  console.log("this is a console.log");
  yield "Step two";
  return "Finish";
}

const work = workflow();
console.log(work.next());
console.log(work.next());
console.log(work.next());
